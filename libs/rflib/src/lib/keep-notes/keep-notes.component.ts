import { Component, OnInit} from '@angular/core';
import {MatBottomSheet,MatDialog} from '@angular/material';
import {WiteNoteComponent} from './wite-note/wite-note.component';
import {Notes} from '../models/notes';
import {KeepNotesService} from '../services/keep-notes.service';
import * as $ from 'jquery';
@Component({
  selector: 'RF-keep-notes',
  templateUrl: './keep-notes.component.html',
  styleUrls: ['./keep-notes.component.scss'],
})
export class KeepNotesComponent implements OnInit {

 
 
  
  notesList:Notes[];

 constructor(private bottomSheet: MatBottomSheet,public dialog: MatDialog,private _keepnoteService : KeepNotesService) {}
   openBottomSheet(notetype): void {
    this.bottomSheet.open(WiteNoteComponent,{
      data: {notetype:notetype },
    });
  }


  
  ngOnInit() {
    $('.float').css('display','none');
    this.NotesList();   
    if (this._keepnoteService.subsVar==undefined) {    
      this._keepnoteService.subsVar = this._keepnoteService.    
      invokeKeepNoteFunction.subscribe(() => {    
        this.NotesList();    
      });    
    }    


  }

      NotesList()
      {
          this.notesList = JSON.parse(localStorage.getItem('Notes'));
          console.log(this.notesList);
      }


}

