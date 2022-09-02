import {  Component, EventEmitter, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() childMessage: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }
 

}