import React from "react";
import { Character } from "@/interfaces/character";
import { useRouter } from "next/navigation";

const CharacterCard = ({ name, eye_color, gender, url }: Character) => {
  const id = url.match(/\/(\d+)\/$/)?.[1];

  const router = useRouter();

  const redirectToCharacter = () => {
    if (id) {
      router.push(`/characters/${id}`);
    }
  };

  return (
    <div className="flex flex-col justify-between md:mx-4 my-4 md:my-0 border border-yellow-400 rounded-lg bg-black bg-opacity-75 p-4 w-72 md:w-auto">
      <img
        className="h-36 md:h-48 lg:h-56 w-72 md:w-96 lg:w-108 object-cover rounded-lg mb-4"
        src={"/images/baby-yoda.jpg"}
        alt={name}
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl text-yellow-400 mb-2">{name}</div>
        <p className="text-gray-400 text-base">Eye color: {eye_color}</p>
        <p className="text-gray-400 text-base">Gender: {gender}</p>
      </div>
      <button
        onClick={redirectToCharacter}
        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500"
      >
        View Details
      </button>
    </div>
  );
};

export default CharacterCard;
