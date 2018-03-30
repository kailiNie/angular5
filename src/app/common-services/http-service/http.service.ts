import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {Observable} from "rxjs"

@Injectable()
export class HttpServices {
  ws : WebSocket;
  constructor(public http:Http) { }

  //获取httpGet请求
  postHttp =(url : string,param : any) => new Promise((resolve, reject)=> {
    this.http.post(`api${url}`,
       param).subscribe(
            (val) => {
                 const { url,_body} : any = val;
                 var body = JSON.parse(_body);
                 resolve(body);
            },
            response => {
             //   reject(response);
            },
            () => {
                console.log("请求完成");
        }
      );
  });

   getHttp =(url : string) => new Promise((resolve, reject)=> {
    this.http.get(`api${url}`).subscribe(
            (val) => {
                 const { url,_body} : any = val;
                 var body = JSON.parse(_body);
                 resolve(body);
            },
            response => {
             //   reject(response);
            },
            () => {
                console.log("请求完成");
        }
      );
  });

   //webSock
  connect(url:string) : Observable<any>{
    this.ws = new WebSocket(url);
    return new Observable(
      observer =>{
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    )
  }

}
