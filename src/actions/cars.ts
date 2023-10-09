"use server";

import { carSchema, db } from "@/lib";
import { redirect } from "next/navigation";
import { Repository, Entity } from "redis-om";

export const createCar = async (formData: FormData) => {
  const repository = new Repository(carSchema, db);

  const data = Object.fromEntries(formData.entries()) as Entity;

  await repository.save(data);

  redirect("/");
};

export const createIndex = async () => {
  const repository = new Repository(carSchema, db);

  await repository.createIndex();
};

export const searchCars = async (searchTerm: string) => {
  const repository = new Repository(carSchema, db);

  const cars = await repository
    .search()
    .where("make")
    .eq(searchTerm)
    .or("model")
    .eq(searchTerm)
    .or("description")
    .matches(searchTerm)
    .return.all();

  return cars;
};
