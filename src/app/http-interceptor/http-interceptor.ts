import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    baseUrl = "";

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if(request.url.includes('category')) {
            this.baseUrl = environment.adminApiUrl;
        }
        else if(request.url.includes('maps')) {
            this.baseUrl = '';
        } else {
            this.baseUrl = environment.apiUrl;
        }
        let requestObject = {
            url: `${this.baseUrl}${request.url}`,
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: `${sessionStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        };

        if (request.url === 'users/admin/export') {
            requestObject['responseType'] = 'blob';
        }

        if(request.url.includes('products/add-product-images') || request.url.includes('store/add-gst-images') || request.url.includes('store/add-bank-image')) {
            delete requestObject['setHeaders']['Content-Type'];
            delete requestObject['setHeaders']['Accept']; 
        }

        const authReq = request.clone(requestObject);
        return next.handle(authReq).pipe(
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error);
    }
}