import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1000',
  templateUrl: './home1000.component.html',
  styleUrls: ['./home1000.component.scss'],
})
export class Home1000Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  onClick() {
    this.router.navigate(['/home']);
  }

  ionInput(event) {
    this.testing(event, 'input', 'KHR');
  }

  testing(event, key: 'blur' | 'focus' | 'input', currency: 'KHR' | 'USD') {
    if (event) {
      if (event.target.value === '') {
        return;
      } else {
        const val = event.target.value;
        const originalLengthInput = event.target.value.length;
        let selectionStart  = Number(event.target.selectionStart);
        const split = String(event.target.value).split('.');
        let splitLeft = split[0];
        let splitRight = split[1];
        let degit = 2;
        let result = '';
        if (currency === 'USD') {
          splitLeft = this.formatInputNumber(String(splitLeft).replace(/\D/g, ''));
          if (splitRight !== undefined) {
            if (key === 'blur') {
              splitRight += '00';
              result = splitLeft  + '.' + splitRight.substr(0, degit);
            } else if (key === 'focus' && splitRight === '00') {
              result = splitLeft;
            } else {
              result = splitLeft  + '.' + splitRight.substr(0, degit);
            }
          } else if (splitRight === undefined) {
            splitRight = '';
            if (key === 'blur') {
              splitRight = '.00';
              degit = 3;
            }
            result = splitLeft + splitRight.substr(0, degit);
          }
        } else {
          result = this.formatInputNumber(String(splitLeft).replace(/\D/g, ''));
        }
        event.target.value = result;
        const updatedLength = event.target.value.length;
        selectionStart = updatedLength - originalLengthInput + selectionStart;
        event.target.selectionEnd = selectionStart;
      }
    }
  }

  formatInputNumber(val: string) {
    return val.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  onFocus(event) {
    this.testing(event, 'focus', 'KHR');
  }

  OnBlur(event) {
    this.testing(event, 'blur', 'KHR');
  }
}
