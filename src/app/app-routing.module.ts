import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddRequestsComponent } from './components/requests/add-requests/add-requests.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "create-requests",
  component: AddRequestsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
