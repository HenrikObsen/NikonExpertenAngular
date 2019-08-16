import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { Kategori } from '../_models/Kategori';
import { Besked } from '../_models/Besked';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //god tutorial 
  //https://www.techiediaries.com/angular-by-example-httpclient-get/?fbclid=IwAR3VThEnOlHKggNyTJ2m71ZdvgjmfUJcp8p9GvdHEc1BrUkZHnKWDTAZGwU
  //private _localUrl: string = "https://localhost:3001/api/"
  private _localUrl: string = "http://nikonapi.henrikobsen.dk/api/"

  constructor(private http: HttpClient) { }

  postMail(besked:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
   
   console.log(besked);
     return this.http.post(this._localUrl + "sendmail",besked, options)     
  }
  
  getAll(endpoint): Observable<JSON>{
    return this.http.get<JSON>(this._localUrl + endpoint)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

    search(endpoint){
       return this.http.get(this._localUrl + endpoint);     
     }

     getKatPro(id): Observable<Kategori>{    
      return this.http.get<Kategori>(this._localUrl + "Kategorier/" + id)
          .pipe(catchError(this.errorHandler));
     }

     getKatListPro(): Observable<Kategori[]>{    
      return this.http.get<Kategori[]>(this._localUrl + "Kategorier")
          .pipe(catchError(this.errorHandler));
     }

//***************************** OM KLUBBEN **********************************************************/
getAllOmContent(): Observable<JSON>{
  return this.http.get<JSON>(this._localUrl + "omklubben")
  .pipe(catchError(error => {
    return throwError("Der gik noget galt : " + error.message);
  }));         
}

getOmContent(category): Observable<JSON>{
  return this.http.get<JSON>(this._localUrl + "omklubben?categories=" + category)
  .pipe(catchError(error => {
    return throwError("Der gik noget galt : " + error.message);
  }));         
}


//***************************** HOME ***************************************************************/
  getHomeText(): Observable<JSON[]>{    
    return this.http.get<JSON[]>(this._localUrl + "home")
        .pipe(catchError(this.errorHandler));
  }
  
  getHomeIinfBoxes(): Observable<JSON>{
    return this.http.get<JSON>(this._localUrl + "ibox?categories=2")
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

  getInfoBoxes(category): Observable<JSON>{
    return this.http.get<JSON>(this._localUrl + "infobox?categories=" + category)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

  getImageBoxes(category): Observable<JSON>{
    return this.http.get<JSON>(this._localUrl + "billedbox?categories=" + category)
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }



  // postHomeText(text:IText){
  //   return this.http.post("http://api.scubafun.dk/Data/SetValues/",text)     
  // }
  // getHomeOffers(): Observable<JSON>{
  //   return this.http.get<JSON>(this._pageUrl + "ibox?categories=2")
  //   .pipe(catchError(error => {
  //     return throwError("Der gik noget galt : " + error.message);
  //   }));         
  // }

  // getHomeText(): Observable<IText[]>{
    
  //   return this.http.get<IText[]>(this._url + "homeIText.json")
  //       .pipe(catchError(this.errorHandler));
  // }


  

  errorHandler(error : HttpErrorResponse){
    return throwError("Der gik noget galt : " + error.message);
  }
}
