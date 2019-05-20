import { Component } from '@angular/core';
import { Store } from '../../store';

@Component({
  selector: 'father',
  templateUrl: './Father.html'
})
export class Father {
    i: number = 0;
    store = Store;
    
    constructor() {
        setInterval(() => {
            this.i++;
        }, 1000)
    }

    numberChange(i: number) {
        this.i = i
    }
}