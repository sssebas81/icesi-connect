import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from '../../../posts/entities/post.entity/post.entity';
import { Answer } from '../../../answers/entities/answer.entity/answer.entity';
import { Role } from '../../../roles/entities/role.entity/role.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  institutional_email: string;

  @Column()
  password: string;

  @Column()
  career: string;

  @Column()
  semester: number;

  @Column()
  language: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ default: 1 })
  level: number;

  @Column({ default: 0 })
  thanks: number;

  @ManyToOne(() => Role, role => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @OneToMany(() => Answer, answer => answer.user)
  answers: Answer[];
}