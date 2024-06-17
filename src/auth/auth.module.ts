import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
//import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  //imports: [PrismaModule], // importar o module global
  controllers: [UsersController],
  providers: [UsersService]
})
export class AuthModule {}
