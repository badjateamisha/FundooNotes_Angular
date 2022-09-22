import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataService } from 'src/app/services/dataService/data.service';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  sentmsg: any;
  filterNote : any;
  id:any;
  @Input() noteobject:any;
  @Input() childMessage: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes=new EventEmitter<string>();


  constructor(public dialog: MatDialog,private data:DataService,private note: NoteService) { }

  ngOnInit(): void {
    console.log(this.childMessage);
    this.data.incomingData.subscribe((response) => {
      console.log("Search in process", response);
      this.filterNote = response;
    })
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
     width: '550px',
     data:note
     })
     dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed'); 
      this.noteUpdated.emit(result);
     });
     
  }
  recievefromiconstodisplaycard($event: any) {
    console.log("Recieved in Display");
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)
  
  }
  
  onPinned(note:any){
    
      console.log("Note Pinned Successfully");
    this.note.notePinned(note).subscribe((response: any) => {
       this.noteUpdated.emit(response)
    }) 
  }

}