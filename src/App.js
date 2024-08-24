import React from 'react';
import './App.css'; // This is for custom CSS styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="data:image/png;base64,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" // Replace with your desired image URL
          alt="profile"
          className="profile-img"
        />
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Saba, a web developer with a passion for creating beautiful and functional websites. I love learning new technologies and applying them to solve real-world problems.
        </p>
      </header>
    </div>
  );
}

export default App;
