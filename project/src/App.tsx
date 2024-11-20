import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { JsonEditor } from './components/JsonEditor';
import { DynamicForm } from './components/DynamicForm';
import { FormSchema } from './types/schema';
import { Split } from 'lucide-react';

const initialSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address"
      }
    }
  ]
};

function App() {
  const [schema, setSchema] = useState<FormSchema>(initialSchema);
  const [isVertical, setIsVertical] = useState(false);

  const toggleLayout = () => setIsVertical(!isVertical);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Dynamic Form Generator</h1>
          <button
            onClick={toggleLayout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Split className="h-4 w-4" />
            Toggle Layout
          </button>
        </div>

        <div className={`grid gap-6 ${isVertical ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
          <div className="h-[calc(100vh-12rem)]">
            <JsonEditor schema={schema} onChange={setSchema} />
          </div>
          <div className="h-[calc(100vh-12rem)] overflow-y-auto">
            <DynamicForm schema={schema} />
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;