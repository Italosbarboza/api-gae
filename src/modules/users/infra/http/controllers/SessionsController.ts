import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";
import crypto from "simple-crypto-js";

import AuthenticateUserSerivce from "@modules/users/services/AuthenticateUserService";

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserSerivce);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token });
  }
}
