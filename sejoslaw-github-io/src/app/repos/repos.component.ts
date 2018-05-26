import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscribable, Subscription } from "rxjs";

import { GitHubService } from "../services/github.service";
import { RepositoryComponent } from './../repository/repository.component';

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"]
})
export class ReposComponent implements OnInit, OnDestroy {
  private subs: Array<Subscription> = new Array<Subscription>();

  public repos: any;
  public starred: any;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit() {
    this.generateMyReposTable();
    this.generateStarredReposTable();
  }

  ngOnDestroy(): void {
    for (const sub of this.subs) {
      sub.unsubscribe();
    }
  }

  generateMyReposTable() {
    this.subs[0] = this.gitHubService.getRepos("Sejoslaw").subscribe(data => {
      this.repos = data;
    });
  }

  generateStarredReposTable() {
    this.subs[1] = this.gitHubService.getStarred("Sejoslaw").subscribe(data => {
      this.starred = data;
    });
  }
}
