import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../model/interface';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  @Input() fairdetails!: Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
