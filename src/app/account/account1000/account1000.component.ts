import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account1000',
  templateUrl: './account1000.component.html',
  styleUrls: ['./account1000.component.scss'],
})
export class Account1000Component implements OnInit {

  constructor() { }

  ngOnInit() {}

  key_down(event) {
    console.log(event);
  }
}
