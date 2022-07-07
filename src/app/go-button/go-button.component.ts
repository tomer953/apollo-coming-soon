import { of } from 'rxjs';
import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'go-button',
  templateUrl: './go-button.component.html',
  styleUrls: ['./go-button.component.scss'],
})
export class GoButtonComponent implements OnInit {
  isClicked = false;
  hideButton = false;

  options: AnimationOptions = {
    path: '/assets/rocket-launch.json',
    loop: false,
  };

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {}

  onAnimationComplete(): void {
    this.ngZone.run(() => {
      window.location.replace('https://www.sleepiest.com/');
    });
  }

  onClick() {
    this.hideButton = true;
    setTimeout(() => (this.isClicked = true), 1000);
  }
}
