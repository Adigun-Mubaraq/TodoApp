"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const { USER, PASSWORD, DB_NAME } = process.env;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(routes_1.default);
const url = `mongodb+srv://${USER}:${PASSWORD}@cluster0.0mjoi.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default
    .connect(url, options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
//# sourceMappingURL=app.js.map