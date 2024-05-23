import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './proyecto.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  async crearProyecto(proyecto: Proyecto) {
    if (proyecto.fechaInicio >= proyecto.fechaFin) {
      throw new Error(
        'La fecha de fin debe ser posterior a la fecha de inicio',
      );
    }
    return this.proyectoRepository.save(proyecto);
  }
}
