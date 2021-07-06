import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { ProductsComponent } from '../products/products.component';
import { AdvJavaComponent } from '../adv-java/adv-java.component';
import { CoreJavaComponent } from '../core-java/core-java.component';

const routes: Routes = [
  { path: 'web', component: WebComponent ,children : [
    { path: 'htmlcourse', component: CoreJavaComponent },
    { path: 'csscourse', component: AdvJavaComponent },
  ]},
  { path: 'java', component: JavaComponent ,
  children : [
    { path: 'corejava', component: CoreJavaComponent },
    { path: 'advjava', component: AdvJavaComponent },
  ]},
  { path: 'product', component: ProductsComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent, JavaComponent]
