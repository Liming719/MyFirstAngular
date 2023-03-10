import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { SignupInfo } from './sign-up-info/SignUpInfo';

@Injectable({
  providedIn: 'root'
})
export class SignUpInfoService {

  SignupInfoApi = 'http://localhost:23321/TsWeb/FindSignUp?key=Name&value=@all';
  SignupInfoList?: SignupInfo[];
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string): void{
    this.messageService.add(`From Signup Info Service: ${message}`);
  }

  getSignupInfo(): Observable<string> {    
    this.log('Access Signup Info From Web api');
    return this.http.get<string>(this.SignupInfoApi).pipe(
      catchError(this.handleError<string>('getSignupInfo',''))
    )
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
