

import { Router } from "express";
import { 
    addMenuItem, 
    getAllMenuItems, 
    editMenuItem, 
    deleteMenuItem 
} from "../controllers/menuItem.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js"; 
import { upload } from "../middlewares/multer.middleware.js";
import { 
    menuItemValidator,
    validate,
    editMenuItemValidator 
} from "../utils/Validation.js"; 

const router = Router();

router.route("/add").post(
    verifyJWT,
    verifyAdmin,
    upload.single("image"), 
    menuItemValidator, 
    validate,
    addMenuItem
);

router.route("/edit/:itemId").patch(
    verifyJWT,
    verifyAdmin,
    upload.single("image"),
    editMenuItemValidator,
    validate,
    editMenuItem
);

router.route("/all").get(getAllMenuItems);

router.route("/delete/:itemId").delete(
    verifyJWT,
    verifyAdmin,
    deleteMenuItem
);

export default router;