import { Component, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened: boolean = true;
  events: string[] = [];
  title: string = 'Photo Blaze';
  items$: Observable<Item[]>;
  private firestore: Firestore = inject(Firestore);



  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(itemCollection) as Observable<Item[]>;
  }

}
