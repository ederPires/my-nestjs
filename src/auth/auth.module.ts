import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
//import { PrismaModule } from 'src/prisma/prisma.module';
import { PartnesUsersController } from './partner-users/partner-users.controller';

@Module({
  //imports: [PrismaModule], // importar o module global
  imports: [],
  controllers: [UsersController, PartnesUsersController],
  providers: [UsersService]
})
export class AuthModule {}
