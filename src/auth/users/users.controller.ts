import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService){

  }

  // criar usuário
  @Get()
  create(data){
    return this.usersService.create(data);
  }
}
