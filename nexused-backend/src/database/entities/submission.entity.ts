import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Assignment } from './assignment.entity';
import { User } from './user.entity';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  assignmentId: string;

  @ManyToOne(() => Assignment)
  @JoinColumn({ name: 'assignmentId' })
  assignment: Assignment;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'int', default: 1 })
  attempt: number;

  @Column({ type: 'jsonb', nullable: true })
  content: Record<string, any>;

  @Column({ type: 'timestamp', nullable: true })
  submittedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  score: number;

  @Column({ type: 'timestamp', nullable: true })
  gradedAt: Date;

  @Column({ nullable: true })
  gradedBy: string;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
