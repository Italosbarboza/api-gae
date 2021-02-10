import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import ProfileController from "../controllers/ProfileController";

import authMiddleware from "../middlewares/auth";

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(authMiddleware);

profileRouter.get("/", profileController.show);
profileRouter.get("/adm/:user_id", profileController.showAdm);

profileRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      identificacao: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string(),
      tipo: Joi.string()
    },
  }),
  profileController.update,
);

profileRouter.put(
  "/adm/:user_id",
  
  profileController.updateAdm,
);

profileRouter.get("/all", profileController.index);

profileRouter.delete("/:id_delete", profileController.delete);

export default profileRouter;
