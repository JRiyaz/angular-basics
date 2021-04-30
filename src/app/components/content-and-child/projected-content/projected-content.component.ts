import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildContentComponent } from '../child-content/child-content.component';

@Component({
  selector: 'app-projected-content',
  templateUrl: './projected-content.component.html',
  styleUrls: ['./projected-content.component.css']
})
export class ProjectedContentComponent implements OnInit, AfterViewInit, AfterContentInit {

  titles: string[] = [
    'Title 1',
    'Title 2',
    'Title 3'
  ]

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Access the child content and modify it

  @ViewChild(ChildContentComponent) firstChildContent: ChildContentComponent;
  @ViewChildren(ChildContentComponent) allChildContents: QueryList<ChildContentComponent>;

  // Access the Projected Content and modify it

  @ContentChild(ChildContentComponent) firstProjectedContent: ChildContentComponent;
  @ContentChildren(ChildContentComponent) allProjectedContent: QueryList<ChildContentComponent>;

  ngAfterViewInit(): void {
    // It is recommended to change the child content from ngAfterViewInit

    //  Below code only changes first occurrence of the child content 
    this.firstChildContent.title = "Title is changed using @ViewChild decorator";

    // Changing all the content of child
    let index = 0;
    let prefix = 'st';

    this.allChildContents.forEach(content => {

      index++;
      switch (index) {
        case 1: prefix = 'st';
          break;
        case 2: prefix = 'nd';
          break;
        case 3: prefix = 'rd';
          break;
        default: prefix = 'th';
          break;
      }

      content.title = `${index}${prefix} child content using @ViewChildren decorator`;
    });

  }

  ngAfterContentInit(): void {

    // It is recommended to change the child content from ngAfterViewInit

    //  Below code only changes first occurrence of the child content 
    this.firstProjectedContent.title = "Projected Content changed using @ContentChild decorator";

    // Changing all the content of child
    let index = 0;
    let prefix = 'st';

    this.allProjectedContent.forEach(content => {

      index++;
      switch (index) {
        case 1: prefix = 'st';
          break;
        case 2: prefix = 'nd';
          break;
        case 3: prefix = 'rd';
          break;
        default: prefix = 'th';
          break;
      }

      content.title = `${index}${prefix} Projected Content changed using @ContentChildren decorator`;
    });
  }

}
