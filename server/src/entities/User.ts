import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  role!: string;

  @Column({ type: 'varchar', unique: true })
  mail!: string;

  @Column({ type: 'boolean', default: false })
  isBlocked!: boolean;

  @Column({ type: 'varchar' })
  password!: string;

  @OneToMany(() => Post, post => post.user)
  posts!: Post[];
}
