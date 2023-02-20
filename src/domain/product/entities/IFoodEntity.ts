export interface IFoodProps {
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
  image?: {
    mobileSrc?: string;
    desktopSrc?: string;
  };
}

export interface IFoodCreate {
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
  mobileSrc?: string;
  desktopSrc?: string;
  discountPercentage?: number;
  isPromotion?: boolean;
}

export interface IFood {
  food?: IFoodProps;
}
