import { Component, OnInit, Inject,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
  @Output() noteUpdated = new EventEmitter<any>();

  title: any
  description: any
  id: any

  constructor(private noteService: NoteService,public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.title=data.title;
    this.description=data.description;
    this.id=data.id;
  }

  ngOnInit(): void {
  }
  onClose() {
    let reqData = {
      Title: this.title,
      Description: this.description,
    }
    console.log('updated', reqData, this.id);

    this.noteService.updatenote( reqData,this.id).subscribe((response: any) => {
      console.log("Update ",response);
      this.noteUpdated.emit(response);

    });
    this.dialogRef.close();
   
  }
  receiveMessagefromdisplaycard($event: any) {
    console.log("inside get all notes", $event);
    this.onClose();
  }
} 