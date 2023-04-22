import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { SearchBarComponent } from './components/conteudo/search-bar/search-bar.component';
import { MarcaDaguaComponent } from './components/footer/marca-dagua/marca-dagua.component';
import { HeadComponent } from './components/header/head/head.component';
import { FootComponent } from './components/footer/foot/foot.component';
import { ContentComponent } from './components/conteudo/content/content.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { BuscaComponent } from './components/header/busca/busca.component';
import { CarouselModule } from './components/conteudo/carousel/carousel.module';
import { CatalogoComponent } from './components/conteudo/catalogo/catalogo.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchBarComponent,
    MarcaDaguaComponent,
    HeadComponent,
    FootComponent,
    ContentComponent,
    BannerComponent,
    BuscaComponent,
    CatalogoComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
