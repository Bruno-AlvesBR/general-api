"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = void 0;
const formatPrice = ({ price, discountPercentage, installment, isPromotion, }) => {
    const formattedPrice = (param) => Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(param);
    const countDiscount = discountPercentage
        ? (price * discountPercentage) / 100
        : 0;
    const formatFinalDiscount = () => {
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
    }
    else {
        return {
            price: formattedPrice(price),
            pricePerMonth: formattedPrice(countInstallment),
        };
    }
};
exports.formatPrice = formatPrice;
