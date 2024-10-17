import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({ default: [] })
    unlockedBlogs: ObjectId[]; // Array of unlocked blog IDs
}