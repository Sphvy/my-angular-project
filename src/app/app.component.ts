import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('submitted form ', this.registerForm.value)
  }
}
