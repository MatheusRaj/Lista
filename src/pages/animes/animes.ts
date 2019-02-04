import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ListaProvider, ItemList, Item } from '../../providers/lista/lista';

@IonicPage()
@Component({
  selector: 'page-animes',
  templateUrl: 'animes.html',
})
export class AnimesPage {

  items: ItemList[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private listaProvider: ListaProvider,
              private toast: ToastController) {
  }

  ionViewDidEnter() {
    this.listaProvider.getAll()
      .then((result) => {
        this.items = result.sort((n1,n2) => {
          return n2.item.score - n1.item.score;
        });
      });
  }

  addItem() {
    this.navCtrl.push('EditAnimePage');
  }

  editItem(item: Item, key: string) {
    console.log(item, key);
    this.navCtrl.push('EditAnimePage', { item, key });
  }

  removeItem(item: ItemList) {
    this.listaProvider.remove(item.key)
      .then(() => {
        var index = this.items.indexOf(item);
        this.items.splice(index,1);
        this.toast.create({ message: 'Anime removido.', duration: 3000, position: 'botton' }).present();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimesPage');
  }

}
