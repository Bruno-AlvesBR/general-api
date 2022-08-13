import { container, injectable } from 'tsyringe';
import { v4 as uuid } from 'uuid';

import ProductCreateUseCase from '../../../../domain/product/useCases/ProductCreateUseCase';
import IPresentation from 'core/Presentation';
import { IFoodCreate } from '@domain/product/entities/IFoodEntity';

@injectable()
export default class ProductCreatePresentation
  implements IPresentation<IFoodCreate>
{
  public async handle(props: IFoodCreate) {
    const productCreateUseCase = container.resolve(
      ProductCreateUseCase
    );

    const createProduct = productCreateUseCase.execute({
      id: uuid(),
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

    return createProduct;
  }
}
