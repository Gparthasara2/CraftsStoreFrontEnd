import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class UserBuyer {
    constructor(
        public username: string,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public password: string,
        public rqstNames: string[] = []
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private httpClient: HttpClient) { }

    public createUserBuyer(ub) {
        return this.httpClient.post<UserBuyer>("http://localhost:8001/BuyerUsers", ub);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/ServiceProviders" )
    // }

    public findUserByName(name: string) {
        return this.httpClient.get<UserBuyer>("http://localhost:8001/BuyerUsers/username/" + name);
    }
    public findUserByEmail(email:string) {
        return this.httpClient.get<UserBuyer>("http://localhost:8001/BuyerUsers/email" + "/" + email);
    }

    public addRequesttoSP(username: string, rqstName: string) {
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/" + rqstName + "/" + username,{});
    }
}