import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";

import Phone from './Phone';

@Entity("users", { database: "sabm" })
class User {
  @PrimaryGeneratedColumn("increment")
  codigoUsuario: string;

  @Column("varchar")
  nome: string;

  @Column("varchar")
  identificacao: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  @Exclude()
  senha: string;

  @Column("int")
  tipo: number;

  @OneToMany(() => Phone, phone => phone.user)
  phone: Phone[];
}

export default User;
