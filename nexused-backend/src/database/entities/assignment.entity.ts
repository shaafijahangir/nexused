import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CourseSection } from './course-section.entity';

export enum AssignmentType {
  ASSIGNMENT = 'assignment',
  QUIZ = 'quiz',
  EXAM = 'exam',
  DISCUSSION = 'discussion',
  PROJECT = 'project',
}

@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sectionId: string;

  @ManyToOne(() => CourseSection)
  @JoinColumn({ name: 'sectionId' })
  section: CourseSection;

  @Column({ nullable: true })
  moduleId: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: AssignmentType,
    default: AssignmentType.ASSIGNMENT,
  })
  type: AssignmentType;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pointsPossible: number;

  @Column({ type: 'timestamp', nullable: true })
  dueAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  unlockAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  lockAt: Date;

  @Column({ type: 'jsonb', nullable: true })
  rubric: Record<string, any>;

  @Column({ type: 'jsonb', nullable: true })
  settings: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
