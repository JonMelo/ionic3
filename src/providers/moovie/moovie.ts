import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
 

  private baseApiPath = "https://api.themoviedb.org/3";
  private baseApiKey = "9a23ab9b42061934b11458e83a5dabc2";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLastestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.baseApiKey );
  }

  getMoviesDetail(filmeid){
  return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.baseApiKey );
  }

}
