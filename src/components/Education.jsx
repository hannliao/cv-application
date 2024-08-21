import Input from './Input';

export default function Education({ formData, onChange }) {
  const { degree, school, graduation } = formData;

  return (
    <>
      <Input
        name="degree"
        value={degree}
        placeholder="Degree"
        onChange={onChange}
      />
      <Input
        name="school"
        value={school}
        placeholder="School"
        onChange={onChange}
      />
      <Input
        name="graduation"
        value={graduation}
        placeholder="Graduation Date"
        onChange={onChange}
      />
    </>
  );
}
