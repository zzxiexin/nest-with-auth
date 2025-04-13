import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { QQAccount } from '../qq-accounts/qq-account.entity';
import { Credential } from '../credentials/credential.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => QQAccount, qqAccount => qqAccount.user)
  qqAccounts: QQAccount[];

  @OneToMany(() => Credential, credential => credential.creator)
  credentials: Credential[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 