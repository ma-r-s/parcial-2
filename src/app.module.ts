import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfesorService } from './profesor/profesor.service';
import { ProyectoService } from './proyecto/proyecto.service';
import { PropuestaService } from './propuesta/propuesta.service';
import { EstudianteService } from './estudiante/estudiante.service';
import { Profesor } from './profesor/profesor.entity';
import { Propuesta } from './propuesta/propuesta.entity';
import { Proyecto } from './proyecto/proyecto.entity';
import { Estudiante } from './estudiante/estudiante.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profesor, Propuesta, Proyecto, Estudiante]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ProfesorService,
    ProyectoService,
    PropuestaService,
    EstudianteService,
  ],
})
export class AppModule {}
