import { IImageProps } from "@/components/atoms/Image/model";

export interface IPreviewProps {
  styles: object;
  id: string;
  imageProps: IImageProps;
  title: string;
  description: string;
  price: number;
}
