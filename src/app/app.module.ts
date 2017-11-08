import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';

import { DatafetchserviceService } from './datafetchservice.service';
@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DatafetchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
