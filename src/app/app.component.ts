import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  transition,
  trigger,
  query,
  style,
  animate
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("routerAnimation", [
      transition("* => *", [
        query(":enter", [style({ opacity: 0 })], { optional: true }),
        query(
          ":leave",
          [style({ opacity: 1 }), animate("0.5s", style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ":enter",
          [style({ opacity: 0 }), animate("0.5s", style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = "uas-pti";
  router: string;

  constructor(public _router: Router) {}
}
