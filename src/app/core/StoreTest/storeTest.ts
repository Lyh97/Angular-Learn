import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../Store/action/counter.actions';

@Component({
    selector: 'storeTest',
    templateUrl: './storeTest.html'
})
export class StoreComponent {
    count$: Observable<number>;

    constructor(private countStore: Store<{ count: number }>) {
        this.count$ = countStore.pipe(select('count'));
    }

    increment() {
        this.countStore.dispatch(new Increment());
    }
    
    decrement() {
        this.countStore.dispatch(new Decrement());
    }
    
    reset() {
        this.countStore.dispatch(new Reset());
    }
}