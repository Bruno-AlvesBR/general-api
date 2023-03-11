"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = void 0;
const formatPrice = ({ price, discountPercentage, installment, isPromotion, }) => {
    const verifyPriceNaNCharacter = String(price).includes(',');
    const formatPrice = verifyPriceNaNCharacter
        ? Number(String(price).replace(',', '.'))
        : Number(price);
    const formattedPrice = (param) => Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(param);
    const countDiscount = discountPercentage
        ? (formatPrice * discountPercentage) / 100
        : 0;
    const formatFinalDiscount = () => {
        const divisionResult = formatPrice - countDiscount;
        const divisionFormatted = formattedPrice(divisionResult);
        return divisionFormatted;
    };
    let countInstallment = installment ? formatPrice / installment : 0;
    if (isPromotion) {
        countInstallment = installment
            ? (formatPrice - countDiscount) / installment
            : 0;
        return {
            price: formattedPrice(formatPrice),
            newPriceDiscount: formatFinalDiscount(),
            pricePerMonth: formattedPrice(countInstallment),
        };
    }
    else {
        return {
            price: formattedPrice(formatPrice),
            pricePerMonth: formattedPrice(countInstallment),
        };
    }
};
exports.formatPrice = formatPrice;
