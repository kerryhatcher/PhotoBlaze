import { Component, Inject, Optional } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    public readonly firebaseApp: FirebaseApp,
  ) { }

}
