import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SasaComponent } from './sasa/sasa.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:"home", component: SasaComponent},
  {path:"about", component: AboutComponent},
  {path:"", component: SasaComponent},

  {path:"task", component: TaskComponent},
  {path:"**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
