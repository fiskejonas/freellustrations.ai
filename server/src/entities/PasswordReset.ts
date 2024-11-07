import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class PasswordReset {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    user_id!: number;

    @Column({ unique: true })
    token!: string;

    @Column()
    expires_at!: number;

    @Column()
    created_at!: number;

    @ManyToOne(() => User, (user) => user.password_resets, { onDelete: "CASCADE" })
    user!: User;
}
