import { searchCars } from "@/actions";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get("searchTerm");

  if (!searchTerm) {
    return Response.json({ message: "Missing search term" }, { status: 400 });
  }

  const cars = await searchCars(searchTerm);

  return Response.json({ cars }, { status: 200 });
};
