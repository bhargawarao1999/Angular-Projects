import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { ProductsComponent } from '../products/products.component';
import { AdvJavaComponent } from './adv-java/adv-java.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { HtmlCourseComponent } from './html-course/html-course.component';
import { CssCourseComponent } from './css-course/css-course.component';

const routes: Routes = [
  { path: 'web', component: WebComponent,
  children : [
    {path:'html', component:HtmlCourseComponent },
    {path:'css', component:CssCourseComponent},
   ]},
  { path: 'java', component: JavaComponent,
  children : [
    {path:'corejava', component:CoreJavaComponent },
    {path:'advjava', component:AdvJavaComponent},
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
