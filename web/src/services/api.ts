import axios from "axios";
import { API_ENDPOINT } from "../utils/constant";
export interface FormData {
  name: string;
  members: string;
  description: string;
}

export const getAllCoursesDetails = (): Promise<any> => {
  return axios.get(`http://localhost:3000/getCourse`).then((data) => {
    return data;
  });
};

export const createCourse = async (formData: FormData): Promise<void> => {
  const formReqData = {
    name: formData.name,
    members: formData.members.split(",").map((member) => member.trim()),
    description: formData.description,
  };

  return axios
    .post("http://localhost:3000/api/course/", formReqData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

// Function to get course details based on courseId
export const getCourseDetails = (courseId: string) => {
  const url = `http://localhost:3000/getCourse/${courseId}`;
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// Function to send a PUT request to update a course
export const updateCourse = (
  courseId: string | undefined,
  updatedCourseData: { name: string; members: string; description: string }
) => {
  const url = `${"http://localhost:3000/api/course"}/${courseId}`;
  return axios
    .put(url, updatedCourseData)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteCourseById = (courseId: string) => {
    const url = `${"http://localhost:3000/api/course"}/${courseId}`;
    return axios
      .delete(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  };
