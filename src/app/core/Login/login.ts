import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';
import { StateStore } from '../../store'
import { Store, select } from '@ngrx/store';
import * as login from '../Store/action/login.action';
import { Userinfo } from '../Store/model/login.model';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../Store/action/counter.actions';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit{
    id: string;
    name: string;
    store = StateStore;
    count$: Observable<number>;
    userTemp$: Observable<Userinfo>;
    userInfo: {}

    constructor(private activatedRoute:ActivatedRoute,private countStore: Store<{ count: number }>, private loginStore: Store<{ userInfo: Userinfo }>) {
        this.count$ = countStore.pipe(select('count'));
        this.userTemp$ = loginStore.pipe(select('login'));
        this.userTemp$.subscribe((user:Userinfo)=>{
            this.userInfo = user
        })
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params:Params)=>{
            this.id = params['id'];
            this.name = params['name'];
        });
        var userInfo= {
            username: this.name,
            password: this.id
        }
        this.loginStore.dispatch(new login.LoginAction(userInfo));
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
