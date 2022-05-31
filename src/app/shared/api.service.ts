import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  _http: HttpClient) { }



  // Post Method For Add Student
  postTeacher(data:any)
  {
    return this._http.post<any>("https://97mm2.sse.codesandbox.io/teachers",data).pipe(map((res:any)=> {
      return res
    }))
  }

    // Get Method For All Teachers
    getTeacher()
    {
      return this._http.get<any>("https://97mm2.sse.codesandbox.io/teachers").pipe(map((res:any)=> {
        return res
      }))
    }

      // Put Method For Update Teachers
  putTeacher(data:any, id:number)
  {
    return this._http.put<any>("https://97mm2.sse.codesandbox.io/teachers/" + id,data).pipe(map((res:any)=> {
      return res
    }))
  }

  // Delete Method For Update Teachers
  deleteTeacher(id:number)
  {
    return this._http.delete<any>("https://97mm2.sse.codesandbox.io/teachers/" + id).pipe(map((res:any)=> {
      return res
    }))
  }
    
}
