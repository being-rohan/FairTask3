import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../model/interface';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss']
})
export class FairCardsComponent implements OnInit {
  @Input() faiobj!: Ifair
  constructor() { }

  ngOnInit(): void {
    let card = Array.from(document.getElementsByClassName('card'));
    card[0].classList.add('active')
  }
  setstyle(eve: HTMLDivElement) {
    let card = Array.from(document.getElementsByClassName('card'));
    card.map(ele => {
      ele.classList.remove('active')
    })
    

    eve.classList.add('active')
  }


}
