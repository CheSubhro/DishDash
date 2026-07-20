
import { Router } from "express";
import { 
    addCategory, 
    editCategory,
    getAllCategories,
    deleteCategory 
} from "../controllers/category.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js"; 
import { upload } from "../middlewares/multer.middleware.js";
import { categoryValidator, validate } from "../utils/Validation.js";

const router = Router();

router.route("/add").post(
    verifyJWT,
    verifyAdmin,
    upload.none(), 
    categoryValidator,
    validate,
    addCategory
);
router.route("/edit/:categoryId").patch(
    verifyJWT,
    verifyAdmin,
    upload.none(),
    validate,
    editCategory
);
router.route("/all").get(getAllCategories);
router.route("/delete/:categoryId").delete(
    verifyJWT,
    verifyAdmin,
    deleteCategory
);

export default router;