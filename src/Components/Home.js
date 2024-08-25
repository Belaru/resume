import './Home.css';
import './fonts.css';
import React, { useState, useEffect } from 'react';
import profilePicture from '../icons/profile-picture.png';
import chatIconWhite from '../icons/icon-chat-white.png';
import chatIconBlack from '../icons/icon-chat-black.png';
import downloadCV from '../icons/icon-download-file.png';

function Home() {
    useEffect(() => {
        const chatButton = document.getElementById('chat-button');
        const chatIcon = document.getElementById('chat-icon');
    
        if (chatButton && chatIcon) {
          chatButton.addEventListener('mouseover', () => {
            chatIcon.src = chatIconBlack; // Switch to black icon on hover
          });
    
          chatButton.addEventListener('mouseout', () => {
            chatIcon.src = chatIconWhite; // Switch back to white icon when hover ends
          });
        }
    
        // Cleanup event listeners when component unmounts
        return () => {
          if (chatButton && chatIcon) {
            chatButton.removeEventListener('mouseover', () => {
              chatIcon.src = chatIconBlack;
            });
            chatButton.removeEventListener('mouseout', () => {
              chatIcon.src = chatIconWhite;
            });
          }
        };
      }, []);

      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/CV.pdf'; // Replace with your PDF path
        link.download = 'CV-Anastasia.pdf'; // Replace with your desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    return (
      <div className="Home" data-section="home">
        <div id="home-banner"></div>
        <div id="home-header">
            <div>
                <img src={profilePicture} alt="Profile" className="profile-pic" />
                <div className="header-title">
                    <p id="header-name" className="Playfair-font-ss"><b>Anastasia Bondarenko</b></p>
                    <p id="header-bio" className="Playfair-font">Passionate Programmer</p>
                </div>
            </div>
            <div id="header-tools">
                <button type="button" id="chat-button"> 
                    <a href="#contact">
                        <img src={chatIconWhite} alt="Chatting" id="chat-icon"/>
                        Message
                    </a>
                </button>
            </div>
        </div>
        <div id="home-cv">
            <button type="button" id="download-cv-button" onClick={handleDownload}> 
                Download CV
                <img src={downloadCV} alt="CV download" />
            </button>
        </div>
        <div id="quotes-row">
          {/* It's a great reminder that innovation and creativity drive progress in technology and software development. */}
            <p className="Quicksand-font"><i>"Software is a great combination between artistry and engineering."</i><b> — Bill Gates</b></p>
            <p className="Quicksand-font"><i>"The best way to predict the future is to invent it."</i><b> — Alan Kay</b></p>
        </div>
        <hr style={{ marginTop: '30px' }} />
      </div>
    );
  }
  export default Home;