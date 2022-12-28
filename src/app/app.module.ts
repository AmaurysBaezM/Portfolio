import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//Componentes
import { AppComponent } from './components/app/app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WorksComponent } from './components/works/works.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    SidebarComponent,
    WorksComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
