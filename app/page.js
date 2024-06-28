import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <div className="flex flex-col w-screen h-screen px-2">
    <Navbar/>
    <Hero/>
   </div>
  );
}
