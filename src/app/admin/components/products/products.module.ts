import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ]),
    MatSidenavModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
