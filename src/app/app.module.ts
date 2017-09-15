import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { CosasComponent } from './cosas/cosas.component';
import { ColegasComponent } from './colegas/colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicarComponent } from './publicar/publicar.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { FooterComponent } from './footer/footer.component';
import { MisHistorietasService } from './mis-historietas/mis-historietas.service';
import { HttpModule } from '@angular/http';
import { DatosComponent } from './datos/datos.component';
import { ColeguillasComponent } from './coleguillas/coleguillas.component';
const appRoutes: Routes = [
  { path: 'mis-historietas', component: HistorietasComponent },
  { path: 'mis-cosas', component: CosasComponent },
  { path: 'mis-colegas', component: ColegasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: '', component: HistorietasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HistorietasComponent,
    CosasComponent,
    ColegasComponent,
    EventosComponent,
    PublicarComponent,
    MisHistorietasComponent,
    FooterComponent,
    DatosComponent,
    ColeguillasComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MisHistorietasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
