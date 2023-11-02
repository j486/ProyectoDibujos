import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DibujosComponent } from './componentes/dibujos/dibujos.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarImagenesComponent } from './componentes/mostrar-imagenes/mostrar-imagenes.component';
import { ModalVerDibujosComponent } from './componentes/modal-ver-dibujos/modal-ver-dibujos.component';
import { InsertarDibujoComponent } from './componentes/insertar-dibujo/insertar-dibujo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InicioComponent,
    DibujosComponent,
    CarouselComponent,
    MostrarImagenesComponent,
    ModalVerDibujosComponent,
    InsertarDibujoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
