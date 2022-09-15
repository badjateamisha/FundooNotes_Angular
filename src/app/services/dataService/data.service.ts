import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor() { }
    private messageSource = new BehaviorSubject([]);
    incomingData = this.messageSource.asObservable();
  
    outgoingData(message: any) {
      this.messageSource.next(message)
    
   }
}
