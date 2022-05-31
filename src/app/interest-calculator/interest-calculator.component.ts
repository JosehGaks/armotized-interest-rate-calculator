import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MonthlyArmotizationElements,
  InterestDetails,
} from '../interest-details';
import { InterestService } from './../interest.service';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css'],
})
export class InterestCalculatorComponent implements OnInit {
  interestForm: FormGroup | undefined;
  amount_monthly: number = 0;
  amount_total: number = 0;

  calculatedInterestDetails: MonthlyArmotizationElements[] = [];

  constructor(
    private builder: FormBuilder,
    private interestService: InterestService
  ) {}

  ngOnInit(): void {
    this.interestForm = this.builder.group({
      loanAmount: ['', [Validators.required]],
      annualInterestRate: ['', [Validators.required]],
      timeMonths: ['', [Validators.required]],
    });
  }

  calculateInterest() {
    console.log(parseFloat(this.interestForm?.get('loanAmount')?.value));
    console.log(parseFloat(this.interestForm?.get('timeMonths')?.value));
    console.log(
      parseFloat(this.interestForm?.get('annualInterestRate')?.value)
    );

    this.amount_monthly = this.interestService.calculator(
      parseFloat(this.interestForm?.get('loanAmount')?.value),
      parseFloat(this.interestForm?.get('annualInterestRate')?.value),
      parseFloat(this.interestForm?.get('timeMonths')?.value)
    );

    this.amount_total =
      this.amount_monthly *
      parseFloat(this.interestForm?.get('timeMonths')?.value);

    console.log(this.amount_total);

    this.calculatedInterestDetails = this.interestService.interest_calculator(
      new InterestDetails(
        parseFloat(this.interestForm?.get('loanAmount')?.value),
        parseFloat(this.interestForm?.get('annualInterestRate')?.value),
        parseFloat(this.interestForm?.get('timeMonths')?.value)
      )
    );
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
