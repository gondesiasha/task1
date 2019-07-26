import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FirstComponent } from './first/first.component';
import{ TemplateComponent} from './template/template.component';
import { from } from 'rxjs';
import { BookmyshowComponent } from './bookmyshow/bookmyshow.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DaterangepickerComponent} from './daterangepicker/daterangepicker.component';
import { FormComponent } from './form/form.component';
import { AddmoreComponent } from './addmore/addmore.component';
import { ViewComponent } from './view/view.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
 
  { path: 'reactive', component:ReactiveformComponent },
  { path: 'template', component:TemplateComponent  },
  { path: 'BookMyShow', component:BookmyshowComponent  },
  { path: 'first', component:FirstComponent },
  { path: 'calculator', component:CalculatorComponent },
  { path: 'daterangepicker',component:DaterangepickerComponent},
  { path: 'form',component:FormComponent},
  { path: 'addmore' ,component:AddmoreComponent},
  { path: 'view/:a.id' ,component:ViewComponent},
  { path: 'calendar',component:CalenderComponent },
 // { path: '**', redirectTo: '/first', pathMatch: 'full' }
  { path: '', redirectTo: 'first', pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
