import electronics from "../assets/image1.png";
import womensClothing from "../assets/image2.png";
import jewelery from "../assets/image3.png";
import mensClothing from "../assets/image4.png";

export enum Category {
  Jewelery = "jewelery",
  WomensClothing = `women's clothing`,
  Electronics = "electronics",
  MensClothing = `men's clothing`,
}

export const categoryImages: Record<Category, string> = {
  [Category.Electronics]: electronics,
  [Category.Jewelery]: jewelery,
  [Category.MensClothing]: mensClothing,
  [Category.WomensClothing]: womensClothing,
};
