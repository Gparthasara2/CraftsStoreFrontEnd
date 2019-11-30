import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class OrderModel {
    constructor(
        public oId:string,
        public oName:string,
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

    public createOrder(order:OrderModel) {
        return this.httpClient.post<OrderModel>("http://localhost:8001/Orders", order);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/Requests" )
    // }

    public findOrder(oName:string){
        return this.httpClient.get<OrderModel>("http://localhost:8001/Orders/" + oName);
    }

    public getServices(){
        return this.httpClient.get<OrderModel[]>("http://localhost:8001/Orders");
    }
}