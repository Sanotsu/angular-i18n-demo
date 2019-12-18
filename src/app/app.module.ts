import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatInputModule,
   MatCardModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatSelectModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

