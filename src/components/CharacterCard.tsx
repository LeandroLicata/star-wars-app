import React from "react";
import { Character } from "@/interfaces/character";

const CharacterCard = ({ name, eye_color, gender }: Character) => {
  return (
    <div className="flex flex-col items-center justify-center md:mx-4 my-4 md:my-0 border border-yellow-400 rounded-lg bg-black bg-opacity-75 p-4 w-72 md:w-auto">
      <img
        className="h-36 md:h-48 lg:h-56 w-72 md:w-96 lg:w-108 object-cover rounded-lg mb-4"
        src={`https://via.placeholder.com/300?text=${name}`}
        alt={name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-yellow-400 mb-2">{name}</div>
        <p className="text-gray-400 text-base">Color de ojos: {eye_color}</p>
        <p className="text-gray-400 text-base">Género: {gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
