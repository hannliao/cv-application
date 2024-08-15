import Input from './Input';

export default function Education({ formData, onChange, onSubmit }) {
  const { degree, school, graduation } = formData;

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit">Save</button>
    </form>
  );
}
