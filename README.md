I'll guide you through running this project step by step:

First, let's make sure the development server starts:
Start the development server
  >npm run dev

Now that the server is running, here's how to use the Dynamic Form Generator:

Understanding the Layout:

The screen is split into two parts:
Left side: JSON Editor (dark theme)
Right side: Form Preview (light theme)
Try the Default Form:

You'll see a basic form with two fields:
Full Name (text input)
Email Address (with email validation)
Try filling out these fields and click Submit
Modify the Form:

In the left panel (JSON Editor), you can modify the form structure
Here's a simple example to add a new field - copy and paste this into the JSON editor:

{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "role",
      "type": "select",
      "label": "Your Role",
      "required": true,
      "options": [
        {"value": "developer", "label": "Developer"},
        {"value": "designer", "label": "Designer"},
        {"value": "manager", "label": "Manager"}
      ]
    }
  ]
}
Features to Try:

Click the "Toggle Layout" button in the top-right to switch between horizontal and vertical layouts
Try submitting the form without filling required fields to see validation errors
Enter an invalid email to see email validation in action
Submit a valid form to see the success toast notification
Supported Field Types:

text: Regular text input
email: Email input with validation
select: Dropdown menu
radio: Radio button group
textarea: Multi-line text input
Testing Form Submission:

Fill out all required fields
Click the Submit button
You'll see a success message appear
Check the browser console to see the submitted data (Right-click → Inspect → Console)
