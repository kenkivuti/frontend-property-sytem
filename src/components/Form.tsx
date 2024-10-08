import React, { useState } from 'react';
import Button from './Button';
import FormInput from './FormInput';

interface FormValues {
  email: string;
  password: string;
  tenantName: string;
  tenantPhone: string;
}

interface FormField {
  name: keyof FormValues;
  type: 'text' | 'password' | 'email';
  label?: string;
  placeholder?: string;
  required?: boolean;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: FormValues) => void;
  submitText?: string;
  className?: string;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit, submitText, className }) => {
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as FormValues);

  const [formData, setFormData] = useState<FormValues>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={className}>
      <form onSubmit={handleFormSubmit}>
        {fields.map(field => (
          <div key={field.name} className="input-container">
            <FormInput
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              placeholder={field.placeholder || ''}
              onChange={handleChange}
              required={field.required ?? false}
            />
            <label htmlFor={field.name} className="placeholder">{field.label}</label>
          </div>
        ))}
        <Button type="submit" className="login-button mt-3">
          {submitText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
