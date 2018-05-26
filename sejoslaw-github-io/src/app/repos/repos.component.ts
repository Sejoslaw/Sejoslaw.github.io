import { Component, OnInit, OnDestroy } from "@angular/core";

import { GitHubService } from "../services/github.service";

import { Subscribable, Subscription } from "rxjs";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.css"]
})
export class ReposComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  public repos: any;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit() {
    this.generateTable();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  generateTable() {
    this.sub = this.gitHubService.getRepos("Sejoslaw").subscribe(data => {
      this.repos = data;
    });
  }
}
