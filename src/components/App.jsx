import { useState } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';
import Preview from './Preview';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    degree: '',
    school: '',
    graduation: '',
    experiences: [],
  });

  const [prevFormData, setPrevFormData] = useState({
    firstName: 'Hannah',
    lastName: 'Liao',
    email: 'notreal@gmail.com',
    phone: '555-555-5555',
    linkedin: 'linkedin.com/in/hannliao/',
    github: 'github.com/hannliao',
    degree: 'B.S. Mechanical Engineering',
    school: 'University of Maryland, College Park',
    graduation: 'May 2020',
    experiences: [
      {
        company: 'Alarm.com',
        role: 'Quality Engineer',
        responsibilities: '',
        startDate: 'Jun 2020',
        endDate: 'Sep 2023',
      },
    ],
  });

  const handleAddExperience = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experiences: [
        ...prevFormData.experiences,
        {
          company: '',
          role: '',
          responsibilities: '',
          startDate: '',
          endDate: '',
        },
      ],
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleExperienceChange = (event, index) => {
    const { name, value } = event.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = value;
    setFormData({ ...formData, experiences: updatedExperiences });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPrevFormData(formData);
  };

  return (
    <div className="app">
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <h2>General Information</h2>
          <General formData={formData} onChange={handleChange} />
          <h2>Education</h2>
          <Education formData={formData} onChange={handleChange} />
          <h2>Experience</h2>
          {formData.experiences.map((experience, index) => (
            <div key={index}>
              <Experience
                experience={experience}
                onChange={(event) => handleExperienceChange(event, index)}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddExperience}>
            + Add Experience
          </button>
          <button type="submit">Save</button>
        </form>
        <section>
          <h2>Preview</h2>
          <Preview formData={prevFormData} />
        </section>
      </main>
      <footer>&copy; 2024 Hannah Liao. All rights reserved.</footer>
    </div>
  );
}
