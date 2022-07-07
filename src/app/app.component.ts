import { Component, NgZone, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spaceOptions: AnimationOptions = {
    path: '/assets/space.json',
  };

  loaderOptions: AnimationOptions = {
    path: '/assets/rocket-loader.json',
    loop: false,
  };

  showCountdown = false;
  finalDate!: Date;
  showButton = false;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    // this.finalDate = new Date('2022-07-20T13:00:00.000Z');
    this.finalDate = new Date(new Date().getTime() + 1000 * 20);
  }

  spaceCreated(animationItem: AnimationItem) {
    animationItem.setSpeed(0.2);
  }

  // when loader lottie done - show countdown
  onAnimationComplete(): void {
    this.ngZone.run(() => {
      this.showCountdown = true;
    });
  }

  // when countdown done - show go button
  onCountdownDone(done: boolean) {
    this.showCountdown = false;
    this.showButton = true;
  }
}
