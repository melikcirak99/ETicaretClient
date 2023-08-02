import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { popper } from '@popperjs/core';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UiModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxSpinnerModule,
    ],
    providers: [
        {provide:"baseUrl",useValue:"https://localhost:7163/api",multi:true}
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
