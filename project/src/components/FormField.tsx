import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { FormField as FormFieldType, FormData } from '../types/schema';

interface FormFieldProps {
  field: FormFieldType;
  register: UseFormRegister<FormData>;
  error?: FieldError;
}

export const FormField: React.FC<FormFieldProps> = ({ field, register, error }) => {
  const baseInputClasses = 
    "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500";
  const errorClasses = error ? "border-red-500" : "";

  const renderField = () => {
    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            className={`${baseInputClasses} ${errorClasses}`}
            {...register(field.id, {
              required: field.required,
              pattern: field.validation
                ? {
                    value: new RegExp(field.validation.pattern),
                    message: field.validation.message,
                  }
                : undefined,
            })}
          />
        );

      case 'select':
        return (
          <select
            className={`${baseInputClasses} ${errorClasses}`}
            {...register(field.id, { required: field.required })}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={option.value}
                  className="text-blue-600"
                  {...register(field.id, { required: field.required })}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            placeholder={field.placeholder}
            className={`${baseInputClasses} ${errorClasses} min-h-[100px]`}
            {...register(field.id, { required: field.required })}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderField()}
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message || 'This field is required'}
        </p>
      )}
    </div>
  );
};