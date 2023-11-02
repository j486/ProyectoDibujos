import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DibujosComponent } from './componentes/dibujos/dibujos.component';
import { InsertarDibujoComponent } from './componentes/insertar-dibujo/insertar-dibujo.component';

const routes: Routes = [
  {
      path: '',
      component: InicioComponent,
      pathMatch: 'full'
  },
  {
    path: 'dibujos',
    component: DibujosComponent,
    pathMatch: 'full'
  },
  {
    path: 'insertarDibujos',
    component: InsertarDibujoComponent,
    pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
