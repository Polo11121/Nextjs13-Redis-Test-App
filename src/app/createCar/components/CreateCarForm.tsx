"use client";

import { FormField, Button } from "@/app/ui";
import { createCar } from "@/actions";

export const CreateCarForm = () => {
  const submitHandler = async (formData: FormData) => {
    await createCar(formData);
  };

  return (
    <form
      className="flex flex-col gap-2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/5"
      action={submitHandler}
    >
      <FormField
        fieldType="input"
        label="Make"
        placeholder="Make..."
        id="make"
        name="make"
      />
      <FormField
        fieldType="input"
        label="Model"
        placeholder="Model..."
        id="model"
        name="model"
      />
      <FormField
        fieldType="input"
        label="Image"
        placeholder="Image..."
        id="image"
        name="image"
      />
      <FormField
        fieldType="textArea"
        label="Description"
        placeholder="Description..."
        id="description"
        name="description"
      />
      <Button text="Submit" type="submit" />
    </form>
  );
};
