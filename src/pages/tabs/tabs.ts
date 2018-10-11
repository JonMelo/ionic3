import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { IntroPage } from '../intro/intro';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { AtletasPage } from '../atletas/atletas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = FeedPage;
  tab4Root = AtletasPage;
  tab5Root = ConfiguracoesPage;


  constructor() {

  }
}
