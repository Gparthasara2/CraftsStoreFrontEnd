import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class UserBuyer {
    constructor(
        public username: string,
        public firstName: string,
        public lastName: string,
        public emailId: string,
        public password: string,
        public rqstNames: string[] = [],
        public acceptedRqsts:string[] = [],
        public orders:string[] = []
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
        return this.httpClient.get<UserBuyer>("http://localhost:8001/BuyerUsers/email/" + email);
    }

    public removeRequestFromUB(username: string, rqstName: string) {
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/rqstName/removeRequest/" + rqstName + "/" + username,{});
    }

    public addRequesttoUB(username: string, rqstName: string) {
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/rqstName/addRequest" + rqstName + "/" + username,{});
    }

    public addAcceptedRequesttoUB(username: string, rqstName: string) {
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/rqstName/addAcceptedRequest" + rqstName + "/" + username,{});
    }

    public removeAcceptedRequestfromUB(username: string, rqstName: string) {
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/rqstName/removeAcceptedRequest" + rqstName + "/" + username,{});
    }

    public addOrderToUB(username:string, orderName:string){
        return this.httpClient.put<UserBuyer>("http://localhost:8001/BuyerUsers/username/orderName/addOrder/" + orderName + "/" + username,{});
    }
    
}