import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../../users/entities/user.entity/user.entity';
import { Answer } from '../../../answers/entities/answer.entity/answer.entity';
import { Category } from '../../../categories/entities/category.entity/category.entity';
import { Faculty } from '../../../faculty/entities/faculty.entity/faculty.entity';

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: false })
  solved: boolean;

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @ManyToOne(() => Category, category => category.posts)
  category: Category;

  @ManyToOne(() => Faculty, faculty => faculty.posts)
  faculty: Faculty;

  @OneToMany(() => Answer, answer => answer.post)
  answers: Answer[];
}