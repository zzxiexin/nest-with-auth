import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QQAccount } from './qq-account.entity';
import { CreateQQAccountDto } from './dto/create-qq-account.dto';
import { UpdateQQAccountDto } from './dto/update-qq-account.dto';
import { User } from '../users/user.entity';

@Injectable()
export class QQAccountsService {
  constructor(
    @InjectRepository(QQAccount)
    private qqAccountRepository: Repository<QQAccount>,
  ) {}

  async create(createQQAccountDto: CreateQQAccountDto, user: User): Promise<QQAccount> {
    const qqAccount = this.qqAccountRepository.create({
      ...createQQAccountDto,
      user,
      userId: user.id,
    });

    return this.qqAccountRepository.save(qqAccount);
  }

  async findAll(userId: number): Promise<QQAccount[]> {
    return this.qqAccountRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number, userId: number): Promise<QQAccount> {
    const qqAccount = await this.qqAccountRepository.findOne({
      where: { id },
    });

    if (!qqAccount) {
      throw new NotFoundException('QQ账号不存在');
    }

    if (qqAccount.userId !== userId) {
      throw new ForbiddenException('您只能访问自己的QQ账号');
    }

    return qqAccount;
  }

  async update(id: number, userId: number, updateQQAccountDto: UpdateQQAccountDto): Promise<QQAccount> {
    const qqAccount = await this.findOne(id, userId);
    
    // 更新账号信息
    Object.assign(qqAccount, updateQQAccountDto);
    
    return this.qqAccountRepository.save(qqAccount);
  }

  async remove(id: number, userId: number): Promise<void> {
    const qqAccount = await this.findOne(id, userId);
    await this.qqAccountRepository.remove(qqAccount);
  }
} 