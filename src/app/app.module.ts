import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule,
        MatFormFieldModule, MatDialogModule, MatInputModule,
        MatToolbarModule, MatIconModule, MatSidenavModule,
        MatListModule, } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/app.component';
import { YhComponent, DialogOverviewExampleDialog } from './core/Lyh/yh.component';
import { Father } from './core/FatherAndChild/Father';
import { Child } from './core/FatherAndChild/Child';
import { Login } from './core/Login/login'
import { StoreComponent } from './core/StoreTest/storeTest'
import { TagShapeComponent } from './core/StoreTest/tag-shape/tag-shape'
import { TagTextComponent } from './core/StoreTest/tag-text/tage-text'

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './core/Store/reducer/counter.reducer';
import { loginReducer } from './core/Store/reducer/login.reducer'

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  FormsModule
]

@NgModule({
  declarations: [
    AppComponent,
    YhComponent,
    DialogOverviewExampleDialog,
    Father,
    Child,
    Login,
    StoreComponent,
    TagShapeComponent,
    TagTextComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer, login: loginReducer }),
    ...modules
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  exports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
