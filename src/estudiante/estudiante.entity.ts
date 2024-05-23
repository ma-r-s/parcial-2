import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Proyecto } from '../proyecto/proyecto.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  nombre: string;

  @Column({ type: 'varchar', length: 500 })
  codigo: string;

  @Column({ type: 'int' })
  creditosAprobados: number;

  @OneToOne(() => Proyecto)
  @JoinColumn()
  proyecto: Proyecto;
}
