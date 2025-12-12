import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { AcademicTerm } from './academic-term.entity';
import { User } from './user.entity';

export enum SectionStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('course_sections')
export class CourseSection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  courseId: string;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column()
  termId: string;

  @ManyToOne(() => AcademicTerm)
  @JoinColumn({ name: 'termId' })
  term: AcademicTerm;

  @Column()
  instructorId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'instructorId' })
  instructor: User;

  @Column({ type: 'jsonb', nullable: true })
  schedule: Record<string, any>;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'int', nullable: true })
  capacity: number;

  @Column({
    type: 'enum',
    enum: SectionStatus,
    default: SectionStatus.DRAFT,
  })
  status: SectionStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
