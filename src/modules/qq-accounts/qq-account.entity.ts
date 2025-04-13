import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class QQAccount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qqNumber: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, user => user.qqAccounts)
  user: User;

  @Column()
  userId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 