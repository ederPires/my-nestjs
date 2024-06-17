import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() //torna o prisma global para todos
@Module({
  providers: [PrismaService],
  exports: [PrismaService], //libera permissões de dependências
})
export class PrismaModule {}
