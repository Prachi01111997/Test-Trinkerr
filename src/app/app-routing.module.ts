import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListsComponent } from './stock-lists/stock-lists.component';

const routes: Routes = [
  {path:'',redirectTo:'stock',pathMatch:'full'},
  {path:'stock',component:StockListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
