import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { CochesComponent } from './coches/coches.component';

const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'quienessomos', component: QuienesSomosComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'coches/:marca/:modelo', component: CochesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    QuienesSomosComponent,
    CochesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
