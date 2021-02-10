import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
  
import User from "@modules/users/infra/typeorm/entities/User";
  
  @Entity("files", { database: "sabm" })
  class File {
    @PrimaryGeneratedColumn("increment")
    codigoArquivo: number;
  
    @Column("int")
    codigoUsuario: number;
  
    @Column("varchar")
    nome: string;

    @Column("varchar")
    arquivo: string;

    @Column("varchar")
    url: string;

    @Column("longtext")
    cripto: string;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: "codigoUsuario" })
    user: User;
}
  
  export default File;
  