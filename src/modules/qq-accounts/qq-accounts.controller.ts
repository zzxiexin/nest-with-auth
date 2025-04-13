import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request, ParseIntPipe, HttpCode } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { QQAccountsService } from './qq-accounts.service';
import { CreateQQAccountDto } from './dto/create-qq-account.dto';
import { UpdateQQAccountDto } from './dto/update-qq-account.dto';

@Controller('qq-accounts')
@UseGuards(JwtAuthGuard)
export class QQAccountsController {
  constructor(private readonly qqAccountsService: QQAccountsService) {}

  @Post()
  create(@Body() createQQAccountDto: CreateQQAccountDto, @Request() req) {
    return this.qqAccountsService.create(createQQAccountDto, req.user);
  }

  @Get()
  findAll(@Request() req) {
    return this.qqAccountsService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.qqAccountsService.findOne(id, req.user.id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateQQAccountDto: UpdateQQAccountDto,
    @Request() req,
  ) {
    return this.qqAccountsService.update(id, req.user.id, updateQQAccountDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    await this.qqAccountsService.remove(id, req.user.id);
  }
} 