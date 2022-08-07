// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { map } from 'rxjs/operators';
// import { User } from "../models/user.model";
// import { BaseApi } from "./base-api";
// import { LoaderService } from "../components/loader/services";

// @Injectable()
// export class UsersService extends BaseApi {
//   constructor(public http: HttpClient, public loaderService: LoaderService) {
//     super(http, loaderService);
//   }

//   getUserByEmail(email: string, displayLoader: boolean = true): Observable<User> {
//     return this.get(`users?email=${email}`, displayLoader)
//       .pipe(map((users: User[]) => users[0] ? users[0] : undefined));
//   }

//   getUserByName(name: string, displayLoader: boolean = true): Observable<User> {
//     return this.get(`users?name=${name}`, displayLoader)
//       .pipe(map((users: User[]) => users[0] ? users[0] : undefined));
//   }

//   getUserById(id: string): Observable<User> {
//     return this.get(`users/${id}`)
//       .pipe(map((user: User) => user ? user : undefined));
//   }

//   createNewUser(user: User): Observable<User> {
//     return this.post('users', user);
//   }

//   updateUser(user: User): Observable<User> {
//     return this.put(`users/${user.id}`, user);
//   }
// }