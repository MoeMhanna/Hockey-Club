import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewportScroller: ViewportScroller) {
  }
  public scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  public menuItems = [
    {
      label: 'Mission',
      id: 'mission',
    },
    {
      label: 'Academic',
      id: 'academic'
    },
    {
      label: 'Teams',
      id: 'teams'
    },
    {
      label: 'Student Life',
      id: 'student-life'
    },
    {
      label: 'Rink',
      id: 'rink'
    },
    {
      label: 'Staff',
      id: 'staff'
    },
    {
      label: 'Sponsors',
      id: 'sponsors'
    },
    {
      label: 'Contact Us',
      id: 'contact-us'
    }
  ]
}
