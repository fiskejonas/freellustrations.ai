import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id!: number;

    @Column({ type: 'varchar', nullable: true })
    image!: string;

    @Column({ type: 'int', default: 0 })
    comments!: number;

    @Column({ type: 'int', default: 0 })
    likes!: number;

    @Column({ type: 'int', default: 0 })
    views!: number;

    @ManyToOne(() => User, user => user.posts)
    user!: User;
}
