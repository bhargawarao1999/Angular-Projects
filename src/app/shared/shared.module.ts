import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortpipePipe } from './sortpipe.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    SortpipePipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipe,
    SortpipePipe
  ]
})
export class SharedModule { }
