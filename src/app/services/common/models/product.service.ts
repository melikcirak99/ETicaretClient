import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private httpClientService: HttpclientService) {}

    create(product: Create_Product, successCallBack?: any, errorCallBack?: any) {
        this.httpClientService
            .post(
                {
                    controller: 'product',
                },
                product
            )
            .subscribe(
                (result) => {
                    successCallBack();
                },
                (errorResponse: HttpErrorResponse) => {
                    const _error: Array<{ key: string; value: Array<string> }> =
                        errorResponse.error;
                    let message = "";
                    _error.forEach((v,index)=>{
                        v.value.forEach((_v,_index)=>{
                            message += `${_v}<br/>`;
                        });
                    });
                    errorCallBack(message);
                    debugger;
                }
            );
    }
}
