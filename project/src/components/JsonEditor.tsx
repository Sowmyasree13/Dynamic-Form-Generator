import React from 'react';
import JSONEditor from 'react-json-editor-ajrm';
import { FormSchema } from '../types/schema';

interface JsonEditorProps {
  schema: FormSchema;
  onChange: (schema: FormSchema) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ schema, onChange }) => {
  return (
    <div className="h-full bg-gray-900 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-white">JSON Schema Editor</h2>
      <JSONEditor
        placeholder={schema}
        theme="dark_vscode_tribute"
        locale="en"
        height="100%"
        width="100%"
        onChange={(value: any) => {
          try {
            if (value.jsObject) {
              onChange(value.jsObject as FormSchema);
            }
          } catch (error) {
            console.error('Invalid JSON:', error);
          }
        }}
      />
    </div>
  );
};