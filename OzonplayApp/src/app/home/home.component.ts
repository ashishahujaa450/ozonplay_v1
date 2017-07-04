import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Slider} from '../plugins/slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('slider') private slider:ElementRef;
  public sliderObj:Slider;

  constructor() { }

  ngOnInit() {
    this.sliderObj = new Slider(this.slider);
  }
}
