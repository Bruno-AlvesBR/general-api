import {
  ICartData,
  ICartDTO,
  ICreateCartDTO,
  IRemoveProductCartDTO,
} from '@domain/chart/data';
import { ICart } from '@domain/chart/entities';
import { Product } from '../../../database/models/product/ProductSchema';
import { Cart } from '../../../database/models/chart';
import { IProduct } from '@domain/product/entities';

class CartProvider implements ICartData {
  async createCart(data: ICreateCartDTO): Promise<void> {
    try {
      const cart = new Cart(data);

      await cart.save();
    } catch (error) {
      throw new Error(`Error on create cart: ${error}`);
    }
  }

  async addProductToCart(data: ICartDTO): Promise<ICart> {
    try {
      const findedCart = await Cart.findOne({ id: data?.id });
      let concatProductsIntoCart = findedCart?.productsId
        ? [...findedCart?.productsId]
        : [];

      data?.productsId?.filter((product) => {
        !findedCart?.productsId?.some(
          (oldProduct) => oldProduct === product
        )
          ? concatProductsIntoCart.push(product)
          : null;
      });

      const cart = await Cart.findOneAndUpdate(
        { id: data?.id },
        { productsId: concatProductsIntoCart }
      );

      return cart || ({} as ICart);
    } catch (error) {
      throw new Error(
        `An error ocurred on add product into cart: ${error}`
      );
    }
  }

  async findAll(id: string): Promise<Array<IProduct>> {
    try {
      const cart = await Cart.findOne({ id });

      const products = await Product.find({
        id: cart?.productsId,
      }).select({
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
      });

      return products;
    } catch (error) {
      throw new Error(
        `An error ocurred on find all products into cart: ${error}`
      );
    }
  }

  async removeProductIntoCart(
    data: IRemoveProductCartDTO
  ): Promise<ICart> {
    try {
      const findedCart = await Cart.findOne({ id: data?.id });
      let concatProductsIntoCart: Array<string> = [];

      findedCart?.productsId?.filter((product) =>
        product === data?.productsId[0]
          ? null
          : concatProductsIntoCart.push(product)
      );

      const cart = await Cart.findOneAndUpdate(
        { id: data?.id },
        { productsId: concatProductsIntoCart }
      );

      return cart || ({} as ICart);
    } catch (error) {
      throw new Error(
        `An error ocurred on remove product into cart: ${error}`
      );
    }
  }
}

export { CartProvider };
