import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { FormSchema, FormData } from '../types/schema';
import { FormField } from './FormField';

interface DynamicFormProps {
  schema: FormSchema;
}

export const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast.success('Form submitted successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-2">{schema.formTitle}</h1>
      <p className="text-gray-600 mb-6">{schema.formDescription}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {schema.fields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
            error={errors[field.id]}
          />
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};