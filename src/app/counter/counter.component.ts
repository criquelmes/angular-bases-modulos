import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <br />
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="reset(10)">Reset</button>
  `,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }

  reset(value: number) {
    this.counter = value;
  }
}
