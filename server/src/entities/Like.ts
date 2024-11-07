import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Like {
    @PrimaryColumn()
    user_id!: number;

    @PrimaryColumn()
    post_id!: number;

    @Column()
    created_at!: number;

    @ManyToOne(() => User, (user) => user.likes, { onDelete: "CASCADE" })
    user!: User;

    @ManyToOne(() => Post, (post) => post.likes, { onDelete: "CASCADE" })
    post!: Post;
}
