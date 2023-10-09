type BookCardProps = {
  id: number;
  title: string;
  author: string;
  rating: string;
  blurb: string;
};

export const BookCard = ({
  id,
  title,
  author,
  rating,
  blurb,
}: BookCardProps) => (
  <article
    key={id}
    className="w-1/5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {title} {rating}/10
    </h5>
    <p className="font-normal text-gray-700 ">{author}</p>
    <p className="font-normal text-gray-700 ">{blurb}</p>
  </article>
);
