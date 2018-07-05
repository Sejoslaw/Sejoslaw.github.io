import { Component, OnInit, Input, OnDestroy, ViewChild } from "@angular/core";
import { GitHubService } from "../services/github.service";
import { Subscription } from "rxjs";
import { GithubTableRow } from "./GithubTableRow";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-repository",
  templateUrl: "./repository.component.html",
  styleUrls: ["./repository.component.css"]
})
export class RepositoryComponent implements OnInit, OnDestroy {
  @Input() public title: string;
  @Input() public reposList: any;

  private displayedColumns: string[] = [
    "index",
    "id",
    "name",
    "description",
    "html_url"
  ];
  private subs: Subscription;
  private receivedData: any;
  private data: MatTableDataSource<GithubTableRow>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit() {
    this.generateTable();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  generateTable() {
    this.subs = this.gitHubService
      .getResults("Sejoslaw", this.reposList)
      .subscribe(data => {
        this.receivedData = data;

        this.prepareTable();
      });
  }

  prepareTable() {
    this.data = new MatTableDataSource(this.receivedData);

    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
}
