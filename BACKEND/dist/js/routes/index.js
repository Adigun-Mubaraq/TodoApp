"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get("/todos", controllers_1.getTodos);
router.post("/add-todo", controllers_1.addTodo);
router.put("/edit-todo/:id", controllers_1.updateTodo);
router.delete("/delete-todo/:id", controllers_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=index.js.map