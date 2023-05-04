import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menuItems = [
    {
      label: 'Mission',
      id: 'mission',
      isSelected: true
    },
    {
      label: 'Academic',
      id: 'academic',
      isSelected: false
    },
    {
      label: 'Teams',
      id: 'teams',
      isSelected: false
    },
    {
      label: 'Student Life',
      id: 'student-life',
      isSelected: false
    },
    {
      label: 'Rink',
      id: 'rink',
      isSelected: false
    },
    {
      label: 'Staff',
      id: 'staff',
      isSelected: false
    },
    {
      label: 'Sponsors',
      id: 'sponsors',
      isSelected: false
    },
    {
      label: 'Contact Us',
      id: 'contact-us',
      isSelected: false
    }
  ]
}
