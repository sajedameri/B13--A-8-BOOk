import { Card } from "@heroui/react";

import Image from 'next/image'
const BookCard = ({book}) => {
  console.log(book)
  return (
  <Card>
<div>
  <Image
  src={book.image_url}
  height={200}
  width={200}
  alt={book.title}
  className="rounded"
  />
</div>
<div>
  <h2 className="text-md font-bole">{book.title}</h2>
</div>
<div>
<button>Book Details</button>

</div>
  </Card>
  );
};

export default BookCard;