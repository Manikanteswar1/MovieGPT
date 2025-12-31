import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-gray-400 py-6 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm mb-2">© 2025 MovieGPT. All rights reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://manikanteswar1.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-semibold hover:text-red-400 transition-colors underline"
          >
            Manikanta
          </a>
        </p>
        <p className="text-xs text-gray-400 text-center mt-4">
          This is an educational project. No movies are streamed or hosted on
          this website. Movie data is fetched from TMDB. AI responses are
          generated using Google Gemini API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
