import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profesor } from './profesor.entity';
import { Proyecto } from './proyecto.entity';

@Entity()
export class Propuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 500 })
  titulo: string;

  @Column({ type: 'varchar', length: 500 })
  descripcion: string;

  @Column({ type: 'varchar', length: 500 })
  palabraClave: string;

  @OneToOne(() => Proyecto)
  @JoinColumn()
  proyecto: Proyecto;

  @ManyToOne(() => Profesor)
  @JoinColumn()
  profesor: Profesor;
}
