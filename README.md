# 🎓 EduTrack API

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Made with NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)](https://nestjs.com/)
[![GraphQL](https://img.shields.io/badge/API-GraphQL-ff69b4?logo=graphql)](https://graphql.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-blue?logo=prisma)](https://www.prisma.io/)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)]()

---

### 🧠 Sobre o Projeto
O **EduTrack API** é uma aplicação de gestão académica desenvolvida com **NestJS**, **GraphQL** e **Prisma ORM**.  
Permite gerir **alunos**, **cursos** e **inscrições**, com autenticação **JWT**, papéis de utilizador (**admin** / **user**) e base de dados **SQLite** para desenvolvimento local.

---

### ⚙️ Stack Tecnológica

| Tecnologia | Função |
|-------------|--------|
| **NestJS** | Estrutura modular backend |
| **GraphQL (Apollo)** | API flexível e tipada |
| **Prisma ORM** | Gestão e migração da base de dados |
| **SQLite** | Base de dados local |
| **JWT** | Autenticação segura |
| **Swagger** | Documentação automática da API REST |

---

### 🚀 Instalação e Execução

```bash
# 1️⃣ Instalar dependências
npm install

# 2️⃣ Gerar cliente Prisma
npx prisma generate

# 3️⃣ Criar e aplicar migrações (SQLite)
npx prisma migrate dev --name init

# 4️⃣ Popular com dados iniciais
npm run prisma:seed

# 5️⃣ Arrancar o servidor
npm run start:dev
🔐 Credenciais padrão
Role	Email	Password
Admin	admin@example.com	1234
User	user@example.com	1234

🧭 Endpoints principais
Tipo	Descrição	URL
Swagger UI	Documentação REST	http://localhost:3000/docs
GraphQL Playground	Queries e Mutations	http://localhost:3000/graphql

🧱 Estrutura do Projeto
bash
Copiar código
src/
 ┣ auth/           # JWT, Guards, Roles e Login
 ┣ users/          # Gestão de utilizadores
 ┣ students/       # Gestão de alunos
 ┣ courses/        # Gestão de cursos
 ┣ enrollments/    # Inscrições
 ┣ common/         # PrismaService e helpers
 ┗ app.module.ts   # Configuração principal
🧩 Exemplo de Query (GraphQL Playground)
graphql
Copiar código
mutation {
  login(email: "admin@example.com", password: "1234") {
    access_token
  }
}
Depois usa o token JWT nos headers:

json
Copiar código
{
  "authorization": "Bearer SEU_TOKEN_AQUI"
}
E executa:

graphql
Copiar código
query {
  me {
    email
    role
  }
}
💻 Autor
Cristina
🔗 GitHub
📧 admin@example.com

Projeto desenvolvido no âmbito do EduTrack v3, com NestJS, Prisma, GraphQL e JWT, para gestão académica moderna e escalável.

yaml
Copiar código

---

### 💡 O que este README já tem:
✅ Badges (NestJS, GraphQL, Prisma, TS, Build Passing)  
✅ Instruções passo a passo (instalação, seed, run)  
✅ Credenciais padrão  
✅ Endpoints Swagger + GraphQL  
✅ Estrutura da API  
✅ Exemplo de uso (login e query)  
✅ Secção de autor  

---

👉 Agora é só fazer:
```powershell
git add README.md
git commit -m "docs: add professional README with badges"
git push
