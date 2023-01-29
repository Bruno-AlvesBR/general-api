"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
require("./database/connection");
require("./database/providers/injections");
const routes_1 = require("./infra/http/shared/routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(routes_1.routes);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
exports.default = app;
