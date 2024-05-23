import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesorService } from './profesor/profesor.service';
import { ProyectoService } from './proyecto/proyecto.service';
import { PropuestaService } from './propuesta/propuesta.service';
import { EstudianteService } from './estudiante/estudiante.service';

@Module({
  imports: [EstudianteModule],
  controllers: [AppController],
  providers: [AppService, ProfesorService, ProyectoService, PropuestaService, EstudianteService],
})
export class AppModule {}
