### API com Nestjs

[tutorial](https://www.youtube.com/live/UWKHcIa-Hjo)

```Javascript
Set-ExecutionPolicy Bypass -Scope Process //permissões da pasta

nest g module auth // gerar modulo auth

npm install -D prisma // instalar o prisma

npm install -D @prisma/client // instalar o @prisma/client

npm install -g @nestjs/cli // instalar o @nestjs/cli

npm run start:dev // rodar no modo dev

nest g controller auth/users // gerar controller

nest g service auth/users // criar um serviço

npx prisma init // iniciar o prisma

docker compose up // rodar o docker com mysql

npx prisma migrate dev // prepara a migração para db

docker compose exec db bash // entrar no docker

mysql -u root -p // entrar no mysql

use nest // entrar no db nest

show tables; // ver as tabelas

select * from User; // ver os dados de User

describre User; // ver a estrutura de User

exit // sair do mysql

exit // sair do docker

nest g module prisma // integrar o prisma com nest

npx prisma migrate dev // rodar as migrações

nest g service prisma // cria um serviço, que gerencia o acesso ao db

npm i @prisma/client // instalar o @prisma/client

npm i -D @prisma/client // instalar o @prisma/client, NÃO FIZ ISSO

//configurar os controllers: prisma, users, app.module
npm run start:dev // rodar o projeto

ctrl+alt+R // testar rota com rest api, ccriar primeiro usuário

npm i bcrypt // isntalar o bcrypt

npm i --save-dev @types/bcrypt // instalar o bcrypt, rodar novamente após ocultar o password

nest g controller auth/partner-users // gerar um controller partner

nest g controller auth // criar login

login.dto.ts // criar

nest g service auth // cria um serviço de autenticação

npm install @nestjs/jwt
```
