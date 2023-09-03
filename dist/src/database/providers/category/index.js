"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryProvider = void 0;
const category_1 = require("../../../database/models/category");
class CategoryProvider {
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_1.CategoryModel.create(data);
                const savedCategory = yield category.save();
                return savedCategory;
            }
            catch (error) {
                throw new Error(`An error ocurred on create category on provider: ${error}`);
            }
        });
    }
    updateCategory({ id, data, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield category_1.CategoryModel.findOneAndUpdate({ id }, data);
                const updatedCategory = yield category_1.CategoryModel.findOne({ id });
                return updatedCategory;
            }
            catch (error) {
                throw new Error(`An error ocurred on update the category on provider: ${error}`);
            }
        });
    }
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('test', id);
                yield category_1.CategoryModel.findOneAndDelete({ id });
            }
            catch (error) {
                throw new Error('Method not implemented.');
            }
        });
    }
    findAllCategories({ limit, offset, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield category_1.CategoryModel.find()
                    .sort({ updatedAt: -1 })
                    .skip(offset)
                    .limit(limit);
                return categories;
            }
            catch (error) {
                throw new Error(`An error ocurred on find all categories on provider: ${error}`);
            }
        });
    }
    findCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_1.CategoryModel.findOne({ id });
                return category;
            }
            catch (error) {
                throw new Error(`An error ocurred on find category by id on provider: ${error}`);
            }
        });
    }
}
exports.CategoryProvider = CategoryProvider;
