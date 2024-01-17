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
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  registerForm = this.fb.group({
    id: "2",
    domainName: "",
    domain: this.fb.group({
      type: "" 
    })
  });

  domainTypes = [
    "ee",
    "eu"
  ]

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    console.log('submitted form ', this.registerForm.value)

    this.router.navigate(['/enter-data']);
  }
}