import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-getallnote',
  templateUrl: './getallnote.component.html',
  styleUrls: ['./getallnote.component.scss']
})
export class GetallnoteComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  
    this.getallnotes()
  }
  getallnotes(){
    this.note.getallnotes().subscribe((res:any)=> {
      console.log(res);
      this.notelist=res.success;
      console.log(this.notelist);
    })
  }

  updatedData($event : any) {
    this.getallnotes();
    }
  
}