import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Instructor } from '../models/instructor.model';
import { EMPTY, Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private apiUrl = 'https://localhost:7247/instructors'; // replace with your actual API endpoint

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(this.apiUrl)
      .pipe(
        tap(_ => this.log('fetched instructors')),
        catchError(this.handleError)
      );
  }

  getInstructor(id: number): Observable<Instructor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Instructor>(url)
      .pipe(
        tap(_ => this.log(`fetched instructor id=${id}`)),
        catchError(this.handleError)
      );
  }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(this.apiUrl, JSON.stringify(instructor), this.httpOptions)
      .pipe(
        tap(_ => this.log('added instructor')),
        catchError(this.handleError)
      );
  }

  updateInstructor(instructor: Instructor): Observable<any> {
    const url = `${this.apiUrl}/${instructor.instructorId}`;
    return this.http.put(url, JSON.stringify(instructor), this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated instructor id=${instructor.instructorId}`)),
        catchError(this.handleError)
      );
  }

  deleteInstructor(id: number): Observable<Instructor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Instructor>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted instructor id=${id}`)),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.log(`An error occurred: ${error.message}`);
    alert(`An error occurred: ${error.message}`);
    return EMPTY;
  }

  private log(message: string): void {
    this.messageService.add(`InstructorService: ${message}`);
  }
}
