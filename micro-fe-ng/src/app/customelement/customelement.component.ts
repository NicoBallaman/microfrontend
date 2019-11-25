import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customelement',
  templateUrl: './customelement.component.html',
  styleUrls: ['./customelement.component.scss'],
  encapsulation: ViewEncapsulation.None // <- this allows CSS to bleed to this component from parent app
})
export class CustomelementComponent implements OnInit {

  @Input() start;
  @Input() result;
  @Output() helloEvt: EventEmitter<string> = new EventEmitter();

  values: any[] = [
    { value: 1, img: '/images/ng-Rock.png', text: 'Rock'},
    { value: 2, img: '/images/ng-Paper.png', text: 'Paper'},
    { value: 3, img: '/images/ng-Scissors.png', text: 'Scissors'},
  ];

  selectedValue: any = null;
  text = 'Angular';

  constructor() {}

  ngOnInit() {

    if (this.start == 'true') {
      this.play();
    }
    this.text = 'Angular';
    if (this.result == 'winner' || this.result == 'loser' || this.result == 'equal') {
        switch (this.result) {
            case 'winner':
                this.text = 'YES! I like it';
                break;
            case 'loser':
                this.text = 'This isn\'t fun';
                break;
            case 'equal':
                this.text = 'I want to play again';
                break;
        }
    }

  }

  async play() {

    let count = 1;
    for (let i = 0; i < 20; i++) {
      this.selectedValue = this.values.find(x => x.value == count);
      count = count === 3 ? 1 : count + 1;
      await this.sleep(200);
    }
    const val = Math.floor(Math.random() * 3) + 1;
    this.selectedValue = this.values.find(x => x.value == val);
    this.sendValue();
  }

  sendValue() {
    this.helloEvt.next(this.selectedValue.value);
  }

  sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

}

