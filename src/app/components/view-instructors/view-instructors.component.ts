import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-view-instructors',
  templateUrl: './view-instructors.component.html',
  styleUrls: ['./view-instructors.component.css']
})
export class ViewInstructorsComponent implements OnInit{
  instructors: Instructor[] = [];

  constructor(
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.getInstructors();
  }

  private getInstructors() {
    this.instructorService.getInstructors().subscribe((data) => {
      this.instructors = data;
    });
  }

  deleteInstructor(instructorId: number) {
    if (confirm('Are you sure you want to delete this instructor?')) {
      this.instructorService.deleteInstructor(instructorId).subscribe(() => {
        this.getInstructors();
      });
    }
  }
}
