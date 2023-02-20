import { container, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

import ProductCreateUseCase from '../../../../domain/product/useCases/ProductCreateUseCase';
import IPresentation from 'core/Presentation';
import { IProductCreate } from '@domain/product/entities';
import { formatPrice } from '../../../../core/utils/priceFormat';

@injectable()
export default class ProductCreatePresentation
  implements IPresentation<IProductCreate>
{
  public async handle(props: IProductCreate) {
    const productCreateUseCase = container.resolve(
      ProductCreateUseCase
    );

    const { price, newPriceDiscount, pricePerMonth } = formatPrice({
      price: Number(props?.priceNumber) || 0,
      discountPercentage: props?.discountPercentage,
      installment: props?.monthInstallment,
      isPromotion: props?.isPromotion,
    });

    const createProduct = await productCreateUseCase.execute({
      id: uuid(),
      title: props?.title,
      description: props?.description,
      category: props?.category,
      price: {
        priceNumber: price,
        newPriceDiscount,
        installment: {
          monthInstallment: props?.monthInstallment,
          pricePerMonth,
        },
      },
      brand: props?.brand,
      rating: props?.rating,
      freight: props?.freight,
      stock: props?.stock,
      manufacture: props?.manufacture,
      slug: props?.slug,
      isPromotion: props?.isPromotion,
      discountPercentage: props?.discountPercentage,
      image: {
        mobileSrc: props?.mobileSrc,
        desktopSrc: props?.desktopSrc,
      },
    });

    return createProduct;
  }
}
