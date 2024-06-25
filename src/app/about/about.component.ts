import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isCollapsed = true;

  toggleAccordion() {
    this.isCollapsed = !this.isCollapsed;
  }

}
