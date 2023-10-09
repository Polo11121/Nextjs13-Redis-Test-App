import { getBooks } from "@/actions";
import { Header } from "@/app/components";
import { BookCard } from "@/app/ui";

const RootPage = async () => {
  const books = await getBooks();

  return (
    <div className="p-10">
      <Header />
      <main className="flex justify-center flex-col gap-3 mt-3">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </main>
    </div>
  );
};
export default RootPage;
