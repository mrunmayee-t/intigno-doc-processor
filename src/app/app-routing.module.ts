import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RequestsComponent } from './components/requests/requests.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "requests",
  component: RequestsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
