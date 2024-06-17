import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './users.presenter';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService){

  }

  // criar usuário
  @Post()
  async create(@Body() data: CreateUserDto){ //Body converte texto em js
    const user = await this.usersService.create(data);
    return new UserPresenter(user); //para ocultar password
  }
}
