import { Component, inject, ViewChild } from "@angular/core";
import { ICategory } from "../../interfaces";
import { CategoriaFormComponent } from "../../components/categorias/categoria-form/categoria-form.component";
import { CategoriaListComponent } from "../../components/categorias/categoria-list/categoria-list.component";
import { CategoriaService } from "../../services/categoria.service";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { FormBuilder, Validators } from "@angular/forms";
import { ModalService } from "../../services/modal.service";

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
    public fb: FormBuilder = inject(FormBuilder);
    public categoriaForm = this.fb.group({
        id: [''],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required]
    });

    public modalService: ModalService = inject(ModalService);
    @ViewChild('editCategoriaModal') public editCategoriaModal: any;

    constructor() {
        this.categoriaService.getAll();
    }

    saveCategoria(item: ICategory) {
      this.categoriaService.save(item);
    }
    
}