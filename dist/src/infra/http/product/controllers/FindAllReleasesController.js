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
exports.FindAllReleasesController = void 0;
const tsyringe_1 = require("tsyringe");
const FindAllReleasesPresentation_1 = require("../presentation/FindAllReleasesPresentation");
class FindAllReleasesController {
    index(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const findAllReleasesPresentation = tsyringe_1.container.resolve(FindAllReleasesPresentation_1.FindAllReleasesPresentation);
            try {
                const products = yield findAllReleasesPresentation.handle();
                return response.json(products);
            }
            catch (error) {
                return response.status(503).json({ message: error });
            }
        });
    }
}
exports.FindAllReleasesController = FindAllReleasesController;
