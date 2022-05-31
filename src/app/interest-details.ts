export class InterestDetails {
  balance: number;
  rate: number;
  months: number;

  constructor(balance: number, rate: number, months: number) {
    this.balance = balance;
    this.rate = rate;
    this.months = months;
  }
}

export class MonthlyArmotizationElements {
  year: any;
  principal: number;
  interest: number;
  total: number;
  balance: number;

  constructor(
    year: any,
    principal: number,
    interest: number,
    total: number,
    balance: number
  ) {
    this.year = year;
    this.principal = principal;
    this.interest = interest;
    this.total = total;
    this.balance = balance;
  }
}
