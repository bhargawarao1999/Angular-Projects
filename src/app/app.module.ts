import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BhargawaComponent } from './bhargawa/bhargawa.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { ProductsComponent } from './products/products.component';
import { DerivativeDirective } from './derivatives/derivative.directive';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WebComponent } from './tech/web/web.component';
import { JavaComponent } from './tech/java/java.component';
import { TechRoutingModule } from './tech/tech-routing.module';
import { CoreJavaComponent } from './tech/core-java/core-java.component';
import { AdvJavaComponent } from './tech/adv-java/adv-java.component';
import { HtmlCourseComponent } from './tech/html-course/html-course.component';
import { CssCourseComponent } from './tech/css-course/css-course.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/general/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BhargawaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    CalculatorComponent,
    StructDirectivesComponent,
    ProductsComponent,
    DerivativeDirective,
    FilterPipePipe,
    SortPipe,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    WebComponent,
    JavaComponent,
    CoreJavaComponent,
    AdvJavaComponent,
    HtmlCourseComponent,
    CssCourseComponent,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,TechRoutingModule,ReactiveFormsModule,BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
