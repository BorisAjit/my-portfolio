import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private scroller: ViewportScroller){}
  onClick () {
    console.log("helloh")
    console.log( this.scroller.getScrollPosition() )
  }

}
