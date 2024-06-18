import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
//import { PrismaModule } from 'src/prisma/prisma.module';
import { PartnesUsersController } from './partner-users/partner-users.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  //imports: [PrismaModule], // importar o module global
  imports: [
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '10000s' },
    })
  ],
  controllers: [UsersController, PartnesUsersController, AuthController],
  providers: [UsersService, AuthService]
})
export class AuthModule {}
