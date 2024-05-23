import { Controller, Get } from '@nestjs/common';
import { PropuestaService } from './propuesta.service';

@Controller('propuestas')
export class PropuestaController {
  constructor(private readonly propuestaService: PropuestaService) {}

  @Get()
  async findAll() {
    return this.propuestaService.findAllPropuesta();
  }
}
