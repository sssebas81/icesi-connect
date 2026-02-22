import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../../users/entities/user.entity/user.entity';

@Entity()
export class Monitor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  availability: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
