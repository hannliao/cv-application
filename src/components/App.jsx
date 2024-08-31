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
    linkedin: 'https://linkedin.com/in/hannliao',
    github: 'https://github.com/hannliao',
    degree: 'B.S. Mechanical Engineering',
    school: 'University of Maryland, College Park',
    graduation: 'May 2020',
    experiences: [
      {
        company: 'Alarm.com',
        role: 'Quality Engineer II',
        responsibilities:
          '- Identified optimal approach for testing and product releases\n- Investigated and handled critical issues to ensure timely product delivery to users\n- Tracked status of error monitoring tickets and asked team members to address issues',
        startDate: 'May 2023',
        endDate: 'Oct 2023',
      },
      {
        role: 'Quality Engineer',
        responsibilities:
          '- Led testing and certification of over 12 projects\n- Identified bugs and communicated risk and urgency to software engineers and product managers\n- Developed automated and manual smoke tests to monitor performance of product features',
        startDate: 'Jun 2020',
        endDate: 'May 2023',
      },
      {
        company: 'DuPont',
        role: 'Mechanical Engineering Intern',
        responsibilities:
          '- Designed CAD diagrams according to onsite walkthroughs of boiler-feedwater piping\n- Calculated lab airflow to address safety concerns',
        startDate: 'May 2019',
        endDate: 'Aug 2019',
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
