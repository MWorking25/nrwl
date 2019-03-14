import { Component, OnInit,Inject} from '@angular/core';
import {MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import {Notes} from '../../models/notes';
import {KeepNotesService} from '../../services/keep-notes.service';
@Component({
  selector: 'RF-wite-note',
  templateUrl: './wite-note.component.html',
  styleUrls: ['./wite-note.component.scss']
})
export class WiteNoteComponent implements OnInit {

  KeepNotes:Notes = {note:'',link:'',createdby:'',status:'',createddate:new Date(),filename:'',todos:[],type:''};
  writtenNotes:Notes[];

  constructor(private bottomSheetRef: MatBottomSheetRef<WiteNoteComponent>,private _keepnoteService : KeepNotesService,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
  ngOnInit() {

       

    if(JSON.parse(localStorage.getItem('Notes')))
      {
        this.writtenNotes = JSON.parse(localStorage.getItem('Notes'));
      }
      else
      {
        this.writtenNotes = [];
      }
        
      
      console.log(this.data)

  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  KeepANote()
  {
      this.KeepNotes.createdby = 'user1';
      this.KeepNotes.createddate = new Date();
      this.KeepNotes.type = this.data.notetype;
      if(this.KeepNotes.link)
      {
        this.KeepNotes.link = '<br> <a href="'+this.KeepNotes.link+'" target="_blank">'+this.KeepNotes.link+'</a>'
      }
      this.writtenNotes.push(this.KeepNotes);
      localStorage.setItem('Notes', JSON.stringify(this.writtenNotes));
      this._keepnoteService.ListNotes(); 
      this.bottomSheetRef.dismiss();
  };

 

}
