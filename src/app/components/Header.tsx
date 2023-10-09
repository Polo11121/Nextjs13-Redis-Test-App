import { Button, Search } from "@/app/ui";

export const Header = () => (
  <header className="flex justify-between items-center">
    <div className="flex flex-col">
      <h1>Books on Redis!</h1>
      <p>List of books here.</p>
    </div>
    <Search />
    <div className="flex gap-2">
      <Button text="Add Book" href="/createBook" />
      <Button text="Add Car" href="/createCar" />
    </div>
  </header>
);
