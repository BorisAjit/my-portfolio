import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './pages/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, NavbarComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  title = 'my-portfolio';
  isScrolled = false;
  currentSection = 'home'

  onScroll(){
    const halfway = window.innerHeight / 2;
    const sections = document.querySelectorAll('section')
    let activeSection = ''
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= halfway && rect.bottom >= halfway) {
        activeSection = section.id;
      }
    })
    if (activeSection && this.currentSection !== activeSection) {
      this.currentSection = activeSection;
    }
  }
}
