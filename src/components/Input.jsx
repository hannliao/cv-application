import '../styles/input.css';

export default function Input({
  label = '',
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  isRequired = false,
}) {
  const className = label === '' ? 'input-field' : 'input-field date';

  return (
    <label className="input-container">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        required={isRequired}
      />
    </label>
  );
}
