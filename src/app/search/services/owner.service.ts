import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OwnerService {

  constructor(private httpClient: HttpClient) { }

  getOwners() {
    return this.httpClient.get('http://localhost:9966/petclinic/api/owners')
  }

  



}
