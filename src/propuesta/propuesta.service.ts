import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Propuesta } from './propuesta.entity';

@Injectable()
export class PropuestaService {
  constructor(
    @InjectRepository(Propuesta)
    private propuestaRepository: Repository<Propuesta>,
  ) {}

  async crearPropuesta(propuesta: Propuesta) {
    if (!propuesta.titulo.trim()) {
      throw new Error('El título no puede ser vacío');
    }
    return this.propuestaRepository.save(propuesta);
  }

  async findPropuestaById(id: number) {
    return this.propuestaRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findAllPropuesta() {
    return this.propuestaRepository.find();
  }

  async deletePropuesta(id: number) {
    const propuesta = await this.propuestaRepository.findOne({
      where: {
        id: id,
      },
    });
    if (propuesta.proyecto) {
      throw new Error(
        'No se puede eliminar una propuesta que tiene un proyecto asociado',
      );
    }
    return this.propuestaRepository.delete(id);
  }
}
