import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Follower {
    @PrimaryColumn()
    follower_id!: number;

    @PrimaryColumn()
    followee_id!: number;

    @Column()
    created_at!: number;

    @ManyToOne(() => User, (user) => user.followers, { onDelete: "CASCADE" })
    follower!: User;

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    followee!: User;
}
