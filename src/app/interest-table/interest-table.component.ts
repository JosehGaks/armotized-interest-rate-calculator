import { Component, OnInit } from '@angular/core';

export interface MonthlyArmotizationElements {
  year: any;
  principal: number;
  interest: number;
  total: number;
  balance: number;
}

@Component({
  selector: 'app-interest-table',
  templateUrl: './interest-table.component.html',
  styleUrls: ['./interest-table.component.css'],
})
export class InterestTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
