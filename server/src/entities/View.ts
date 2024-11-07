import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class View {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column()
    post_id!: number;

    @Column()
    viewed_at!: number;

    @ManyToOne(() => User, (user) => user.views, { onDelete: "CASCADE" })
    @Index()
    user!: User;

    @ManyToOne(() => Post, (post) => post.views, { onDelete: "CASCADE" })
    @Index()
    post!: Post;
}
