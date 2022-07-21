import IProductData from '@domain/product/data';
import {
    IFoodCreate,
    IFoodProps,
} from '@domain/product/entities/IFoodEntity';
import { Food } from '../../../database/models/product/FoodSchema';

export default class ProductDataProvider implements IProductData {
    public async create(props: IFoodCreate) {
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

        const saveProduct: IFoodProps = await createProduct.save();

        if (!createProduct) {
            throw new Error('Unexpected error ocurred!');
        }

        return saveProduct;
    }

    public async update(id: string, data: IFoodCreate) {
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
                manufacture: data?.manufacture,
                slug: data?.slug,
                image: {
                    mobileSrc: data?.mobileSrc,
                    desktopSrc: data?.desktopSrc,
                },
            }
        );

        if (!updateFood) {
            throw new Error('Cannot update food data');
        }

        return updateFood;
    }

    public async findAll() {
        const findAllProducts = await Food?.find();

        if (!findAllProducts) {
            throw new Error(
                'Unexpected error to search all products!'
            );
        }

        return findAllProducts;
    }

    public async findBySlug(slug: string) {
        const findFoodBySlug = await Food?.findOne({
            slug,
        });

        if (!findFoodBySlug) {
            throw new Error('Cannot find product by id');
        }

        return findFoodBySlug;
    }

    public async delete(id: string) {
        const findAndDelete = await Food?.findOneAndDelete({
            id,
        });

        if (!findAndDelete) {
            throw new Error('Cannot find and delete this item');
        }

        return findAndDelete;
    }
}
