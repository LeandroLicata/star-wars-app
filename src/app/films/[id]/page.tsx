"use client";

import React from "react";
import useMovieDetail from "@/hooks/useMovieDetail";
import { useRouter } from "next/navigation";

const FilmDetailPage = ({ params }: { params: { id: string } }) => {
  const { movie, isLoading } = useMovieDetail(params.id);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90 p-4">
      <div className="max-w-lg w-full border border-yellow-400 rounded-lg bg-black bg-opacity-75 overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-yellow-400">
            {isLoading ? "loading..." : movie?.title}
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/images/baby-yoda.jpg"
              alt="Character"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Episode:</span> {movie?.episode_id}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Director:</span> {movie?.director}
          </div>
          <button
            onClick={handleGoBack}
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmDetailPage;
