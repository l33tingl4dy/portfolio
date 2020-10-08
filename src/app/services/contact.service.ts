import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    // TODO: redo thos now that mailthis is no longer supported

    // todo fix this
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // private api = 'https://mailthis.to/harris.amandajo@gmail.com';
    // constructor(private http: HttpClient) {}

    // PostMessage(input: any) {
    //     return this.http.post(this.sgMail, input, { responseType: 'text' }).pipe(
    //         map(
    //             (response) => {
    //                 if (response) {
    //                     return response;
    //                 }
    //             },
    //             (error: any) => {
    //                 return error;
    //             }
    //         )
    //     );
    // }
}
