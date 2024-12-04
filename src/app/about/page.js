

'use client'
import { useState } from "react";
import { Roboto } from 'next/font/google';
import styles from './about.module.css'; // Using the merged CSS file

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
});

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      getBotResponse(userInput);
      setUserInput("");
    }
  };

  const getBotResponse = (input) => {
    let response = "I'm not sure how to answer that.";
    
    if (input.toLowerCase().includes("who are you") || input.toLowerCase().includes("tell me about you")) {
      response = "Hii, My name is Ayush, a software engineer from Bokaro Steel City. I am a result-oriented individual with a keen interest in crafting seamless and visually appealing frontend designs. Driven by creativity and precision, I strive to deliver user-centric experiences that blend functionality with aesthetics.";
    } else if (input.toLowerCase().includes("skills")) {
      response = "I have skills in React, Node.js, MongoDB, and a bit of Python!";
    } else if (input.toLowerCase().includes("projects")) {
      response = "You can check my portfolio for some of the amazing projects I’ve worked on!";
    } else if (input.toLowerCase().includes("where are you from")) {
      response = "I am from Bokaro Steel City, Jharkhand.";
    } else if (input.toLowerCase().includes("education")) {
      response = "The education background includes completing a BTech in Computer Science Engineering from LPU with a 7.4 CGPA. The 12th grade was completed from Saraswati Vidya Mandir with a 73.4% score, and the 10th grade from GGPS with a perfect 10 CGPA.";
    }

    setMessages(prevMessages => [
      ...prevMessages,
      { text: response, sender: "bot" },
    ]);
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.chatContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`${styles.message} ${msg.sender === "user" ? styles.userMessage : styles.botMessage}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className={styles.input}
          placeholder="Ask me anything!"
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className={`${styles.about} ${roboto.className}`}>
      <h1 style={{ color: '#ff5733', fontSize: '3rem', marginBottom: '2rem' }}>
        Know! About Me
      </h1>
      <Chatbot /> 
    </section>
  );
};

export default About;
