import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly http = inject(HttpClient);

  message(userMessage: string){
    this.http.post<any>('http://localhost:5050/api/message', { message: userMessage })
        .subscribe ({
          next: (res) => {
            if (res.status === 'success') {
              console.log(`✅ Verification successful!`);
          }
          },
          error: (err) => {
            console.log(
              '❌ Error performing the http request, error message:',
              err
            );
  
            const { status, message } = err.error;
            if (status === 'error' && message) {
              console.log("nie udalo sie i chuj")
            } else {
              console.log("nie udalo sie i chuj")
            }
          },
          
          
        });

        
  }
}
