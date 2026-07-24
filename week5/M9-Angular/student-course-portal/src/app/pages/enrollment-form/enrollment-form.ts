import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  submitted = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }
}
