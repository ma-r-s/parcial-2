import { Controller, Post, Body } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './proyecto.entity';
@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly proyectoService: ProyectoService) {}

  @Post()
  create(@Body() proyecto: Proyecto) {
    return this.proyectoService.crearProyecto(proyecto);
  }
}
