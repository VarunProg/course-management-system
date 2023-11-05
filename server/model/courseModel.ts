import mongoose, { Document, Schema } from 'mongoose';

export interface Course {
  _id: string;
  name: string;
  members: string[];
  coach: string;
  description: string;
}

export type CourseModel = Course & Document;

const courseSchema = new Schema({
  name: String,
  members: [String],
  coach: String,
  description: String,
});

export default mongoose.model<CourseModel>('Course', courseSchema);
