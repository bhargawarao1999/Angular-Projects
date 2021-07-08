import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { JavaComponent } from 'src/app/modules/general/contact/java/java.component';
import { WebComponent } from 'src/app/modules/general/contact/web/web.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent,children: [
      {path:'java',component:JavaComponent},
      {path:'web',component:WebComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
