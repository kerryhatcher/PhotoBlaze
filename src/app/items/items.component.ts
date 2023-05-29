import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { traceUntilFirst } from '@angular/fire/performance';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

interface Item {
  name: string,
};

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  title: string = 'Photo Blaze';
  items$: Observable<Item[]>;
  private firestore: Firestore = inject(Firestore);


  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(itemCollection) as Observable<Item[]>;
  }
}
