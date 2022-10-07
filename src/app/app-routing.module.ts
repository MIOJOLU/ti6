import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ResultsComponent } from './components/results/results.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'info', component: InfoComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
