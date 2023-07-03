import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
})
export class ComponentBComponent implements OnInit {
  data!: string;
  constructor(private mainService: MainService) {
    this.mainService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  ngOnInit(): void {}
}
