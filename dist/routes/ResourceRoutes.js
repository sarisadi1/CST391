"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ResourceController_1 = __importDefault(require("../controllers/ResourceController"));
const router = express_1.default.Router();
// Use middleware functions to wrap controller methods
router.get('/', (req, res, next) => {
    ResourceController_1.default.getAll(req, res).catch(next);
});
router.get('/:id', (req, res, next) => {
    ResourceController_1.default.getById(req, res).catch(next);
});
router.post('/', (req, res, next) => {
    ResourceController_1.default.create(req, res).catch(next);
});
router.put('/:id', (req, res, next) => {
    ResourceController_1.default.update(req, res).catch(next);
});
router.delete('/:id', (req, res, next) => {
    ResourceController_1.default.delete(req, res).catch(next);
});
exports.default = router;
