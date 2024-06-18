import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserPresenter } from '../users/users.presenter';

@Controller('partnes/users')
export class PartnesUsersController {
  constructor(private usersService: UsersService){
  }

  // criar usuário partnes
  @Post()
  async create(@Body() data: CreateUserDto){ //Body converte texto em js
    const user = await this.usersService.createPartnerUser(data);
    return new UserPresenter(user); //para ocultar password
  }
}
