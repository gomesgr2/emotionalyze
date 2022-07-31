# Boilerplate-api-lanceiros

Api lanceiros em Node.Js utilizando a arquitetura IATE (https://github.com/afmeirelles/iate/tree/master/src).

# Tecnologias

- Linguagem Node.JS com Typescript
- ORM : Prisma Client (https://www.prisma.io/docs/concepts/overview/what-is-prisma)
- Autenticação na api utilizando Firebase authentication (https://firebase.google.com/docs/auth)
- Testes utilizando a biblioteca jest (https://jestjs.io/docs/getting-started)

 O sistema foi projetado utilizando o banco de dados PostgreSQL como base mas o Prisma Client oferece suporte a diversos bancos de dados (https://www.prisma.io/docs/reference/database-reference/supported-databases), basta modificar o arquivo schema.prisma e definir o tipo do banco.
 
 
 ## Como rodar a aplicação
 
Primeiramente, é necessário clonar o projeto :

```
git clone git@github.com:lanceiros/boilerplate-api-lanceiros.git
```

Em seguida, precisamos instalar as dependências :

```
npm install
```

crie o arquivo .env e defina as configurações do seu banco de dados (exemplo no arquivo .env.tpl)  :

```
DATABASE_URL="postgresql://dba:dba@localhost:5432/ccapi?schema=ccapi"
PORT="3000"
```
Para iniciar o banco de dados devemos rodar o comando :

```
npm run init-database
```
E por fim iniciamos o sistema :

```
npm run dev
```



