import { Component, inject } from "@angular/core";
import { ICategory } from "../../interfaces";
import { CategoriaFormComponent } from "../../components/categorias/categoria-form/categoria-form.component";
import { CategoriaListComponent } from "../../components/categorias/categoria-list/categoria-list.component";
import { CategoriaService } from "../../services/categoria.service";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component  ({
  selector: "app-categoria",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
  standalone: true,
  imports: [
    CategoriaFormComponent,
    CategoriaListComponent,
    PaginationComponent
  ]
})
export class CategoriaComponent {
    categoriaList: ICategory[] = []
    public categoriaService: CategoriaService = inject(CategoriaService);

    constructor() {
        this.categoriaService.getAll();
    }
}