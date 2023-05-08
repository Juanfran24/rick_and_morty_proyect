import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCharactersFiltered(name: string) : Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+`?name=${name}`);
  }

}
