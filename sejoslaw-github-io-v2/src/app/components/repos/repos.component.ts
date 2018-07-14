import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { IGithubTableRow } from '../../shared/interfaces/igithub-table-row';
import { Subscription } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { GithubService } from '../../shared/services/github.service';

@Component({
  selector: 'seia-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit, OnDestroy {
  constructor(private gitHubService: GithubService) {}

  @Input() header: string;
  @Input() reposList: string;

  displayedColumns: string[] = [
    'index',
    'id',
    'name',
    'description',
    'html_url'
  ];
  data: MatTableDataSource<IGithubTableRow>;

  private subs: Subscription;
  private receivedData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.generateTable();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  generateTable() {
    this.subs = this.gitHubService
      .getResults('Sejoslaw', this.reposList)
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
