import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';
import { Propuesta } from './propuesta.entity';
@Controller('propuesta')
export class PropuestaController {
  constructor(private readonly propuestaService: PropuestaService) {}

  @Post()
  create(@Body() propuesta: Propuesta) {
    return this.propuestaService.crearPropuesta(propuesta);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.propuestaService.findPropuestaById(+id);
  }

  @Get()
  findAll() {
    return this.propuestaService.findAllPropuesta();
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.propuestaService.deletePropuesta(+id);
  }
}
