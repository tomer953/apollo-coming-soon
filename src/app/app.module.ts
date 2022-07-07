import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import lottie
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web/build/player/lottie_svg';


// components
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { GoButtonComponent } from './go-button/go-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    GoButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: () => player })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
