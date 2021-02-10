import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";

  import User from './User';
  
  @Entity("users", { database: "sabm" })
  class Phone {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column("varchar")
    numero: string;
  
    @Column("int")
    id_usuario: number;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: "id_usuario" })
    user: User;
  }
  
  export default Phone;