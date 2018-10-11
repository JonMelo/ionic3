import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage { 

  public objeto_feed = {
    titulo:"Jon Melo",
    data:"November 5, 1955",
    descricao:"Estou criando um app incrivel...",
    qntd_likes:12,
    qntd_comments:4,
    time_comments:"11h ago"
  }

  public lista_filme = new Array<any>();
  public page = 1 ;

  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private moovieProvider: MoovieProvider,
              public loadingCtrl: LoadingController
              ) {
  }

  abreCarregando() {
     this.loader = this.loadingCtrl.create({
      content: "Por favor, espere..."
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  doRefresh(refresher) {
   this.refresher = refresher;
   this.isRefreshing = true;
   this.page = 1;
   this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
}

abrirDetalhes(filme){
  console.log(filme);
  this.navCtrl.push(FilmeDetalhesPage, {id: filme.id});
}

doInfinite(infiniteScroll) {
  this.page++;
  this.infiniteScroll = infiniteScroll;
  this.carregarFilmes(true);
}

carregarFilmes(newpage: boolean = false){
  this.abreCarregando();
  this.moovieProvider.getLastestMovies(this.page).subscribe(
    data=>{
      const response = (data as any);

      if(newpage){
        //se a pagina carregar as proximas paginas
        this.lista_filme = this.lista_filme.concat(response.results);
        console.log(this.page);
        console.log(this.lista_filme);
        this.infiniteScroll.complete();
      }else{
        //se a pagina for a primeira o codigo vai ler essa função
        this.lista_filme = response.results;
      }
      console.log(response);
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }

    }, error =>{
      console.log(error);
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    }
    
    )  
}
 
}
