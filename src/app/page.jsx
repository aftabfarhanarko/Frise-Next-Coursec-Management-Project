import Image from "next/image";
import Productpage from "./producat/page";
import Heropage from "./hero/page";
import CardPage from "./card/page";
import Language from "./language/page";
import TrendingCourses from "./trandingCourse/page";
import LerningSec from "./lerin/page";
import HowItWorks from "./focuas/page";
import FeaturedInstructor from "./futcher/page";

export default function Home() {
  return (
    <div className=" bg-zinc-50   ">
      <Heropage></Heropage>
      <main className=" ">
        <section className="my-20 md:w-9/12 mx-auto">
          <CardPage></CardPage>
        </section>
        <section className="my-20 ">
          <Productpage></Productpage>
        </section>
        <section className="my-20 ">
          <Language></Language>
        </section>
        <section className="my-20 ">
         <TrendingCourses></TrendingCourses>
        </section>
        <section className="my-20 ">
         <LerningSec></LerningSec>
        </section>
        <section className="my-20 ">
         <FeaturedInstructor></FeaturedInstructor>
        </section>
        <section className="my-20 ">
         <HowItWorks></HowItWorks>
        </section>
      </main>
    </div>
  );
}
