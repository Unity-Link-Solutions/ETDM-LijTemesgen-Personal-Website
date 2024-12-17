import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to the Artist Personal Website</h1>
        <p className="text-center text-gray-700 mt-4">
          Discover the music, events, and merchandise of the ETDM pioneer.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
