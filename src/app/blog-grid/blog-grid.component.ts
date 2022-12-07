import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import {PaginationComponent} from "../common/pagination/pagination.component";
import {ActivatedRoute, Router} from "@angular/router";
import {GoogleAnalyticsService} from "ngx-google-analytics";

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css'],
})
export class BlogGridComponent extends PaginationComponent implements OnInit {
  blogs: any[] = [];
  categories: Map<string, number> = new Map([]);
  tags: string[] = [];
  filterTerm!: string;

  constructor(public commonService: CommonServiceService,
              private route: ActivatedRoute,
              public router: Router,
              private gaService: GoogleAnalyticsService) {
    super(4);
  }

  override ngOnInit(): void {
    this.filterTerm = this.route.snapshot.queryParams['filterTerm'];
    this.getBlogs();
    super.ngOnInit();
    this.goToTopOfPage();
  }

  getBlogs() {
    this.commonService.getBlogs().subscribe((result) => {
      this.blogs = result;
      this.updateItemCountForBlogs(result)

      this.categories = result
        .reduce<Map<string, number>>((p,c,i,a)=>{
          if(p.has(c.type)) {
            // @ts-ignore
            p.set(c.type, p.get(c.type) + 1)
          } else {
            p.set(c.type, 1)
          }
          return p
        },  new Map([]))

      this.tags = [...new Set<string>(result.flatMap(r=>r.tags))]
    })
  }

  updateFilterTerm(key: string) {
    this.filterTerm = key;
    this.updateItemCount();
    this.goToTopOfPage();
    this.gaService.event('filter_by_click_blog_grid', 'filter_blog', 'Filter By Click Blog Grid');
  }

  updateItemCount() {
    this.updateItemCountForBlogs(this.blogs)
    this.gaService.event('filter_blog_grid', 'filter_blog', 'Filter Blog Grid');
  }

  private updateItemCountForBlogs(blogs: any[]) {
    this.setItemCount(blogs.filter(x=>{
      return this.filterTerm === undefined || JSON.stringify(x).indexOf(this.filterTerm) > -1
    }).length)
  }

}
