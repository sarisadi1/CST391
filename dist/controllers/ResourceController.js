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
const ResourceModel_1 = __importDefault(require("../models/ResourceModel"));
const ResourceController = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resources = yield ResourceModel_1.default.getAll();
                res.json(resources);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = yield ResourceModel_1.default.getById(Number(req.params.id));
                if (!resource)
                    return res.status(404).json({ error: 'Resource not found' });
                res.json(resource);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, type, content, userId } = req.body;
                const result = yield ResourceModel_1.default.create(title, type, content, userId);
                res.status(201).json({ id: result.insertId, title, type, content });
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, type, content } = req.body;
                const result = yield ResourceModel_1.default.update(Number(req.params.id), title, type, content);
                if (result.affectedRows === 0)
                    return res.status(404).json({ error: 'Resource not found' });
                res.json({ id: req.params.id, title, type, content });
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ResourceModel_1.default.delete(Number(req.params.id));
                if (result.affectedRows === 0)
                    return res.status(404).json({ error: 'Resource not found' });
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
};
exports.default = ResourceController;
