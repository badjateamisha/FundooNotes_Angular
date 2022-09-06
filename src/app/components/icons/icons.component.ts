import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  @Input() noteobject:any
  @Output() iconstodisplay = new EventEmitter<string>();


  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  onDelete(){
    console.log('Moved to Trash');
    this.noteId=[this.noteobject.id]
    this.note.trashnotes(this.noteId).subscribe((res:any) => {
      console.log(res);
      this.iconstodisplay.emit(res)
    
    })
    
  }
  onArchive(){
   let reqData={
    id:this.noteobject.id}
    console.log('Note Archived');
    this.note.archiveNotes(reqData).subscribe((res:any) =>{
      this.iconstodisplay.emit(res)
      
    })
  }
}
