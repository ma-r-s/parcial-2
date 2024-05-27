import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from './estudiante.entity';
@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  create(@Body() estudiante: Estudiante) {
    return this.estudianteService.crearEstudiante(estudiante);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.estudianteService.findEstudianteById(+id);
  }
}
