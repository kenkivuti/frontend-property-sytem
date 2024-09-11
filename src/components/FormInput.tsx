import React from 'react';

interface FormInputProps {
  type: 'text' | 'password' | 'email' | 'checkbox';
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  checked,
  required
}) => {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        checked={type === 'checkbox' ? checked : undefined}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default FormInput;
