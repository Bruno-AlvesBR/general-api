export interface IProduct {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    priceNumber?: string;
    newPriceDiscount?: string;
    installment?: {
      monthInstallment?: number;
      pricePerMonth?: string;
    };
  };
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  isPromotion?: boolean;
  discountPercentage?: number;
  images?: Array<string>;
}

export interface IProductCreate {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  priceNumber?: string;
  monthInstallment?: number;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  images?: Array<string>;
  discountPercentage?: number;
  isPromotion?: boolean;
}

export interface IProduct {
  product?: IProduct;
}
