export interface IFoodProps {
  id?: string;
  title?: string;
  description?: string;
  category?: string[];
  price?: {
    number?: number;
    installment?: {
      month?: number;
      pricePerMonth?: number;
    };
  };
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
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
  priceNumber?: number;
  monthInstallment?: number;
  pricePerMonth?: number;
  brand?: string;
  rating?: number;
  freight?: boolean;
  stock?: number;
  manufacture?: string;
  slug?: string;
  mobileSrc?: string;
  desktopSrc?: string;
}

export interface IFood {
  food?: IFoodProps;
}