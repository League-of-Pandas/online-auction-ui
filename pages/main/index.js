import Image from "next/image";
import React from "react";
import Popular from "./Popular";
import Search from "./Search";
import Vision from "./Vision";
import { useAuth } from "../../contexts/auth";

export default function Main() {
  const src = `https://i.ibb.co/pWCTHBT/image.png`;
  const {user}=useAuth()
  return (
    <main>

      <img className="top-0 left-0 negative" src="https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_960_720.jpg" alt="hero" />

      {/* <div>
        <Image loader={() => src} src={src} width={700} height={300} alt="" /> */}
      {/* <img src="https://i.ibb.co/pWCTHBT/image.png" alt="" /> */}
      {/* </div> */}


      <Search />
      <Popular />
      <Vision />
    </main>
  )
}
