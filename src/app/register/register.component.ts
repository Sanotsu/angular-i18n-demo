import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  language: string;

  constructor(private platformLocation: PlatformLocation, @Inject(LOCALE_ID) protected localeId: string, ) { }

  ngOnInit() {
    this.language = this.localeId;

  }

  register() { }

  langSelect(event) {
    const location = (this.platformLocation as any).location;
    const path = location.pathname.split('/');
    path[1] = event.value;
    const url = location.origin + path.join('/');
    (window as any).location.href = url;
  }

}
