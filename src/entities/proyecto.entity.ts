import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { Propuesta } from './propuesta.entity';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fechaInicio: Date;

  @Column({ type: 'date' })
  fechaFin: Date;

  @Column({ type: 'varchar', length: 500 })
  url: string;

  @OneToOne(() => Estudiante)
  @JoinColumn()
  estudiante: Estudiante;

  @OneToOne(() => Propuesta)
  @JoinColumn()
  propuesta: Propuesta;
}
