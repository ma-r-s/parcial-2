import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { Profesor } from './profesor.entity';
@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  @Post()
  create(@Body() profesor: Profesor) {
    return this.profesorService.crearProfesor(profesor);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.profesorService.findProfesorById(+id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.profesorService.eliminarProfesor(+id);
  }

  @Delete('cedula/:cedula')
  deleteByCedula(@Param('cedula') cedula: string) {
    return this.profesorService.eliminarProfesorPorCedula(+cedula);
  }
}
