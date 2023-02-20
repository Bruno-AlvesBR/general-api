import { container, injectable } from 'tsyringe';

import { IProductCreate } from '@domain/product/entities';
import ProductUpdateUseCase from '../../../../domain/product/useCases/ProductUpdateUseCase';
import IPresentation from '../../../../core/Presentation';
import { formatPrice } from '../../../../core/utils/priceFormat';

@injectable()
export default class ProductUpdatePresentation
  implements IPresentation<IProductCreate>
{
  public async handle(props: IProductCreate) {
    const productUpdateUseCase = container.resolve(
      ProductUpdateUseCase
    );

    const { price, newPriceDiscount, pricePerMonth } = formatPrice({
      price: Number(props?.priceNumber) || 0,
      discountPercentage: props?.discountPercentage,
      installment: props?.monthInstallment,
      isPromotion: props?.isPromotion,
    });

    const updateProduct = await productUpdateUseCase.execute({
      id: props?.id,
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

    return updateProduct;
  }
}
