import { createIndex } from "@/actions";

export const GET = async () => {
  await createIndex();

  return Response.json({ message: "Index created" }, { status: 200 });
};
