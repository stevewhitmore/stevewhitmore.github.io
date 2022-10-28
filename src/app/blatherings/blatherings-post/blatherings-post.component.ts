import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlatheringsDataService } from '../blatherings-data.service';

@Component({
  selector: 'app-blatherings-post',
  templateUrl: './blatherings-post.component.html',
  styleUrls: ['./blatherings-post.component.scss']
})
export class BlatheringsPostComponent implements OnInit {
  @Input() postContentInput: any;
  postContent: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blatheringsDataService: BlatheringsDataService,
  ) {}

  ngOnInit(): void {
    const postName = this.activatedRoute.snapshot.params['post-name'];
    this.getPage(postName)
  }


  getPage(postName: string): void {
    console.log(postName)
    this.blatheringsDataService.getPageContent(postName)
      .subscribe({
        next: content => this.postContent = content,
      });
  }

}
