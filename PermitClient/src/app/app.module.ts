import { HttpContext } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermitListComponent } from './permit-list/permit-list.component';
import { EditPermitComponent } from './edit-permit/edit-permit.component';
import { AddPermitComponent } from './add-permit/add-permit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PermitListComponent,
    EditPermitComponent,
    AddPermitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
