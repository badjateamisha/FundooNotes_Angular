import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  colorArray: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ];
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
  
  setColor(Color:any){
    
    console.log(Color)
        let data = {
          id :this.noteobject.id,
      color : Color.name
    }
    this.note.ColorNote(data).subscribe((result: any) => {
      console.log(result); 
      this.iconstodisplay.emit(result)

  })
}
}
