import { IFoodCreate } from '../../../../domain/product/entities/IFoodEntity';
import { Food } from '../../../../providers/database/product/FoodSchema';

export class FoodPresentation {
  public async create({ ...props }: IFoodCreate) {
    const createProduct = new Food({
      id: props?.id,
      title: props?.title,
      description: props?.description,
      category: props?.category,
      price: {
        number: props?.priceNumber,
        installment: {
          month: props?.monthInstallment,
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

    const saveProduct = await createProduct.save();

    if (!createProduct) {
      throw new Error('Unexpected error ocurred!');
    }

    return saveProduct;
  }
}
