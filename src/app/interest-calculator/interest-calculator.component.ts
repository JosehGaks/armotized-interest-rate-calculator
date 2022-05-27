import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css'],
})
export class InterestCalculatorComponent implements OnInit {
  interestForm: FormGroup | undefined;
  amount_monthly: number = 0;
  amount_total: number = 0;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.interestForm = this.builder.group({
      loanAmount: ['', [Validators.required]],
      annualInterestRate: ['', [Validators.required]],
      timeMonths: ['', [Validators.required]],
    });
  }

  calculator = (p: number, months: number, interest_rate: number) => {
    const rate = interest_rate / 100;
    const i = rate / 12;
    const n = months;
    const dem = p * i;
    const lnm = (1 / (1 + i)) ** n;
    const r = dem / (1 - lnm);

    return r;
  };

  calculateInterest() {
    console.log(parseFloat(this.interestForm?.get('loanAmount')?.value));
    console.log(parseFloat(this.interestForm?.get('timeMonths')?.value));
    console.log(
      parseFloat(this.interestForm?.get('annualInterestRate')?.value)
    );

    this.amount_monthly = this.calculator(
      parseFloat(this.interestForm?.get('loanAmount')?.value),
      parseFloat(this.interestForm?.get('timeMonths')?.value),
      parseFloat(this.interestForm?.get('annualInterestRate')?.value)
    );

    this.amount_total =
      this.amount_monthly *
      parseFloat(this.interestForm?.get('timeMonths')?.value);

    console.log(this.amount_total);
  }

  get loanAmount(): any {
    return this.interestForm?.get('loanAmount')?.value;
  }

  get annualInterestRate(): any {
    return this.interestForm?.get('annualInterestRate')?.value;
  }

  get timeMonths(): any {
    return this.interestForm?.get('timeMonths')?.value;
  }
}
