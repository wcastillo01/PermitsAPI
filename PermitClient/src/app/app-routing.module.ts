import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermitListComponent } from './permit-list/permit-list.component';
import { EditPermitComponent } from './edit-permit/edit-permit.component';
import { AddPermitComponent } from './add-permit/add-permit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PermitListComponent },
  { path: 'edit/:id', component: EditPermitComponent },
  { path: 'add', component: AddPermitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
