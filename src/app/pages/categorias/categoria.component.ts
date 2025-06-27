import { Component } from "@angular/core";
import { ICategory } from "../../interfaces";
import { CategoriaFormComponent } from "../../components/categorias/categoria-form/categoria-form.component";
import { CategoriaListComponent } from "../../components/categorias/categoria-list/categoria-list.component";

@Component  ({
  selector: "app-categoria",
  templateUrl: "./categorias.component.html",
  styleUrls: ["./categorias.component.scss"],
  standalone: true,
  imports: [
    CategoriaFormComponent,
    CategoriaListComponent
  ]
})
export class CategoriaComponent {
    categoriaList: ICategory[] = [
        {
            name: "Comida",
            description: "Productos comestibles"
        },
        {
            name: "Tecnología",
            description: "Productos tecnológicos"
        },
        {
            name: "Salud",
            description: "Productos de medicamentos"
        }
    ]
}