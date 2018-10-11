import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MoovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public moovieProvider: MoovieProvider
    ) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.moovieProvider.getMoviesDetail(this.filmeid).subscribe(data=>{
      let retorno = (data as any);
      this.filme = retorno;
    }, error=>{
      console.log(error);
    })
  }

}
