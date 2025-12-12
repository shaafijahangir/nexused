// Entity exports
export { Tenant, SubscriptionPlan, BillingStatus } from './tenant.entity';
export { User, UserRole, UserStatus } from './user.entity';
export { AcademicTerm } from './academic-term.entity';
export { Course } from './course.entity';
export { CourseSection, SectionStatus } from './course-section.entity';
export { Enrollment, EnrollmentRole, EnrollmentStatus } from './enrollment.entity';
export { Assignment, AssignmentType } from './assignment.entity';
export { Submission } from './submission.entity';

// Import entities for TypeORM
import { Tenant } from './tenant.entity';
import { User } from './user.entity';
import { AcademicTerm } from './academic-term.entity';
import { Course } from './course.entity';
import { CourseSection } from './course-section.entity';
import { Enrollment } from './enrollment.entity';
import { Assignment } from './assignment.entity';
import { Submission } from './submission.entity';

// Array of entity classes for TypeORM
export const entities = [
  Tenant,
  User,
  AcademicTerm,
  Course,
  CourseSection,
  Enrollment,
  Assignment,
  Submission,
];
