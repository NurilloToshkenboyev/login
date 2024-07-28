import React from "react";

export const ProductCard = ({ id, title, category, detail, onDelete }) => {
  return (
    <div className="max-w-[825px] w-full rounded-xl bg-white py-7 px-8 cursor-pointer hover:scale-x-105 transition-all shadow-lg hover:shadow-xl">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex flex-col gap-0">
          <h1 className="text-primary font-bold text-lg">{title}</h1>
          <p className="text-secondary font-normal text-base">{detail}</p>
          <span className="w-[77px] h-[30px] mt-3 py-1 text-center bg-[#F2F4FF] rounded-lg text-accent text-sm font-semibold">
            {category}
          </span>
        </div>
        <div>
          <button
            onClick={() => onDelete(id)}
            className="py-3 px-6 bg-[#D73737] text-white rounded-xl text-sm font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
