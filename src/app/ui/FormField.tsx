import { InputHTMLAttributes } from "react";

type FormFieldProps = {
  label: string;
} & (textAreaProps | inputProps);

type textAreaProps = {
  fieldType: "textArea";
} & InputHTMLAttributes<HTMLTextAreaElement>;

type inputProps = {
  fieldType: "input";
} & InputHTMLAttributes<HTMLInputElement>;

export const FormField = ({ label, ...props }: FormFieldProps) => (
  <div>
    <label
      className="block text-gray-700 text-sm font-bold mb-1"
      htmlFor={props?.id || props?.id}
    >
      {label}
    </label>
    {props.fieldType === "input" ? (
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    ) : (
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        {...props}
      />
    )}
  </div>
);
