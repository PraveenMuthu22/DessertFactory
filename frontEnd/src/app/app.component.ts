import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActionTypes, Login, Logout } from './store/actions/auth.actions';
import { State } from './store/state/app.state';
import { Subscription } from 'rxjs';
import * as authReducer from './store/reducers/auth.reducer';
import { Observable } from 'rxjs';
import { InitialState } from '@ngrx/store/src/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DessertFactory';
  subscrption: Subscription;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.subscrption = this.store.pipe(select(authReducer.isLoggedIn)).subscribe(isLoggedIn => {
      console.log(isLoggedIn);
    });
  }

  ngOnDestroy(): void {
    this.subscrption.unsubscribe();
  }

  login() {
    console.log('login');
    this.store.dispatch(new Login({ username: 'john', password: 'sdf' }));
  }
  logout() {
    console.log('logout');
    this.store.dispatch(new Logout({ token: 'sdfsf' }));
  }




}


