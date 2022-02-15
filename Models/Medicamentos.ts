export class Medicamentos {
  brand: string;
  laboratory: string;
  price: number;
  constructor(brand: string, laboratory: string, price: number) {
    this.brand = brand;
    this.laboratory = laboratory;
    this.price = price;
  }
}
