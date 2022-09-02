import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
createForm!: FormGroup;
display : boolean=true;
submitted = false;
token : any;
title:string=""
description:string=""

  constructor(private formBuilder: FormBuilder,private note : NoteService, private activeRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit(){
    this.submitted=true;
    if(this.createForm.valid){
      console.log("Note Created Successfully");
      let reqData = {
        Title: this.createForm.value.title,
        Description: this.createForm.value.description,
      }
      console.log(reqData);
      this.note.createnotes(reqData).subscribe((response : any) =>{
        console.log(response);
      });
    }
    else{
      this.submitted=false;
      console.log(this.title, this.description);
      if((this.title==null || this.title=="") && (this.description==null||this.description==""))
      {
        console.log("Values are null");
      }
    }
    this.display=true;
  }
}