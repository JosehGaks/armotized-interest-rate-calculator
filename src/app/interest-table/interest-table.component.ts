import { Component, OnInit, Input } from '@angular/core';
import { MonthlyArmotizationElements, Year } from '../interest-details';

// export interface MonthlyArmotizationElements {
//   year: any;
//   principal: number;
//   interest: number;
//   total: number;
//   balance: number;
// }

@Component({
  selector: 'app-interest-table',
  templateUrl: './interest-table.component.html',
  styleUrls: ['./interest-table.component.css'],
})
export class InterestTableComponent implements OnInit {
  @Input() data!: MonthlyArmotizationElements[];
  @Input() yearlyData!: Year[];

  displayColumns: string[] = [
    'year',
    'principal',
    'interest',
    'total',
    'balance',
  ];

  constructor() {}

  ngOnInit(): void {}

  getTotalPrincipal() {
    return this.data
      .map((t) => t.principal)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalInterest() {
    return this.data
      .map((t) => t.interest)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotal() {
    return this.data.map((t) => t.total).reduce((acc, value) => acc + value, 0);
  }
}
