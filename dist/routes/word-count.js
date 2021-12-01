"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const WordCounter_1 = __importDefault(require("../WordCounter"));
const router = express_1.default.Router();
router.post('/', async (req, res) => {
    const n = req.query.n;
    const stream = new WordCounter_1.default(parseInt(n, 10));
    req.pipe(stream);
    req.on('end', () => {
        res.json({
            frequencies: stream.getFrequencies()
        });
    });
});
exports.default = router;
//# sourceMappingURL=word-count.js.map