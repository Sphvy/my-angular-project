import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ReactiveFormsModule, 
  ], 
  templateUrl: './enter-data.component.html',
  styleUrl: './enter-data.component.css'
})
export class EnterDataComponent {
  registerForm = this.fb.group({
    id: "2",
    email: "",
    password: "",
  });


  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    console.log('submitted form ', this.registerForm.value)

    this.router.navigate(['/thank-you']);
  }
}
