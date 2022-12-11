"use client";
import React from "react";

const SectionTitle = ({ title }: any) => {
  const titleArr = title.split(" ");
  const firstWord = title.split(" ")[0];
  const remainingWord = titleArr.splice(1, titleArr.length - 1).join(" ");

  return (
    <div className=" w-full title flex items-center justify-center">
      <h2 className="text-primary-text text-[40px] text-center py-4 px-8 border-4 border-gold-color">
        {firstWord} <strong>{remainingWord}</strong>
      </h2>
    </div>
  );
};

export default SectionTitle;
