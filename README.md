# EduTrack API

REST + GraphQL API para gestão de estudantes, cursos e inscrições.

## Demo local

- Swagger: `http://localhost:3000/docs`
- GraphQL Playground: `http://localhost:3000/graphql`

## Stack

NestJS • Prisma • PostgreSQL • GraphQL (Apollo) • Swagger • Jest

## Como arrancar

```bash
# 1) Dependências
npm install

# 2) Subir Postgres via Docker
docker compose up -d db

# 3) Variáveis de ambiente
cp .env.example .env

# 4) Prisma
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed

# 5) Iniciar API
npm run start:dev
```

## Endpoints REST (exemplos)

- `POST /students` { email, name }
- `GET /students`
- `GET /students/:id`
- `PATCH /students/:id`
- `DELETE /students/:id`

- `POST /courses` { code, title, description? }
- `GET /courses`

- `POST /enrollments` { studentId, courseId }
- `GET /enrollments`

## GraphQL (exemplos)

```graphql
query {
  students { id email name }
  courses { id code title }
  enrollments { id student { name } course { title } }
}

mutation {
  createStudent(email: "maria@example.com", name: "Maria") { id }
  createCourse(code: "AI101", title: "IA Introd.") { id }
  enroll(studentId: "<id>", courseId: "<id>") { id }
}
```

## Qualidade

- Swagger auto (`/docs`)
- Validations (class-validator)
- CI GitHub Actions
- ESLint + Prettier
- Strict TS

## Estrutura

```
src/
  students/ (REST + GraphQL)
  courses/  (REST + GraphQL)
  enrollments/ (REST + GraphQL)
prisma/
  schema.prisma
  seed.ts
```

## Licença

MIT
