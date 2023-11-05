import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import classes from './CourseEdit.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseDetails, updateCourse } from '../../services/api';
import { CustomModal } from '../../components';
import { ROUTES } from '../../utils/constant';

export const CourseEdit: FC = () => {
  const { courseId } = useParams();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    members: '',
    description: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch course data based on the courseId when the component mounts
    getCourseDetails(courseId)
      .then((course) => {
        // Set the retrieved course data in the form
        setFormData(course);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
      });
  }, [courseId]);

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Send a PUT request to update the course with formData
    updateCourse(courseId, formData)
      .then((response) => {
        console.log('Course updated successfully:', response);
        // Handle success, e.g., navigate back to the course list
        setShowModal(true);
      })
      .catch((error) => {
        console.error('Error updating course:', error);
        // Handle the error
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate(ROUTES.COURSE_LIST);
  };

  const cancelChanges = () =>{
    navigate(ROUTES.COURSE_LIST);
  }
  return (
    <div className={classes.userFormContainer}>
      <form className={classes.userDetails} onSubmit={handleSubmit}>
        <label className={classes.formLabel} htmlFor="name">
          Course Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter course name"
          value={formData.name}
          onChange={handleInputChange}
          className={classes.formInput}
        />

        <label className={classes.formLabel} htmlFor="members">
          Members:
        </label>
        <input
          type="text"
          id="members"
          name="members"
          placeholder="Enter members' names"
          value={formData.members}
          onChange={handleInputChange}
          className={classes.formInput}
        />

        <label className={classes.formLabel} htmlFor="description">
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleInputChange}
          className={classes.formTextArea}
        />
        <div className={classes.button}>
          <button className={classes.buttonSubmit} type="submit">
            Save and Update
          </button>
          <button className={classes.buttonSubmit} onClick={cancelChanges}>
            Cancel
          </button>
        </div>
      </form>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        message="Course updated successfully"
      />
    </div>
  );
};
