import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../model/interface';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss']
})
export class FairCardsComponent implements OnInit {
  @Input() faiobj!: Ifair;
  @Input() getclick!: string;
  
fairid!: string

@Output() cardEmitter: EventEmitter<Ifair> = new EventEmitter<Ifair>()
constructor() { }

ngOnInit(): void {

}

onselectId() {

  this.cardEmitter.emit(this.faiobj)

}
}
