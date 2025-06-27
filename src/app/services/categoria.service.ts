import { inject, Injectable, signal } from '@angular/core';
import { BaseService } from './base-service';
import { ICategory, IResponse, ISearch } from '../interfaces';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseService<ICategory> {
  protected override source: string = 'categorias';
  private categoriaListSignal = signal<ICategory[]>([]);
  get categorias$() {
    return this.categoriaListSignal;
  }

  public search: ISearch = { 
    page: 0,
    size: 0
  }

  public totalItems: any = [];
  private alertService: AlertService = inject(AlertService);

  getAll() {
    this.findAllWithParams({ page: this.search.page, size: this.search.size})
    .subscribe({
      next: (response: IResponse<ICategory[]>) => {
        this.search = { ...this.search, ...response.meta };
        this.totalItems = Array.from({ length: this.search.totalPages ? this.search.totalPages : 0 }, (_, i) => i + 1);
        this.categoriaListSignal.set(response.data);
      },
      error: (err: any) => {
        console.error('error', err);
      }
    });
  }
}
