import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGithubTableRow } from '../interfaces/igithub-table-row';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient: HttpClient) { }

  getResults(userName: string, listName: string) {
    const url = 'https://api.github.com/users/' + userName + '/' + listName + '?per_page=2147483647';
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };

    return this.httpClient.get<IGithubTableRow>(url, options);
  }
}
