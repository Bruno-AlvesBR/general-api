"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authTokenApi = (request, response, next) => {
    const authTokenHeader = request.headers.authorization;
    if (!authTokenHeader)
        return response.status(401).send({ error: 'Cannot find token!' });
    const splitedHeaderToken = authTokenHeader.split(' ');
    if (splitedHeaderToken.length !== 2)
        return response.status(401).send({ error: 'Token error!' });
    const [scheme, token] = splitedHeaderToken;
    if (!/^Bearer$/i.test(scheme))
        return response.status(401).send({ error: 'Token malformed!' });
    jsonwebtoken_1.default.verify(token, `${process.env.SECRET_JWT}`, (err, decoded) => {
        if (err)
            return response.status(401).send({ error: 'Invalid token!' });
        request.body.id = decoded === null || decoded === void 0 ? void 0 : decoded.id;
        return next();
    });
};
exports.default = authTokenApi;
