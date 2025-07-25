import express from "express";
import * as ContributorController from "../controllers/contributor.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import {
  handleUploadError,
  parseData,
  processContributorUploads,
  uploadContributorFiles,
} from "../helpers/cloudinary.helpers.js";

const router = express.Router();

router.use(authMiddleware);
router.use(roleMiddleware(["superAdmin", "editor"]));

router.get("/all", ContributorController.getAll);
router.get("/:id", ContributorController.getById);
router.delete("/delete/:id", ContributorController.remove);

router.post(
  "/new",
  uploadContributorFiles,
  handleUploadError,
  processContributorUploads,
  parseData,
  ContributorController.create
);

router.patch(
  "/update/:id",
  uploadContributorFiles,
  handleUploadError,
  processContributorUploads,
  parseData,
  ContributorController.update
);

export default router;
