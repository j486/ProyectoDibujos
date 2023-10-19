import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DibujosComponent } from './componentes/dibujos/dibujos.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarImagenesComponent } from './componentes/mostrar-imagenes/mostrar-imagenes.component';
import { ModalVerDibujosComponent } from './componentes/modal-ver-dibujos/modal-ver-dibujos.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    DibujosComponent,
    AcercaDeComponent,
    CarouselComponent,
    MostrarImagenesComponent,
    ModalVerDibujosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
