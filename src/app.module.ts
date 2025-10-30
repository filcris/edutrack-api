import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import type { Request } from 'express';
import { PrismaService } from './common/prisma.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // 🔧 Variáveis de ambiente (.env)
    ConfigModule.forRoot({ isGlobal: true }),

    // 🚀 Configuração do GraphQL (com Playground clássico)
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'dist/schema.gql'),
      sortSchema: true,
      introspection: true,      // permite que o Playground veja o schema
      playground: true,         // ativa o Playground clássico (azul)
      csrfPrevention: false,    // evita erro de CSRF
      context: ({ req }: { req: Request }) => ({ req }), // passa o request (JWT)
    }),

    // 📚 Módulos da aplicação
    StudentsModule,
    CoursesModule,
    EnrollmentsModule,
    UsersModule,
    AuthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}


