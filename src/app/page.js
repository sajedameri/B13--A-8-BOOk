import BookSlider from "@/components/Bookslider";
import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Image from "next/image";
import ReaderReviews from "@/components/ReaderReviews";

export default function Home() {
  return (
    <>     <Banner/>

<FeaturedBooks />
<BookSlider/>
<ReaderReviews/>
</>


  );
}
