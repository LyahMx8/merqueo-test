import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Form} from '@core/_models/form';

@Injectable({providedIn: 'root'})

export class FormService {

    constructor(private http: HttpClient) {
    }

    postContactForm(data) {
        console.log("Contact Form")
        var body = JSON.stringify({
          email: data.email
        })
        console.log(body)
        return this.http.post<Form[]>(`https://jsonplaceholder.typicode.com/posts`, body);
    }
}
