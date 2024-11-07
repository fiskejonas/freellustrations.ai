import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Like } from "./Like";
import { Follower } from "./Follower";
import { PasswordReset } from "./PasswordReset";
import { View } from "./View";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    username!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password_hash!: string;

    @Column({ nullable: true })
    bio!: string;

    @Column({ default: false })
    is_blocked!: boolean;

    @Column()
    created_at!: number;

    @Column({ nullable: true })
    updated_at: number | null = null;

    @Column({ nullable: true })
    deleted_at: number | null = null;

    @Column({ default: false })
    is_admin!: boolean;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[] = [];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[] = [];

    @OneToMany(() => Like, (like) => like.user)
    likes: Like[] = [];

    @OneToMany(() => Follower, (follower) => follower.follower)
    followers: Follower[] = [];

    @OneToMany(() => PasswordReset, (passwordReset) => passwordReset.user)
    password_resets: PasswordReset[] = [];

    @OneToMany(() => View, (view) => view.user)
    views: View[] = [];
}
