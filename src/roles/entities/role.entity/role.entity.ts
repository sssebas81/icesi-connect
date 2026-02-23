import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../../../users/entities/user.entity/user.entity';
import { Admin } from '../../../admin/entities/admin.entity/admin.entity';
import { Monitor } from '../../../monitors/entities/monitor.entity/monitor.entity';

@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => User, user => user.role)
  users: User[];

  @OneToMany(() => Admin, admin => admin.role)
  admins: Admin[];

  @OneToMany(() => Monitor, monitor => monitor.role)
  monitors: Monitor[];
}