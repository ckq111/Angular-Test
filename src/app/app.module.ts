import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplaydataComponent } from './components/displaydata/displaydata.component';
import { RouterModule, Routes} from '@angular/router';
import { DatafetchserviceService } from './datafetchservice.service';
import { DataAfterProcessComponent } from './components/data-after-process/data-after-process.component';

const appRoutes: Routes = [
  { path: 'mainData', component: DisplaydataComponent },
  { path: 'processedData', component: DataAfterProcessComponent },
  { path: '',   redirectTo: '/mainData', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    DisplaydataComponent,
    DataAfterProcessComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [DatafetchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
