import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  genders: string[];

  languages: string[];

  agreement: boolean;

  constructor() { }

  ngOnInit(): void {

    this.genders = ['Male', 'Female'];

    this.languages = ['English', 'Arabic', 'Hindi', 'Urdu'];

    this.agreement = true;
  }

  handleformSubmit(templateForm: any): void {
    console.log(templateForm);

  }

}
