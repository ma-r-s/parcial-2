import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { Propuesta } from '../propuesta/propuesta.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private profesorRepository: Repository<Profesor>,
    @InjectRepository(Propuesta)
    private propuestaRepository: Repository<Propuesta>,
  ) {}

  async crearProfesor(profesor: Profesor) {
    const gruposValidos = ['TICSW', 'IMAGINE', 'COMIT'];
    if (!gruposValidos.includes(profesor.grupoInvestigacion)) {
      throw new Error('Grupo de investigación inválido');
    }
    return this.profesorRepository.save(profesor);
  }

  async findProfesorById(id: number) {
    return this.profesorRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async eliminarProfesor(id: number) {
    const profesor = await this.profesorRepository.findOne({
      where: {
        id: id,
      },
    });
    if (profesor.propuesta && profesor.propuesta.proyecto) {
      throw new Error('No se puede eliminar');
    }
    return this.profesorRepository.delete(id);
  }

  async eliminarProfesorPorCedula(cedula: number) {
    const profesor = await this.profesorRepository.findOne({
      where: { cedula },
      relations: ['propuesta'],
    });
    if (profesor.propuesta && profesor.propuesta.proyecto) {
      throw new Error('No se puede eliminar');
    }
    return this.profesorRepository.delete({ cedula });
  }
}
