import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavItem } from './NavItem.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ NgClass, MatButtonModule, MatToolbarModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input("activePage")
  activePage = "home"
  navList = [
    new NavItem("home", "Home"),
    new NavItem("about", "About"),
    new NavItem("skills", "Skills"),
    new NavItem("experience", "Experience"),
    new NavItem("contact", "Contact"),
  ]
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.activePage = section
  }
}
