import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [enrollFormsVisibility, setEnrollFormsVisibility] = useState({
    webDevelopment: false,
    appDevelopment: false,
    graphicDesigning: false
  });

  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    description: ''
  });

  const toggleEnrollForm = (course) => {
    setEnrollFormsVisibility({
      ...enrollFormsVisibility,
      [course]: !enrollFormsVisibility[course]
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentData({
      ...enrollmentData,
      [name]: value
    });
  };

  const handleSubmit = (course) => {
   
    console.log(`Enrolled for ${course} course with data:`, enrollmentData);
    // Reset form fields
    setEnrollmentData({
      name: '',
      description: ''
    });
    // Hide the enrollment form after submission
    toggleEnrollForm(course);
  };

  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="service">
        <h2>Web Development</h2>
        <p>
          Our web development course covers HTML, CSS, JavaScript, and more. Learn to build
          responsive and interactive websites.
        </p>
        <button onClick={() => toggleEnrollForm('webDevelopment')}>Enroll</button>
        {enrollFormsVisibility.webDevelopment && (
          <div className="enroll-form">
            <h3>Enroll for Web Development Course</h3>
            <form onSubmit={() => handleSubmit('Web Development')}>
              <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={enrollmentData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={enrollmentData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>

      <div className="service">
        <h2>App Development</h2>
        <p>
          Dive into mobile app development with our comprehensive course. Learn to build native and
          cross-platform apps for iOS and Android.
        </p>
        <button onClick={() => toggleEnrollForm('appDevelopment')}>Enroll</button>
        {enrollFormsVisibility.appDevelopment && (
          <div className="enroll-form">
            <h3>Enroll for App Development Course</h3>
            <form onSubmit={() => handleSubmit('App Development')}>
              <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={enrollmentData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={enrollmentData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>

      <div className="service">
        <h2>Graphic Designing</h2>
        <p>
          Unleash your creativity with our graphic designing course. Master industry-standard tools
          like Adobe Photoshop and Illustrator.
        </p>
        <button onClick={() => toggleEnrollForm('graphicDesigning')}>Enroll</button>
        {enrollFormsVisibility.graphicDesigning && (
          <div className="enroll-form">
            <h3>Enroll for Graphic Designing Course</h3>
            <form onSubmit={() => handleSubmit('Graphic Designing')}>
              <div className="input-container">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={enrollmentData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={enrollmentData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
