import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('credentials')
export class Credential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  website: string;

  @ManyToOne(() => User, user => user.credentials)
  creator: User;

  @Column()
  creatorId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 