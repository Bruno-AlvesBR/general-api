interface IFormatPrice {
  price: number;
  isPromotion?: boolean;
  installment?: number;
  discountPercentage?: number;
}

interface IPrice {
  price: string;
  newPriceDiscount?: string;
  pricePerMonth?: string;
}

const formatPrice = ({
  price,
  discountPercentage,
  installment,
  isPromotion,
}: IFormatPrice): IPrice => {
  const formattedPrice = (param: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(param);

  const countDiscount = discountPercentage
    ? (price * discountPercentage) / 100
    : 0;

  const formatFinalDiscount = (): string => {
    const divisionResult = price - countDiscount;
    const divisionFormatted = formattedPrice(divisionResult);

    return divisionFormatted;
  };

  let countInstallment = installment ? price / installment : 0;

  if (isPromotion) {
    countInstallment = installment
      ? (price - countDiscount) / installment
      : 0;

    return {
      price: formattedPrice(price),
      newPriceDiscount: formatFinalDiscount(),
      pricePerMonth: formattedPrice(countInstallment),
    };
  } else {
    return {
      price: formattedPrice(price),
      pricePerMonth: formattedPrice(countInstallment),
    };
  }
};

export { formatPrice };
