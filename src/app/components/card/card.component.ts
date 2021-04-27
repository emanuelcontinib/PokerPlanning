import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  selected: any;

  data = [
    { cardValue: '1', imagePath: '/assets/one.png' },
    { cardValue: '2', imagePath: '/assets/two.png' },
    { cardValue: '3', imagePath: '/assets/tree.png' },
    { cardValue: '5', imagePath: '/assets/five.png' },
    { cardValue: '8', imagePath: '/assets/eight.png' },
    { cardValue: '13', imagePath: '/assets/thirteen.png' },
    { cardValue: '21', imagePath: '/assets/twenty-one.png' },
    { cardValue: 'immeasurable', imagePath: '/assets/infinity.png' },
    { cardValue: 'coffeTime', imagePath: '/assets/coffeTime.png' },
  ];

  selectedIndex: number;

  constructor() {
  }

  ngOnInit() {
  }

  callFunction(event, card) {
    localStorage.setItem('app-cardValue', `${card.cardValue}`)
    console.log(card.cardValue);

    let cardClicked = document.getElementById(`${card.cardValue}`)
    cardClicked.className = 'imageClick'

    this.callDashboad()

  }

  callDashboad(){
    alert('going to dashboard')
  }
}
