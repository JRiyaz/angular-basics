import { Component, OnInit } from '@angular/core';
import { ContactComponentDeActivate } from 'src/app/guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, ContactComponentDeActivate {

  constructor() { }

  areYouSure(): boolean {
    return confirm("Are you sure to leave the page?");
  }

  ngOnInit(): void {
  }

}
