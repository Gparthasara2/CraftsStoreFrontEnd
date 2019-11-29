import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class ServiceModel {
    constructor(
        public svcName: string,
        public category: string,
        public desc: string,
        public spName: string,
        public bName: string
        
    ) { }
}

@Injectable({
    providedIn: 'root'
})

export class SpFormService {
    constructor(private httpClient: HttpClient) { }

    public createService(sp) {
        return this.httpClient.post<ServiceModel>("http://localhost:8001/Services", sp);
    }

    // public deleteServiceProvider(sp){
    //     return this.httpClient.delete<ServiceProvider>("http://localhost:8001/ServiceProviders" )
    // }

    public findSPByName(name){
        return this.httpClient.get<ServiceModel>("http://localhost:8001/Services/" + name);
    }

    public getServices(){
        return this.httpClient.get<ServiceModel[]>("http://localhost:8001/Services");
    }
}