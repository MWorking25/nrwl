import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RflibModule} from '@RF/rflib';
import { DashboardCountsDirective } from './dashboard-counts.directive';
import { SigninComponent } from './signin/signin.component'
  

const appRoute : Routes =[
  {path:'',component:SigninComponent},
  {path:'Dashboard',loadChildren:'@RF/rflib#RflibModule'}
];


@NgModule({
  declarations: [AppComponent, DashboardCountsDirective, SigninComponent],
  imports: [
    BrowserModule,
    RflibModule,
    NxModule.forRoot(),
    RouterModule.forRoot(appRoute, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
