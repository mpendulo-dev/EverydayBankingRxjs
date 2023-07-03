import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  //Initial value
  behaviorSubject = new BehaviorSubject<string>('Initial number');

  //sets up a subscription to the data$ observable.
  public data$ = this.behaviorSubject.asObservable();

  constructor() {}

  //Updating value of subject
  updateData(newValue: string) {
    this.behaviorSubject.next(newValue);
  }
}
