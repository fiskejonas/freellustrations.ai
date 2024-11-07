import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";
import { Like } from "./Like";
import { Tag } from "./Tag";
import { View } from "./View";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column()
    image_url!: string;

    @Column()
    title!: string;

    @Column({ type: "text", nullable: true })
    description: string = "";

    @Column()
    created_at!: number;

    @Column({ nullable: true })
    updated_at: number | null = null;

    @Column({ nullable: true })
    deleted_at: number | null = null;

    @ManyToOne(() => User, (user) => user.posts, { onDelete: "CASCADE" })
    user!: User;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[] = [];

    @OneToMany(() => Like, (like) => like.post)
    likes: Like[] = [];

    @ManyToMany(() => Tag, (tag) => tag.posts)
    @JoinTable()
    tags: Tag[] = [];

    @OneToMany(() => View, (view) => view.post)
    views: View[] = [];
}
