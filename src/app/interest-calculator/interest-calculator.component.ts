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
  Year,
} from '../interest-details';
import { InterestService } from './../interest.service';

import * as moment from 'moment';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css'],
})
export class InterestCalculatorComponent implements OnInit {
  interestForm: FormGroup | undefined;
  amount_monthly: number = 0;
  amount_total: number = 0;
  loanAmountDetail: number = 0;
  payoffDate: any;

  data: boolean = false;

  calculatedInterestDetails: MonthlyArmotizationElements[] = [];
  yearlyData: Year[] = [];

  constructor(
    private builder: FormBuilder,
    private interestService: InterestService
  ) {}

  ngOnInit(): void {
    this.interestForm = this.builder.group({
      loanAmount: ['', [Validators.required]],
      annualInterestRate: ['', [Validators.required]],
      timeMonths: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
    });
  }

  calculateInterest() {
    this.loanAmountDetail = parseFloat(
      this.interestForm?.get('loanAmount')?.value
    );

    this.amount_monthly = this.interestService.calculator(
      parseFloat(this.interestForm?.get('loanAmount')?.value),
      parseFloat(this.interestForm?.get('timeMonths')?.value),
      parseFloat(this.interestForm?.get('annualInterestRate')?.value)
    );

    this.amount_total =
      this.amount_monthly *
      parseFloat(this.interestForm?.get('timeMonths')?.value);
    this.calculatedInterestDetails = this.interestService.interest_calculator(
      new InterestDetails(
        parseFloat(this.interestForm?.get('loanAmount')?.value),
        parseFloat(this.interestForm?.get('annualInterestRate')?.value),
        parseFloat(this.interestForm?.get('timeMonths')?.value),
        moment(new Date(this.interestForm?.get('startDate')?.value))
      )
    );

    this.yearlyData = this.interestService.mapIntoYear(
      this.interestService.sliceIntoChunks(this.calculatedInterestDetails)
    );

    this.payoffDate =
      this.calculatedInterestDetails[
        this.calculatedInterestDetails.length - 1
      ].year;

    this.data = true;
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
