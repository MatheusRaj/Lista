import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class ListaProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(item: Item) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss" );
    return this.save(key, item);
  }

  private save(key: string, item: Item) {
    return this.storage.set(key, item);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let items: ItemList[] = [];

    return this.storage.forEach((value: Item, key: string, iterationNumber: Number) => {
      let item = new ItemList();
      item.key = key;
      item.item = value;
      items.push(item);
    })
    .then(() => {
      return Promise.resolve(items);
    })
    .catch((error) => {
      return Promise.reject(error);
    })
  }
}

export class Item {
  name: string;
  score: number;
}

export class ItemList {
  key: string;
  item: Item;
}
