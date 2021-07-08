import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent,
    JavaComponent,
    WebComponent
  ],
  providers: [
  ],
})
export class ContactModule { }