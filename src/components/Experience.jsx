import Input from './Input';

export default function Experience({ experience, onChange }) {
  const { company, role, responsibilities, startDate, endDate } = experience;

  return (
    <>
      <Input
        name="company"
        value={company}
        placeholder="Company"
        onChange={onChange}
      />
      <Input name="role" value={role} placeholder="Role" onChange={onChange} />
      <textarea
        name="responsibilities"
        value={responsibilities}
        placeholder="List your responsibilities"
        onChange={onChange}
        className="input-container"
      ></textarea>
      <Input
        label="Start date"
        type="date"
        name="startDate"
        value={startDate}
        onChange={onChange}
      />
      <Input
        label="End date"
        type="date"
        name="endDate"
        value={endDate}
        onChange={onChange}
      />
    </>
  );
}
