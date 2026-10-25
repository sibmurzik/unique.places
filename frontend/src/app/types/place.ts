export type Place = {
  id: string;
  name: string;
  category: string;
  city: string;
  country: string;
  rating: number;
  priceLevel: number;
  tags:string[] ;
  badge:string | null;
  shortDescription: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  isPublished: true;
  inFavorite?: boolean;
  in18plus?: boolean;
  onlyBooking?: boolean;
}
