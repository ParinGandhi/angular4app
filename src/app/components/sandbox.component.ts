import { Component } from "@angular/core";

@Component({
    selector: 'sandbox',
    template: `
    <!-- double curly braces are called string interpolation. Data within the double curly braces will always be looked at as string -->
    <h1>{{name}} is {{age}} years old</h1>
    <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
    <ul>
        <li>{{'Hello World'}}</li>
        <li>{{1+1}}</li>
        <li>{{showAge()}}</li>
    </ul>
    `
})

export class SandboxComponent {
    name = 'John Doe';
    age = 35;
    person = { firstName: 'Steve', lastName: 'Smith' };

    /**
     * Constructor is run when the class is loaded. Any variable in this class can be accessed by using 'this'
     */
    constructor() {
        console.log('Constructor ran...');
        this.age = 36;
        this.hasBirthday();
    }

    /**
     * This is a custom function. Any variable in this class can be accessed by using 'this'
     */
    hasBirthday() {
        this.age += 1;
    }

    showAge() {
        return this.age;
    }


}