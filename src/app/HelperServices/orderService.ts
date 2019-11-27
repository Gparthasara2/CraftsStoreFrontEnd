import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class OrderModel {
    constructor(
        public rqstName: string,
        // public expectedDate: Date,
        public svcName: string,
        public quantity: string,
        public price: string,
        public spName: string,
        public bName: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor(private httpClient: HttpClient) { }

    public createOrder(rqst) {
        return this.httpClient.post<OrderModel>("http://localhost:8001/Orders", rqst);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/Requests" )
    // }

    public findSP(name){
        return this.httpClient.get<OrderModel>("http://localhost:8001/Orders/" + name);
    }

    public getServices(){
        return this.httpClient.get<OrderModel[]>("http://localhost:8001/Orders");
    }
}