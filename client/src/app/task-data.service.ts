import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }
}
