import { ICartData, IFindAllDTO } from '@domain/chart/data';
import { Product } from '../../../database/models/product/ProductSchema';
import { IProduct } from '@domain/product/entities';

class CartProvider implements ICartData {
  async findAll({ ids }: IFindAllDTO): Promise<Array<IProduct>> {
    try {
      const project = {
        id: 1,
        title: 1,
        description: 1,
        category: 1,
        freight: 1,
        stock: 1,
        slug: 1,
        manufacture: 1,
        isPromotion: 1,
        discountPercentage: 1,
        images: 1,
        price: {
          installment: 1,
          priceNumber: 1,
          newPriceDiscount: 1,
        },
      };

      if (ids) {
        const idArray = ids.split(',');

        const products = await Product.find({ id: idArray }).select(
          project
        );

        return products;
      }

      const products = await Product.find().select(project);

      return products;
    } catch (error) {
      throw new Error(
        `An error ocurred on find all products into cart: ${error}`
      );
    }
  }
}

export { CartProvider };
