import { Routes } from '@angular/router';
import { UpdateOrderComponent } from './update-order.component'; // Import the missing UpdateOrderComponent
import { PurchaseOrderComponent } from './purchase-order.component'; // Import the missing PurchaseOrderComponent


export const routes: Routes = [
    { path: 'purchase-order', component: PurchaseOrderComponent } ,
    { path: 'update-order', component: UpdateOrderComponent } 
];


