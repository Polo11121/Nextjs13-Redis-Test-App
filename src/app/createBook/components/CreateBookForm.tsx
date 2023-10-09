"use client";

import { useState } from "react";
import { createBook } from "@/actions";
import { FormField, Button } from "@/app/ui";

export const CreateBookForm = () => {
  const [error, setError] = useState("");

  const submitHandler = async (formData: FormData) => {
    const result = await createBook(formData);

    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <form
      className="flex flex-col gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/5"
      action={submitHandler}
    >
      <FormField
        fieldType="input"
        label="Title"
        placeholder="Title..."
        id="title"
        name="title"
      />
      <FormField
        fieldType="input"
        label="Author"
        placeholder="Author..."
        id="author"
        name="author"
      />
      <FormField
        fieldType="input"
        label="Rating"
        type="number"
        min={1}
        max={10}
        placeholder="Rating..."
        id="rating"
        name="rating"
      />
      <FormField
        fieldType="textArea"
        label="Blurb"
        placeholder="Blurb..."
        id="blurb"
        name="blurb"
      />
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <Button text="Submit" type="submit" />
    </form>
  );
};
