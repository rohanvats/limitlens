import { Image } from './image.interface';

export interface FaceswapCategory {
  id: number;
  name: string;
  images: Image[];
}
