
import { Router } from "express";
import { 
    createPackage,
    getAllPackages,
    getPackageById,
    updatePackage,
    deletePackage 
} from "../controllers/package.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js"; 
import { 
    packageValidator,
    validate,
    editPackageValidator 
} from "../utils/Validation.js"; 

const router = Router();

router.route("/add").post(
    verifyJWT,
    verifyAdmin,
    packageValidator, 
    validate,
    createPackage
);

router.route("/edit/:id").patch(
    verifyJWT,
    verifyAdmin,
    editPackageValidator,
    validate,
    updatePackage
);

router.route("/all").get(getAllPackages);

router.route("/:id").get(getPackageById);

router.route("/delete/:id").delete(
    verifyJWT,
    verifyAdmin,
    deletePackage
);

export default router;