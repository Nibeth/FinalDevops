import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsValidationService {

  

  constructor() { }

  validateNumber(value: any): boolean {
    let regexpr = /[0-9]+/;

    let test = regexpr.test(value);

    console.log(test);

    return test;
  }
}


