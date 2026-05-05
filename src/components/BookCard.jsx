import { Card } from "@heroui/react";

import Image from 'next/image'
import Link from "next/link";
const BookCard = ({book}) => {
 
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
  <h2 className="text-xl font-bole py-3">{book.title}</h2>
</div>
<div>
<Link href={`/all-books/${book.id}`}><button variant="outline" className="btn - w-full py-5 rounded-2xl">View Details</button></Link>

</div>
  </Card>
  );
};

export default BookCard;