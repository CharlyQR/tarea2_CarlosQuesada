import { Component, Input } from "@angular/core";
import { ICategory } from "../../../interfaces";

@Component({
  selector: "app-categoria-list",
  templateUrl: "./categoria-list.component.html",
  styleUrls: ["./categoria-list.component.scss"],
  standalone: true
})
export class CategoriaListComponent {
   @Input() categoriaList: ICategory[] = [];
}