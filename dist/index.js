"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const LISTEN_PORT = process.env.LISTEN_PORT || 3000;
const app = (0, express_1.default)();
app.use('/', routes_1.default);
app.listen(LISTEN_PORT, () => {
    console.log(`Example app listening at http://localhost:${LISTEN_PORT}`);
});
//# sourceMappingURL=index.js.map