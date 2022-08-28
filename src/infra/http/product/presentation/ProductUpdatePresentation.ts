import { container, injectable } from 'tsyringe';

import { IFoodCreate } from '@domain/product/entities/IFoodEntity';
import ProductUpdateUseCase from '../../../../domain/product/useCases/ProductUpdateUseCase';
import IPresentation from 'core/Presentation';

@injectable()
export default class ProductUpdatePresentation
  implements IPresentation<IFoodCreate>
{
  public async handle(props: IFoodCreate) {
    const productUpdateUseCase = container.resolve(
      ProductUpdateUseCase
    );

    const updateProduct = productUpdateUseCase.execute({
      id: props?.id,
      title: props?.title,
      description: props?.description,
      category: props?.category,
      price: {
        priceNumber: props?.priceNumber,
        installment: {
          monthInstallment: props?.monthInstallment,
          pricePerMonth: props?.pricePerMonth,
        },
      },
      brand: props?.brand,
      rating: props?.rating,
      freight: props?.freight,
      stock: props?.stock,
      manufacture: props?.manufacture,
      slug: props?.slug,
      image: {
        mobileSrc: props?.mobileSrc,
        desktopSrc: props?.desktopSrc,
      },
    });

    return updateProduct;
  }
}
