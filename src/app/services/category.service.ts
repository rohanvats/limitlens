import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  faceswapCategories(): Observable<any> {
    return this.http
      .get(`${environment.URL}/images/previewglobal`)
      .pipe(map((data) => data?.['images']));
  }

  getCategory(id: number): Observable<any> {
    return this.http
      .get(`${environment.URL}/images/style/${id}`)
      .pipe(map((data) => data?.['data']?.['new_images']));
  }
}
