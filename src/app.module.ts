import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profesor } from './profesor/profesor.entity';
import { Propuesta } from './propuesta/propuesta.entity';
import { Proyecto } from './proyecto/proyecto.entity';
import { Estudiante } from './estudiante/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [Estudiante, Profesor, Propuesta, Proyecto],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true
  })
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
