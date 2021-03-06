import { Injector,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {A11yModule} from '@angular/cdk/a11y';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {PortalModule} from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonComponent} from '../../../elements/src/lib/button/button.component';
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';

import { NavigationComponent } from './navigation/navigation.component';
import { HeadersComponent } from './headers/headers.component';
import { CountsDashComponent } from './counts-dash/counts-dash.component';
import { AnalytsDashComponent } from './analyts-dash/analyts-dash.component';
import { DashboardCountsDirective} from './directives/dashboard-counts.directive';
import { ThemeingDirective } from './directives/themeing.directive';
import { KeepNotesComponent } from './keep-notes/keep-notes.component';
import { WiteNoteComponent } from './keep-notes/wite-note/wite-note.component';
import {KeepNotesService} from './services/keep-notes.service';
import {BreadcrumbsService} from './services/breadcrumbs.service';
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    CdkStepperModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    PortalModule,
    RouterModule.forChild([
       {path: 'Dashboard', component: NavigationComponent,children:[{path:'',component:CountsDashComponent},{ path: 'Dashboard', redirectTo: 'Dashbord', pathMatch: 'full'},{path:'keepNotes',component:KeepNotesComponent}]}, 
    ],)
  ],
  declarations: [
    NavigationComponent,
    HeadersComponent,
    CountsDashComponent,
    AnalytsDashComponent,
    ButtonComponent,
    DashboardCountsDirective,
    ThemeingDirective,
    KeepNotesComponent,
    WiteNoteComponent,
    
   ],
   exports:[
    A11yModule,
    CdkTableModule,
    CdkTreeModule,
    CdkStepperModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ScrollingModule,
    PortalModule,
    RouterModule,
   ],
   entryComponents:[
     ButtonComponent,
     WiteNoteComponent
   ],
   providers:[
    WiteNoteComponent,
    KeepNotesService,
    KeepNotesComponent,
    BreadcrumbsService
   ]
})
export class RflibModule {

  constructor(private injector : Injector){}

}
