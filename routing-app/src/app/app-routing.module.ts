import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Content1Component } from './components/content1/content1.component';
import { Content2Component } from './components/content2/content2.component';
import { Content3Component } from './components/content3/content3.component';
import { Header1Component } from './components/header1/header1.component';
import { Header2Component } from './components/header2/header2.component';

const routes: Routes = [
  { path: 'content1', component: Content1Component },
  { path: 'content2', component: Content2Component },
  { path: 'content3', component: Content3Component },
  { path: "header1", component: Header1Component, outlet: "outlet1" },
  { path: "header2", component: Header2Component, outlet: "outlet1" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
