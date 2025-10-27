import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe({ recipeText }) {
  return (
    <section className="flex mt-10 w-full items-center sm:items-start  lg:justify-start flex-col text-black">
      <h2 className="text-[20px] font-bold items-center sm:ml-7 flex sm:px-10 rounded-lg px-2  justify-center bg-green-400 text-center 2xl:text-[30px]">Generated Recipe</h2>
      <div style={{ whiteSpace: "pre-wrap" }} className=" min-w-60 max-w-300 text-[14px]  pt-5 px-5  lg:text-[22px] 2xl:mt-20 border-t mt-5">
   <ReactMarkdown>{recipeText}</ReactMarkdown>
      </div>
   
     
    </section>
  );
}
