import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column()
    post_id!: number;

    @Column("text")
    content!: string;

    @Column()
    created_at!: number;

    @Column({ nullable: true })
    updated_at: number | null = null;

    @Column({ nullable: true })
    deleted_at: number | null = null;

    @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
    user!: User;

    @ManyToOne(() => Post, (post) => post.comments, { onDelete: "CASCADE" })
    post!: Post;
}
