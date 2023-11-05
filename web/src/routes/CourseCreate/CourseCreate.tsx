import React, { FC, useState } from "react";
import classNames from "classnames";
import classes from "./CourseCreate.module.scss";
import axios from "axios";
import { createCourse, FormData } from "../../services/api";
import { CustomModal } from "../../components";
import { useNavigate } from "react-router";
import { ROUTES } from "../../utils/constant";

interface ValidationErrors {
  name?: string;
  members?: string;
  description?: string;
}

export const CourseCreate: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    members: "",
    description: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isDataSent, setIsDataSent] = useState<boolean>(false); 
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleNavigate = () =>{
    navigate(ROUTES.DASHBOARD)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear the corresponding error message when input changes
    setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const validationErrors: ValidationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
    if (!formData.members) {
      validationErrors.members = "Members is required";
    }
    if (!formData.description) {
      validationErrors.description = "Description is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      // Update the error state to show the error messages
      setErrors(validationErrors);
      return;
    }

     // API call to create the course
     createCourse(formData)
     .then((response) => {
       console.log('Data sent successfully:', response);
      // Set the state to show the modal
      setIsDataSent(true);
      setShowModal(true);
      // handleNavigate();

       // Reset the form input fields
       setFormData({
         name: '',
         members: '',
         description: '',
       });
     })
     .catch((error) => {
       console.error('Error sending data:', error);
       // Handle the error (e.g., show an error message)
     });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate(ROUTES.COURSE_LIST);
  };

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
        {errors.name && <div className={classes.error}>{errors.name}</div>}

        <label className={classes.formLabel} htmlFor="members">
          Members:
        </label>
        <input
          type="text"
          id="members"
          name="members"
          placeholder="Enter members name"
          value={formData.members}
          onChange={handleInputChange}
          className={classes.formInput}
        />
        {errors.members && <div className={classes.error}>{errors.members}</div>}

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
        {errors.description && <div className={classes.error}>{errors.description}</div>}

        <div className={classes.button}>
          <button className={classes.buttonSubmit} type="submit"> Submit </button>
        </div>
      </form>
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        message="Course created successfully"
      />
    </div>
  );
};
