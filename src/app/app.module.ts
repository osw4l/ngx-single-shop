import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrdersListComponent } from './components/admin/orders/orders-list/orders-list.component';
import { OrderDetailComponent } from './components/admin/orders/order-detail/order-detail.component';
import { CustomersListComponent } from './components/admin/customers/customers-list/customers-list.component';
import { CustomersDetailComponent } from './components/admin/customers/customers-detail/customers-detail.component';
import { CustomerOrdersListComponent } from './components/customer/orders/customer-orders-list/customer-orders-list.component';
import { CustomerOrderDetailComponent } from './components/customer/orders/customer-order-detail/customer-order-detail.component';
import { PaymentMethodsListComponent } from './components/customer/payment-methods/payment-methods-list/payment-methods-list.component';
import { PaymentMethodDialogFormComponent } from './components/customer/payment-methods/payment-method-dialog-form/payment-method-dialog-form.component';
import { ProductsListComponent } from './components/ecommerce/products-list/products-list.component';
import { ProductDetailComponent } from './components/ecommerce/product-detail/product-detail.component';
import { CheckoutComponent } from './components/ecommerce/checkout/checkout.component';
import { HomeComponent } from './components/ecommerce/home/home.component';
import { HomeDashboardComponent } from './components/admin/home-dashboard/home-dashboard.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { AddressesListComponent } from './components/customer/address/addresses-list/addresses-list.component';
import { AddressesFormComponent } from './components/customer/address/addresses-form/addresses-form.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    OrderDetailComponent,
    CustomersListComponent,
    CustomersDetailComponent,
    CustomerOrdersListComponent,
    CustomerOrderDetailComponent,
    PaymentMethodsListComponent,
    PaymentMethodDialogFormComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CheckoutComponent,
    HomeComponent,
    HomeDashboardComponent,
    ProfileComponent,
    AddressesListComponent,
    AddressesFormComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
