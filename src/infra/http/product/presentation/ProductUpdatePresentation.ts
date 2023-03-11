import { container, injectable } from 'tsyringe';

import { IProductCreate, IProduct } from '@domain/product/entities';
import ProductUpdateUseCase from '../../../../domain/product/useCases/ProductUpdateUseCase';
import IPresentation from '../../../../core/Presentation';
import { formatPrice } from '../../../../core/utils/priceFormat';

@injectable()
export default class ProductUpdatePresentation
  implements IPresentation<IProductCreate, IProduct>
{
  public async handle(props: IProductCreate) {
    const productUpdateUseCase = container.resolve(
      ProductUpdateUseCase
    );

    const { price, newPriceDiscount, pricePerMonth } = formatPrice({
      price: props?.priceNumber || '',
      discountPercentage: props?.discountPercentage,
      installment: props?.monthInstallment,
      isPromotion: props?.isPromotion,
    });

    const updateProduct = await productUpdateUseCase.execute({
      ...props,
      price: {
        priceNumber: price,
        newPriceDiscount,
        installment: {
          monthInstallment: props?.monthInstallment,
          pricePerMonth,
        },
      },
    });

    return updateProduct;
  }
}
