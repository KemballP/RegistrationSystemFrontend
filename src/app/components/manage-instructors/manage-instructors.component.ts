import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor.model';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-manage-instructors',
  templateUrl: './manage-instructors.component.html',
  styleUrls: ['./manage-instructors.component.css']
})
export class ManageInstructorsComponent {

  instructor: Instructor = {} as Instructor;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params  => {
      const id = params.get('id');
      console.log("id = "+id)
      if (id) {
        this.instructorService.getInstructors().subscribe(data => {
          this.instructor = data.find(c => c.instructorId.toString() === id)!;
        });
      }
    });
  }

  saveInstructor() {
    if (this.instructor.instructorId) {
      this.instructorService.updateInstructor(this.instructor).subscribe(() => {
        this.router.navigate(['/instructors']);
      });
    } else {
      this.instructorService.addInstructor(this.instructor).subscribe(() => {
        this.router.navigate(['/instructors']);
      });
    }
  }
}
