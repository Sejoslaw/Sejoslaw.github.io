import { Injectable, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Subscription, Subject } from "rxjs";

@Injectable()
export class GitHubService {
  constructor(private httpClient: HttpClient) {}

  getRepos(userName: string) {
    let url = "https://api.github.com/users/" + userName + "/repos";
    return this.httpClient.get(url);
  }
}
