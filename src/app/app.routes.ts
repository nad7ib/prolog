import { Routes } from '@angular/router';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

export const routes: Routes = [
    { path: 'purchase-order', component: PurchaseOrderComponent },
    { path: 'update-order', component: UpdateOrderComponent },
];

