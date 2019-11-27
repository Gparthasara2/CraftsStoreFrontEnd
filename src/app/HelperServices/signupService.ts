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

    public findSPByEmail(email){
        return this.httpClient.get<ServiceProvider>("http://localhost:8001/ServiceProviders/email" + "/" + email);
    }
}