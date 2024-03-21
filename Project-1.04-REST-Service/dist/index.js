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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const knexfile_1 = __importDefault(require("./knexfile"));
// Initialize Knex with the development configuration
const db = (0, knex_1.default)(knexfile_1.default);
const app = (0, express_1.default)();
const port = 9000;
app.use(express_1.default.json());
app.get('/telemetry', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const { tag, startTimestamp, endTimestamp } = req.query;
    if (typeof tag === 'string' && typeof startTimestamp === 'string' && typeof endTimestamp === 'string') {
        try {
            const data = yield db('telemetry')
                .select('*')
                .where('tag', '=', tag)
                .andWhere('timestamp', '>=', startTimestamp)
                .andWhere('timestamp', '<=', endTimestamp)
                .orderBy('timestamp', 'asc');
            console.log(data);
            res.json(data);
        }
        catch (error) {
            console.error('Error fetching telemetry data:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    else {
        res.status(400).json({ error: 'Invalid query parameters' });
    }
}));
app.listen(port, () => {
    console.log(`Telemetry service listening at http://localhost:${port}`);
});
