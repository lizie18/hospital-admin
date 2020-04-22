import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {
  title: string;
  constructor(
    private router: Router,
    private titleTab: Title,
    private meta: Meta
  ) {

    this.getDataRouter().subscribe( data => {
      console.log(data);
      this.title = data.title;
      this.titleTab.setTitle(this.title);

      // Definición de meta tag
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
      };

      // Inclusión de meta tag en HTML
      this.meta.updateTag(metaTag);
    } );
  }

  ngOnInit(): void {
  }

  getDataRouter() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map(data => data.snapshot.data)
    );
  }

}
