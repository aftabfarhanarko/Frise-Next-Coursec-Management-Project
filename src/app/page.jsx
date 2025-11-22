import Image from "next/image";
import Productpage from "./producat/page";
import Heropage from "./hero/page";
import CardPage from "./card/page";

export default function Home() {
  return (
    <div className=" bg-zinc-50  ">

      <Heropage></Heropage>
       <section className="my-20 md:w-9/12 mx-auto">

       <CardPage></CardPage>
       </section>
      <Productpage></Productpage> 
    </div>
  );
}
