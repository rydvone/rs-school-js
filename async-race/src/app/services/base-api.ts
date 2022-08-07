// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { map, delay, tap, catchError } from "rxjs/operators";
// import { LoaderService } from "../components/loader/services";

// @Injectable()
// export class BaseApi {
//   protected baseUrl = 'http://localhost:3003/';

//   constructor(protected http: HttpClient,
//     protected loaderService: LoaderService) { }

//   protected getUrl(url: string = ''): string {
//     return this.baseUrl + url;
//   }

//   public get(url: string = '', displayLoader: boolean = true): Observable<any> {
//     if (displayLoader) {
//       this.loaderService.showLoader();
//     }
//     return this.http.get(this.getUrl(url)).pipe(delay(3000),
//       tap((res) => {
//         this.loaderService.hideLoader();
//         return res;
//       }),
//       catchError(er => {
//         this.loaderService.hideLoader();
//         return er;
//       }));
//   }

//   public post(url: string = '', data: any = {}): Observable<any> {
//     this.loaderService.showLoader();
//     return this.http.post(this.getUrl(url), data).pipe(delay(3000),
//       tap((res) => {
//         this.loaderService.hideLoader();
//         return res;
//       }),
//       catchError(er => {
//         this.loaderService.hideLoader();
//         return er;
//       }));
//   }

//   public put(url: string = '', data: any = {}): Observable<any> {
//     this.loaderService.showLoader();
//     return this.http.put(this.getUrl(url), data).pipe(delay(3000),
//       tap((res) => {
//         this.loaderService.hideLoader();
//         return res;
//       }),
//       catchError(er => {
//         this.loaderService.hideLoader();
//         return er;
//       }));
//   }
// }