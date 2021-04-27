import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterInputsComponent } from "./components/register-inputs/register-inputs.component";
import { CardComponent } from "./components/card/card.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },{
  path:"register",
  component:RegisterInputsComponent
  },{
    path:"cards",
    component:CardComponent
  },{
    path:"dashboard",
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
