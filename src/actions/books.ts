"use server";

import { db } from "@/lib";
import { redirect } from "next/navigation";

type Book = {
  id: number;
  title: string;
  author: string;
  rating: string;
  blurb: string;
};

export const createBook = async (formData: FormData) => {
  const { title, author, rating, blurb } = Object.fromEntries(
    formData.entries()
  ) as Record<string, string>;

  const id = Math.floor(Math.random() * 1000000);

  const alreadyExist = await db.zAdd(
    "books",
    {
      value: title,
      score: id,
    },
    {
      NX: true,
    }
  );

  if (!alreadyExist) {
    return {
      error: "That book has already been added!",
    };
  }

  await db.hSet(`book:${id}`, {
    title,
    author,
    rating,
    blurb,
  });

  redirect("/");
};

export const getBooks = async (): Promise<Book[]> => {
  const results = await db.zRangeWithScores("books", 0, -1);

  const booksPromises = results.map(async (book) => {
    const bookData = (await db.hGetAll(`book:${book.score}`)) as Omit<
      Book,
      "id"
    >;

    return {
      ...bookData,
      id: book.score,
    };
  });

  const books = await Promise.all(booksPromises);

  return books;
};
