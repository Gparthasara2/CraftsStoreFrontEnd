import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class ServiceProvider {
    constructor(
        public userID: string,
        public username: string,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public companyName: string,
        public password: string,
        public rqsts: string[] = [],
        public svcs:string[] = [],
        public acceptedRqsts:string[]= [],
        public orders:string[]=[]
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class SignUpService {
    constructor(private httpClient: HttpClient) { }

    public createServiceProvider(sp) {
        return this.httpClient.post<ServiceProvider>("http://localhost:8001/ServiceProviders", sp);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/ServiceProviders" )
    // }

    public findAllSPs() {
        return this.httpClient.get<ServiceProvider>("http://localhost:8001/ServiceProviders/");
    }
    public findSPByName(name: string) {
        return this.httpClient.get<ServiceProvider>("http://localhost:8001/ServiceProviders/username/" + name);
    }
    public findSPByEmail(email) {
        return this.httpClient.get<ServiceProvider>("http://localhost:8001/ServiceProviders/email/" + email);
    }

    public addRequesttoSP(username: string, rqstName: string) {
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/rqstName/addRequest/" + rqstName + "/" + username,{});
    }

    public removeRequestFromSP(username: string, rqstName: string) {
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/rqstName/removeRequest/" + rqstName + "/" + username,{});
    }

    public addAcceptedRequesttoSP(username: string, rqstName: string) {
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/rqstName/addAcceptedRequest/" + rqstName + "/" + username,{});
    }

    public removeAcceptedRequesttoSP(username: string, rqstName: string) {
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/rqstName/removeAcceptedRequest/" + rqstName + "/" + username,{});
    }

    public addServicetoSP(username: string, svcName: string) {
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/svcName/" + svcName + "/" + username,{});
    }

    public addOrderToSP(username:string, orderName:string){
        return this.httpClient.put<ServiceProvider>("http://localhost:8001/ServiceProviders/username/orderName/addOrder/" + orderName + "/" + username,{});
    }
}