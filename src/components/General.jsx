import Input from './Input';

export default function General({ formData, onChange }) {
  const { firstName, lastName, email, phone, linkedin, github } = formData;

  return (
    <>
      <Input
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={onChange}
        isRequired={true}
      />
      <Input
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={onChange}
        isRequired={true}
      />
      <Input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
        isRequired={true}
      />
      <Input
        type="tel"
        name="phone"
        value={phone}
        placeholder="Phone"
        onChange={onChange}
        isRequired={true}
      />
      <Input
        type="text"
        name="linkedin"
        value={linkedin}
        placeholder="LinkedIn (optional)"
        onChange={onChange}
      />
      <Input
        type="text"
        name="github"
        value={github}
        placeholder="GitHub (optional)"
        onChange={onChange}
      />
    </>
  );
}
