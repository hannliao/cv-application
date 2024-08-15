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
    company: '',
    role: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
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
    company: 'Alarm.com',
    role: 'Quality Engineer',
    responsibilities: '',
    startDate: '06/2020',
    endDate: '09/2023',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    setPrevFormData(formData);
  };

  return (
    <div className="body">
      <header>
        <h1>CV Generator</h1>
      </header>
      <section className="forms">
        <h2>General Information</h2>
        <General
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <h2>Education</h2>
        <Education
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <h2>Experience</h2>
        <Experience
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </section>
      <section>
        <h2>Preview</h2>
        <Preview formData={prevFormData} />
      </section>
      <footer>&copy; 2024 Hannah Liao. All rights reserved.</footer>
    </div>
  );
}
