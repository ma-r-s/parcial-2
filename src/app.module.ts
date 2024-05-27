import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfesorService } from './profesor/profesor.service';
import { Profesor } from './profesor/profesor.entity';
import { Propuesta } from './propuesta/propuesta.entity';
import { Proyecto } from './proyecto/proyecto.entity';
import { Estudiante } from './estudiante/estudiante.entity';
import { ProfesorController } from './profesor/profesor.controller';
import { EstudianteController } from './estudiante/estudiante.controller';
import { ProyectoController } from './proyecto/proyecto.controller';
import { EstudianteService } from './estudiante/estudiante.service';
import { PropuestaService } from './propuesta/propuesta.service';
import { ProyectoService } from './proyecto/proyecto.service';

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
    AppService
  ],
})
export class AppModule {}
