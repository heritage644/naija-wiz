import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe({ recipeText }) {
  return (
    <section className="flex items-center justify-center mt-10 w-full flex-col">
      <h2 className="text-[20px] items-center flex justify-center">Generated Recipe</h2>
      <div style={{ whiteSpace: "pre-wrap" }} className="w-70 pt-5">
   <ReactMarkdown>{recipeText}</ReactMarkdown>
      </div>
   
     
    </section>
  );
}
