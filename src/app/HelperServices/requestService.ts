import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class RequestModel {
    constructor(
        public name: string,
        // public expectedDate: Date,
        public category: string,
        public quantity: string,
        public desc: string,
        public spName: string,
        public bName: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class RequestService {
    constructor(private httpClient: HttpClient) { }

    public createRequest(rqst) {
        return this.httpClient.post<RequestModel>("http://localhost:8001/Requests", rqst);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/Requests" )
    // }

    public findSP(name){
        return this.httpClient.get<RequestModel>("http://localhost:8001/Requests/" + name);
    }

    public getRequests(){
        return this.httpClient.get<RequestModel[]>("http://localhost:8001/Requests");
    }

    public findRequest(rqstName){
        return this.httpClient.get<RequestModel>("http://localhost:8001/Requests/rqstName" + "/" +rqstName);
    }
}