
import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { 
    registerUser, 
    loginUser,
    refreshAccessToken,
    getCurrentUser,
    logoutUser,
    changeCurrentPassword 
} from "../controllers/user.controller.js";
import { 
    registerValidator, 
    loginValidator,
    validate
} from "../utils/Validation.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerValidator, 
    validate,          
    registerUser       
);

router.route("/login").post(loginValidator, validate,loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// Protected routes (Login required)
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/logout").delete(verifyJWT, logoutUser)
router.route("/change-password").patch(verifyJWT, changeCurrentPassword);

export default router
