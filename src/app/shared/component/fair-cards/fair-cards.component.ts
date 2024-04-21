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
  }

}
