import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../../users/entities/user.entity/user.entity';
import { Post } from '../../../posts/entities/post.entity/post.entity';

@Entity()
export class Answer {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.answers)
  user: User;

  @ManyToOne(() => Post, post => post.answers)
  post: Post;
}
