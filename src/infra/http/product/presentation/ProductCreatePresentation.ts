import { container, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

import ProductCreateUseCase from '../../../../domain/product/useCases/ProductCreateUseCase';
import IPresentation from 'core/Presentation';
import { IProductCreate, IProduct } from '@domain/product/entities';
import { formatPrice } from '../../../../core/utils/priceFormat';

@injectable()
export default class ProductCreatePresentation
  implements IPresentation<IProductCreate, IProduct>
{
  public async handle(props: IProductCreate) {
    const productCreateUseCase = container.resolve(
      ProductCreateUseCase
    );

    const { price, newPriceDiscount, pricePerMonth } = formatPrice({
      price: props?.priceNumber || '',
      discountPercentage: props?.discountPercentage,
      installment: props?.monthInstallment,
      isPromotion: props?.isPromotion,
    });

    const createProduct: IProduct =
      await productCreateUseCase.execute({
        ...props,
        id: uuid(),
        price: {
          priceNumber: price,
          newPriceDiscount,
          installment: {
            monthInstallment: props?.monthInstallment,
            pricePerMonth,
          },
        },
      });

    return createProduct;
  }
}
