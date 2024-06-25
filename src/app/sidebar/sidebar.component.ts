import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // When Clicked Out it will toggle the nav bar
    const clickInside = (event.target as HTMLElement).closest('.sidebar, .toggle-btn, .toggle-btn-t');
    if (!clickInside) {
      this.isCollapsed = true;
    }
  }
}
