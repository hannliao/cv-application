import '../styles/preview.css';
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
    company,
    role,
    responsibilities,
    startDate,
    endDate,
  } = formData;

  return (
    <div className="preview-container">
      <div className="preview-content">
        <div className="name">
          {firstName} {lastName}
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <h4>{company}</h4>
          <div className="role-date">
            <p>{role}</p>
            <p>
              {startDate} - {endDate}
            </p>
          </div>
          <p>{responsibilities}</p>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <Icon path="/email.svg" />
              &emsp;{email}
            </li>
            <li>
              <Icon path="/phone.svg" />
              &emsp;{phone}
            </li>
            <li>
              <Icon path="/linkedin.svg" />
              &emsp;{linkedin}
            </li>
            <li>
              <Icon path="/github.svg" />
              &emsp;{github}
            </li>
          </ul>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p>{degree}</p>
          <p>{school}</p>
          <p>Graduated: {graduation}</p>
        </div>
      </div>
    </div>
  );
}
