import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardRecipeComponent } from './card-recipe/card-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CardRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  // providers: [
  //   {provide : RouteReuseStrategy, useClass: CustomReuseStrategy}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
