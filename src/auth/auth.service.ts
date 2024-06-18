import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor{
    private userService: UsersService,
    private jwtService: JwtService,}
  login(data: LoginDto) {}
}
