import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JasperService {

    HTTP_OPTIONS: any;

    constructor(
      private httpClient: HttpClient) { }
  
    /**
    * Service for call stations zones
    */
    getExpedients() {
        this.HTTP_OPTIONS = {
        headers: new HttpHeaders(
            {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
            }
        )
        };
        const url = environment.jasper_api + '/api/v1/expedients';
        return new Promise((resolve, reject) => {
        this.httpClient.get(url, this.HTTP_OPTIONS).subscribe((response) => {
            resolve(response);
        }, (error) => {
            reject(error);
        });
        });
    }


    /**
    * Service for call stations zones
    */
    showExpedient(id) {
        this.HTTP_OPTIONS = {
        headers: new HttpHeaders(
            {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
            }
        )
        };
        const url = environment.jasper_api + '/api/v1/expedients/' + id;
        return new Promise((resolve, reject) => {
            this.httpClient.get(url, this.HTTP_OPTIONS).subscribe((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    /**
    * Find user
    */
    findExpedient(body) {
        this.HTTP_OPTIONS = {
        headers: new HttpHeaders(
            {
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json; charset=UTF-8'
            }
        )
        };
        const url = environment.jasper_api + '/api/v1/expedients';
        return new Promise((resolve, reject) => {
        this.httpClient.post(url, body,this.HTTP_OPTIONS).subscribe((response) => {
            resolve(response);
        }, (error) => {
            reject(error);
        });
    });
}

}