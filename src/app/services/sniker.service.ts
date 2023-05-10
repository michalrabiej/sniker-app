import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SNIKER } from '../mock-snikers';
import { Sniker } from '../models/sniker';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SnikerService {
  private url = "Sniker"
  showEditForm: boolean = false;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public getShoes(): Observable<Sniker[]>{
    return this.http.get<Sniker[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateSniker(sniker: Sniker): Observable<Sniker[]>{
    return this.http.put<Sniker[]>(
      `${environment.apiUrl}/${this.url}`,
      sniker
      );
  }

  public createSniker(sniker: Sniker): Observable<Sniker[]>{
    return this.http.post<Sniker[]>(
      `${environment.apiUrl}/${this.url}`,
      sniker
      );
  }

  public deleteSniker(sniker: Sniker): Observable<Sniker[]>{
    return this.http.delete<Sniker[]>(
      `${environment.apiUrl}/${this.url}/${sniker.id}`
      );
  }

  getSnikers(): Observable<Sniker[]> {
    const snikers = of(SNIKER);
    this.messageService.add('SnikerService: fetched sneakers')
    return snikers;
  }
}
