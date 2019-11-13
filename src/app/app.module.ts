import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeubleComponent } from './meuble/meuble.component';
import { MeublesListComponent } from './meubles-list/meubles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeubleComponent,
    MeublesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
