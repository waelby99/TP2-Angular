import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingComponentComponent } from './binding-component/binding-component.component';
import { TableauComponent } from './tableau/tableau.component';
import { PersonneComponent } from './personne/personne.component';
import { CalculComponent } from './calcul/calcul.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponentComponent,
    TableauComponent,
    PersonneComponent,
    CalculComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
