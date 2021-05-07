import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomEmailValidator } from 'src/app/classes/custom-email-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {


  genders: string[] = ['Male', 'Female'];

  languages: string[] = ['English', 'Arabic', 'Hindi', 'Urdu'];

  pgTechnologies: string[] = ['Java', 'Python', 'Go', 'PHP'];

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();

    // https://stackoverflow.com/questions/4244896/dynamically-access-object-property-using-variable
    // https://stackoverflow.com/questions/58246831/looping-through-form-array-inside-form-group-angular
    // this.pgTechnologies.forEach(element => {
    //   this.technologies.push(this.fb.group({ [element]: new FormControl(element == 'Java' ? true : false) }))
    // });

  }

  initializeForm(): void {
    this.reactiveForm = this.fb.group({
      email: new FormControl('j.riyazu@gmail.com', [
        CustomEmailValidator.needed,
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ], CustomEmailValidator.unique),
      language: new FormControl('English'),
      gender: new FormControl('Male'),
      technologies: this.fb.group({
        java: new FormControl(true),
        python: new FormControl(false),
        go: new FormControl(false),
        php: new FormControl(false)
      }),
      address: this.fb.group({
        city: new FormControl('B.Kothakota'),
        street: new FormControl('Santha Bazar'),
        zipcode: new FormControl('517370')
      }),
      hobbies: this.fb.array([this.fb.control('')])
    });
  }

  get technologies(): FormArray {
    return this.reactiveForm.get('technologies') as FormArray;
  }

  get hobbies(): FormArray {
    return this.reactiveForm.get('hobbies') as FormArray;
  }

  get email(): AbstractControl {
    return this.reactiveForm.get('email');
  }

  onSubmit(): void {
    console.log(this.reactiveForm);

  }

  removeHobby(index: number): void {
    if (confirm(`do you want to delete hobby: ${index + 1}`))
      this.hobbies.removeAt(index);
  }

  addHobby(): void {
    this.hobbies.push(this.fb.control(''));
  }

}
