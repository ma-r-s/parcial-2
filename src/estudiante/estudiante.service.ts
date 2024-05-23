import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}

  async crearEstudiante(estudiante: Estudiante) {
    if (estudiante.codigo.length !== 10) {
      throw new Error('El código de estudiante debe tener 10 caracteres');
    }
    return this.estudianteRepository.save(estudiante);
  }

  async findEstudianteById(id: number) {
    return this.estudianteRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
