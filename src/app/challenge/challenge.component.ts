import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  buttonText: string;
  buttonFlag: boolean;
  employees: Employee[];

  ngOnInit() {
   this.buttonText = 'Hello';
   this.buttonFlag = true;

    // this can be a data service getting required data
    const sam: Employee  = { id: 1, name: 'Sam Smith', active: true};
    const john: Employee = { id: 2, name: 'John Doe', active: true };
    const berry  = { id: 3, name: 'Berry Turner', active: false };
    sam.reportingEmployees = [john, berry];
    john.reportingEmployees = [berry];
    this.employees = [sam, john, berry];
    // end of data retrieval

    // Call to retrieve string property
    this.retrieveStringProperty(this.employees);

    // Call to retrieve string arry from the optional employees array
    this.retrieveStringPropertyFromOptionalArray(this.employees);
  }

  /**
   * @param employees list of employees.
   */
  retrieveStringProperty ( employees ) {
    // getting the string property array
    const employeeName = employees.map(emp => emp.name);
    console.log(employeeName);
    // end of string property retrieval
  }
  /**
   *
   * @param employees list of employees
   */
  retrieveStringPropertyFromOptionalArray( employees ) {
    // getting the string array from the optional employee list
    const employeeNameFromOptionalProperty: string[] = [];
    employees.forEach(emp => {
      if (emp.reportingEmployees && emp.reportingEmployees.length > 0) {
        emp.reportingEmployees.forEach(item => employeeNameFromOptionalProperty.push(item.name));
      }
    });
    console.log(employeeNameFromOptionalProperty);
     // end of string array retrieval from the optional employee list
  }

  /**
   * toggle flag to change button text
   */
  toggleText() {
    this.buttonFlag = !this.buttonFlag;
    this.buttonText =  (this.buttonFlag) ? 'Hello' : 'World';
  }
}
