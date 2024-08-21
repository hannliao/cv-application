import '../styles/preview.css';
import { format } from 'date-fns';
import Icon from './Icon';

export default function Preview({ formData }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    linkedin,
    github,
    degree,
    school,
    graduation,
    experiences,
  } = formData;

  const formatDate = (date) => {
    if (date) {
      const dateObject = new Date(date);
      return format(dateObject, 'MMM yyyy');
    }
  };

  return (
    <div className="preview-container">
      <div className="preview-content">
        <div className="name">
          {firstName} {lastName}
        </div>

        <div className="education">
          <h3>Education</h3>
          <p>{degree}</p>
          <p>{school}</p>
          <p>
            {graduation && <>Graduated: </>}
            {graduation}
          </p>
        </div>

        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <Icon path="/email.svg" />
              {email}
            </li>
            <li>
              <Icon path="/phone.svg" />
              {phone}
            </li>
            <li>
              {linkedin && <Icon path="/linkedin.svg" />}
              {linkedin}
            </li>
            <li>
              {github && <Icon path="/github.svg" />}
              {github}
            </li>
          </ul>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          {experiences.map((experience, index) => (
            <div key={index}>
              <h4>{experience.company}</h4>
              <div className="role-date">
                <p>{experience.role}</p>
                <p>
                  {formatDate(experience.startDate)} -{' '}
                  {formatDate(experience.endDate)}
                </p>
              </div>
              <p>
                {experience.responsibilities
                  .split('\n')
                  .map((responsibility, index) => (
                    <span key={index}>
                      {responsibility}
                      <br />
                    </span>
                  ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
