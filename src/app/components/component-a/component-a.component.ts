import { MainService } from './../../services/main.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
})
export class ComponentAComponent implements OnInit, OnDestroy {
  data: string | undefined;
  newValue: string = '';
  private subscription: Subscription;

  constructor(private mainService: MainService) {
    this.subscription = this.mainService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  updateData() {
    this.mainService.updateData(this.newValue);
    this.newValue = '';
  }

  ngOnInit(): void {}

  /**
    In Angular, it is important to unsubscribe from observables
    to avoid memory leaks and unnecessary resource consumption
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
