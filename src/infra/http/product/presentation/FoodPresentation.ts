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

    const saveProduct = await createProduct.save();

    if (!createProduct) {
      throw new Error('Unexpected error ocurred!');
    }

    return saveProduct;
  }

  public async udpate(
    id: string,
    { ...data }: IFoodCreate
  ) {
    const updateFood = await Food?.findOneAndUpdate(
      { id },
      {
        title: data?.title,
        description: data?.description,
        category: data?.category,
        price: {
          priceNumber: data?.priceNumber,
          installment: {
            monthInstallment: data?.monthInstallment,
            pricePerMonth: data?.pricePerMonth,
          },
        },
        brand: data?.brand,
        rating: data?.rating,
        freight: data?.freight,
        stock: data?.stock,
        data: data?.manufacture,
        slug: data?.slug,
        image: {
          mobileSrc: data?.mobileSrc,
          desktopSrc: data?.desktopSrc,
        },
      },
      { now: true }
    );

    if (!updateFood) {
      throw new Error('Cannot update food data');
    }

    return updateFood;
  }

  public async findById(id: string) {
    const findFoodById = await Food?.findOne({ id });

    if (!findFoodById) {
      throw new Error('Cannot find product by id');
    }

    return findFoodById;
  }
}
