import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PanelDemanadComponent } from './panel-demanad/panel-demanad.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    PanelDemanadComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', pathMatch:'full',redirectTo: 'login'},
      {path :'login', component: LoginComponent},
      {path :'panel', component: PanelComponent},
      {path :'panel-demanad', component: PanelDemanadComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
