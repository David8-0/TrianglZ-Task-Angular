import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() isExpanded: boolean = true;
   specificWidth:number = 767;

  ngOnInit(): void {
    this.checkWindowWidth(window.innerWidth);
  }

  toggleSideBar(){
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const target = event.target as Window;
    this.checkWindowWidth(target.innerWidth);
  }

  private checkWindowWidth(width: number): void {
    if (width <= this.specificWidth) {
      this.isExpanded = false;
    }
  }

}
