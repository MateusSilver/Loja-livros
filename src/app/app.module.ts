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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchBarComponent,
    MarcaDaguaComponent,
    HeadComponent,
    FootComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
