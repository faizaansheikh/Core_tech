'use client';
import Image from "next/image";
import Home from "./home/page";
import Navbar from "../components/Navbar";
import About from "./about/page";
import Partners from "./partners/Partners";
import Products from "./products/Products";
import Footer from "./footer/Footer";
import Contact from "./contact/Contact";
import Partner from "../components/Partner";
import { bgcolor } from "@/utils";
import Product from "@/components/Product";
import Clients from "@/components/Clients";
import NewProducts from "@/components/NewProducts";

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Page() {
  return (
    <div className="">


      <div className="md:mt-[30px]" id="about">
        <About />
      </div>
      
      

     

      <div className="mt-[50px] md:mt-[50px]" id="contact">

        <Contact />
      </div>






      {/* <Navbar/> */}

    </div>
  );
}