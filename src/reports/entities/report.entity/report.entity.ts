import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../../users/entities/user.entity/user.entity';

@Entity()
export class Report {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reason: string;

  @ManyToOne(() => User)
  reporter: User;

  @ManyToOne(() => User)
  reported: User;
}
