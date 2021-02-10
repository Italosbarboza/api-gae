import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";

import User from "@modules/users/infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";
import IHashProvider from "../providers/HashProvider/models/IHashProvider";

interface IRequest {
  nome: string; 
  identificacao: string; 
  email: string; 
  senha: string; 
  tipo: number;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ nome, identificacao, email, senha, tipo }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError("E-mail already exists");
    }

    const passwordHash = await this.hashProvider.generateHash(senha);
    const user = await this.usersRepository.create({
      nome, 
      identificacao, 
      email, 
      senha: passwordHash, 
      tipo,
    });

    return user;
  }
}

export default CreateUserService;
