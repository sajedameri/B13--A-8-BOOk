import { Card } from "@heroui/react";

import Image from 'next/image'
const BookCard = ({book}) => {
  console.log(book)
  return (
  <Card className=" border">
<div className="relative w-full aspect-square">
  <Image
  src={book.image_url}
  fill

  
  alt={book.title}
  className="rounded-xl object-cover"
  />
</div>
<div>
  <h2 className="text-xl font-bole">{book.title}</h2>
</div>
<div>
<button>Book Details</button>

</div>
  </Card>
  );
};

export default BookCard;