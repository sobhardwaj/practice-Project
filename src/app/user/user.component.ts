import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { tap, map, filter } from "rxjs/operators";
import { Component, AfterViewInit, ViewChild,
  ViewContainerRef, TemplateRef } from '@angular/core';
  
  
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: []
})
export class UserComponent implements AfterViewInit, OnInit {
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>;
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef;

  constructor() { }

  ngAfterViewInit() {
    const view =  this.tpl.createEmbeddedView(null);
    this.ctr.insert(view);
  }
}
  // title = "New App";
  // const squareOf2 = of(1, 2, 3, 4, 5,6)
  // .pipe(
  //   filter(num => num % 2 === 0),
  //   map(num => num * num)
  // );
  // squareOf2.subscribe( (num) => console.log(num));

  // getItems(): Observable> {
  //   return this.aService.getItems().pipe(map(response => response.data));
  // };
  // create observable
  // const simpleObservable = new Observable((observer) => {
  //   // observable execution
  //   observer.next('Hello Observable');
  //   observer.complete();
  // });

  // subscribe to the observable
  // simpleObservable.subscribe();
  ngOnInit() {
    // getItems().then();
  }
}
