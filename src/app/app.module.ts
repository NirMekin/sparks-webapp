import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {TooltipModule} from 'ng2-tooltip-directive';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PreviewComponent} from './preview/preview.component';
import {WebcamModule} from 'ngx-webcam';
import {CameraComponent} from './camera/camera.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    AppRoutingModule,
    FormsModule,
    TooltipModule,
    NgbModule.forRoot(),
    HttpClientModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 4,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
