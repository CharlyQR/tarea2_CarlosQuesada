import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICategory } from "../../../interfaces";
import { ModalComponent } from "../../modal/modal.component";

@Component({
  selector: "app-categoria-list",
  templateUrl: "./categoria-list.component.html",
  styleUrls: ["./categoria-list.component.scss"],
  standalone: true,
})
export class CategoriaListComponent {
   @Input() categoriaList: ICategory[] = [];
   @Output() callUpdateModalMethod: EventEmitter<ICategory> = new EventEmitter<ICategory>();
}