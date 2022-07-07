import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { interval, Subscription } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() finalDate!: Date;
  @Output() onCountdownDone = new EventEmitter<boolean>();

  cnt$!: Subscription;
  showCountdown = false;
  showButton = true;

  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor() {}

  ngOnInit(): void {
    this.updateCountdown();
    this.cnt$ = interval(1000).subscribe((x) => this.updateCountdown());
  }

  updateCountdown() {
    const now = new Date().getTime();
    const timeleft = this.finalDate.getTime() - now;

    // time ended, stop interval, emit event to parent
    if (timeleft < 0) {
      this.cnt$?.unsubscribe();
      this.onCountdownDone.emit(true);
      return;
    }

    // calc new values
    const m = 1000 * 60;
    const h = 60 * m;
    const d = 24 * h;

    this.days = Math.floor(timeleft / d);
    this.hours = Math.floor((timeleft % d) / h);
    this.minutes = Math.floor((timeleft % h) / m);
    this.seconds = Math.floor((timeleft % m) / 1000);
  }
}
