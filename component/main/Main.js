import Image from "next/image";
import React from "react";
import Popular from "./Popular";
import Search from "./Search";
import Vision from "./Vision";


export default function Main() {
  const src = `https://i.ibb.co/pWCTHBT/image.png`;

  return (
    <main>



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
