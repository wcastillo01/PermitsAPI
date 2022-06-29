import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Permit from './models/permits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermitsService {
  constructor(private HttpClient: HttpClient) {}

  getPermits(): Observable<Permit[]> {
    return this.HttpClient.get<Permit[]>('https://localhost:5001/api/Permit');
  }

  getPermitById(id: number): Observable<Permit> {
    return this.HttpClient.get<Permit>(
      'https://localhost:5001/api/Permit/' + id
    );
  }

  editPermit(id: number, permit: Permit): Observable<string> {
    return this.HttpClient.put<string>(
      'https://localhost:5001/api/Permit/' + id,
      permit
    );
  }

  deletePermit(id: number): Observable<string> {
    return this.HttpClient.delete<string>(
      'https://localhost:5001/api/Permit/' + id
    );
  }

  addPermit(permit: Permit): Observable<string> {
    return this.HttpClient.post<string>(
      'https://localhost:5001/api/Permit',
      permit
    );
  }
}
