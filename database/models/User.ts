import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({
    nullable: true
  })
  projectCount: number;
}
