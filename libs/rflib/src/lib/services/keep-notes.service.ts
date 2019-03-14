import { Injectable , EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription'; 

@Injectable({
  providedIn: 'root'
})
export class KeepNotesService {


  invokeKeepNoteFunction = new EventEmitter();    
  invokeWriteNoteFunction = new EventEmitter();    
  subsVar: Subscription;    

  constructor() { }


  ListNotes() {    
    this.invokeKeepNoteFunction.emit();    
  }    

}
