import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, AsyncValidatorFn,ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: `form.component.html`,
  styleUrls: [`./form.component.css`],
  imports: [ReactiveFormsModule, CommonModule],
  providers: [],
  standalone: true
})
export class FormComponent implements OnInit {
  jobApplicationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.jobApplicationForm = this.fb.group({
      firstName: ['', {
        validators: [Validators.required],
        asyncValidators: [this.nameExistsValidator()],
        updateOn: 'blur'
      }],
      lastName: ['', {
        validators: [Validators.required],
        asyncValidators: [this.nameExistsValidator()],
        updateOn: 'blur'
      }],
      skills: this.fb.array([])
    });
  }

  // Getter for easy access to skills FormArray
  get skills(): FormArray {
    return this.jobApplicationForm.get('skills') as FormArray;
  }

  // Getter for firstName for easier error checking
  get firstName(): AbstractControl {
    return this.jobApplicationForm.get('firstName')!;
  }

  // Getter for lastName for easier error checking
  get lastName(): AbstractControl {
    return this.jobApplicationForm.get('lastName')!;
  }

  // Add a new skill input
  addSkill() {
    this.skills.push(this.fb.control('', Validators.required));
  }

  // Remove a skill input
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  // Custom async validator to check name existence
  nameExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{[key: string]: any} | null> => {
      // Simulated database check
      return this.checkNameExists(control.value).pipe(
        map(exists => exists ? { nameExists: true } : null)
      );
    };
  }

  // Simulated database service method
  checkNameExists(name: string): Observable<boolean> {
    // Simulating database check with predefined names
    const existingNames = ['John', 'Jane', 'Alice', 'Bob'];
    
    return of(existingNames.includes(name)).pipe(
      delay(1000) // Simulate network delay
    );
  }

  // Form submission handler
  onSubmit() {
    if (this.jobApplicationForm.valid) {
      console.log(this.jobApplicationForm.value);
      // Handle form submission
    }
  }
}
