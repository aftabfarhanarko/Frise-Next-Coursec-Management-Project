import Image from "next/image";
import Productpage from "./producat/page";
import Heropage from "./hero/page";

export default function Home() {
  return (
    <div className=" bg-zinc-50  ">
      <Heropage></Heropage>
      <Productpage></Productpage> 
    </div>
  );
}
