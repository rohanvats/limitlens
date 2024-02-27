import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounceTime, delay, map, startWith } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

import { FaceswapCategory } from '../interfaces/faceswapCategory.interface';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private http: HttpClient) {}

  faceswapCategories(): Observable<FaceswapCategory[]> {
    return of([
      {
        id: 1,
        name: 'Category 1',
        images: [
          {
            id: '1',
            url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            caption: 'Image 1',
          },
          {
            id: '2',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 2',
          },
          {
            id: '3',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 3',
          },
          {
            id: '4',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 4',
          },
          {
            id: '5',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 5',
          },
          {
            id: '6',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 6',
          },
          {
            id: '7',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 7',
          },
          {
            id: '8',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 8',
          },
        ],
      },
      {
        id: 2,
        name: 'Category 2',
        images: [
          {
            id: '1',
            url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            caption: 'Image 1',
          },
          {
            id: '2',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 2',
          },
          {
            id: '3',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 3',
          },
          {
            id: '4',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 4',
          },
          {
            id: '5',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 5',
          },
          {
            id: '6',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 6',
          },
          {
            id: '7',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 7',
          },
          {
            id: '8',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 8',
          },
        ],
      },
      {
        id: 3,
        name: 'Category 3',
        images: [
          {
            id: '1',
            url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            caption: 'Image 1',
          },
          {
            id: '2',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 2',
          },
          {
            id: '3',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 3',
          },
          {
            id: '4',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 4',
          },
          {
            id: '5',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 5',
          },
          {
            id: '6',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 6',
          },
          {
            id: '7',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 7',
          },
          {
            id: '8',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 8',
          },
        ],
      },
      {
        id: 4,
        name: 'Category 4',
        images: [
          {
            id: '1',
            url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
            caption: 'Image 1',
          },
          {
            id: '2',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 2',
          },
          {
            id: '3',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 3',
          },
          {
            id: '4',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 4',
          },
          {
            id: '5',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 5',
          },
          {
            id: '6',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 6',
          },
          {
            id: '7',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 7',
          },
          {
            id: '8',
            url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
            caption: 'Image 8',
          },
        ],
      },
    ]).pipe(delay(3000), startWith(this.dummyData));
  }

  dummyData = [
    {
      id: 0,
      name: 'Category 1',
      images: [
        {
          id: '1',
          url: '',
          caption: 'Image 1',
        },
        {
          id: '2',
          url: '',
          caption: 'Image 2',
        },
        {
          id: '3',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 3',
        },
        {
          id: '4',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 4',
        },
        {
          id: '5',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 5',
        },
        {
          id: '6',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 6',
        },
        {
          id: '7',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 7',
        },
        {
          id: '8',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 8',
        },
      ],
    },
    {
      id: 0,
      name: 'Category 2',
      images: [
        {
          id: '1',
          url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          caption: 'Image 1',
        },
        {
          id: '2',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 2',
        },
        {
          id: '3',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 3',
        },
        {
          id: '4',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 4',
        },
        {
          id: '5',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 5',
        },
        {
          id: '6',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 6',
        },
        {
          id: '7',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 7',
        },
        {
          id: '8',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 8',
        },
      ],
    },
    {
      id: 0,
      name: 'Category 3',
      images: [
        {
          id: '1',
          url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          caption: 'Image 1',
        },
        {
          id: '2',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 2',
        },
        {
          id: '3',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 3',
        },
        {
          id: '4',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 4',
        },
        {
          id: '5',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 5',
        },
        {
          id: '6',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 6',
        },
        {
          id: '7',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 7',
        },
        {
          id: '8',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 8',
        },
      ],
    },
    {
      id: 0,
      name: 'Category 4',
      images: [
        {
          id: '1',
          url: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
          caption: 'Image 1',
        },
        {
          id: '2',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 2',
        },
        {
          id: '3',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 3',
        },
        {
          id: '4',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 4',
        },
        {
          id: '5',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 5',
        },
        {
          id: '6',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 6',
        },
        {
          id: '7',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 7',
        },
        {
          id: '8',
          url: 'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
          caption: 'Image 8',
        },
      ],
    },
  ];

  getCategory(id: number): Observable<FaceswapCategory> {
    return this.faceswapCategories().pipe(
      map((categories) => categories.find((category) => category.id === id)!)
    );
  }
}
