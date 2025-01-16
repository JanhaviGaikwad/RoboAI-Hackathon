import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

function Home() {
  return (
    <div className="home">
      <h2>Learn Supply Chain Management with AI + Piko</h2>
      <p>
        Dive into the world of supply chain management with interactive learning experiences. 
        Explore key concepts and get answers to all your questions with "Piko," the bird chatbot.
      </p>
      <div className="button-container">
        <Link to="/explain-supply-chain">
          <button className="explain-button">Explain Supply Chain</button>
        </Link>
        <Link to="/ask-piko">
          <button className="piko-button">Ask Piko, the Chatbot</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
