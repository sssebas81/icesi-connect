import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../../posts/entities/post.entity/post.entity';

@Entity()
export class Faculty {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Post, post => post.faculty)
  posts: Post[];
}
