import { Component, OnInit } from '@angular/core';

export interface MonthlyArmotizationElements {
  year: any;
  principal: number;
  interest: number;
  total: number;
  balance: number;
}

const DATA: MonthlyArmotizationElements[] = [
  {
    year: 'Jan.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Feb.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Mar.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Apr.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'May.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Jun.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Jul.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Aug.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
  {
    year: 'Sep.2014',
    principal: 235.27,
    interest: 32.93,
    total: 268.19,
    balance: 2764.73,
  },
];

@Component({
  selector: 'app-interest-table',
  templateUrl: './interest-table.component.html',
  styleUrls: ['./interest-table.component.css'],
})
export class InterestTableComponent implements OnInit {
  displayColumns: string[] = [
    'year',
    'principal',
    'interest',
    'total',
    'balance',
  ];
  dataSource = DATA;
  constructor() {}

  ngOnInit(): void {}
}
