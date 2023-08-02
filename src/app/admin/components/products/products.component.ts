import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpclientService } from 'src/app/services/common/httpclient.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
    constructor(
        spinner: NgxSpinnerService,
        private httpClientService: HttpclientService
    ) {
        super(spinner);
    }
    ngOnInit(): void {
        this.showSpinner(SpinnerType.BallScaleMultiple);
    }
}
