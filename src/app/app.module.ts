import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemTesteComponent } from './item-teste/item-teste.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { appC } from './app.component';
@NgModule({
  declarations: [appC, ItemTesteComponent,ItemDetailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [appC],
})
export class AppModule {}
