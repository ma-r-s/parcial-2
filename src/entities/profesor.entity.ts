import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  cedula: number;

  @Column({ type: 'varchar', length: 500 })
  nombre: string;

  @Column({ type: 'varchar', length: 500 })
  grupoInvestigacion: string;

  @Column({ type: 'int' })
  extension: number;
}
