import React from 'react';
import './Home.css';
import PromptBox from '../components/PromptBox';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <div className="home">
      <h1>What do you want to <span className="highlight">Forge?</span></h1>
      <p className="subtext">
        Prompt, run, edit, and deploy full-stack <strong>web</strong> and <strong>mobile</strong> apps.
      </p>

      {/* ✅ PromptBox is imported and placed here */}
      <PromptBox />

      {/* Functional buttons below PromptBox */}
      <div className="options">
        <button onClick={() => document.getElementById('fileInput').click()}>
          📷 Clone a Screenshot
        </button>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={(e) => alert(`Selected file: ${e.target.files[0].name}`)}
        />

        <button onClick={() => window.open('https://www.figma.com/', '_blank')}>
          🎨 Import from Figma
        </button>

        <button onClick={() => window.location.href = '/landing'}>
          📄 Landing Page
        </button>

        <button onClick={() => window.location.href = '/factorial'}>
          🧮 Calculate Factorial
        </button>
      </div>

      {/* Community Projects Section */}
      <h2 className="community-heading">From the Community</h2>
      <div className="community-projects">
        <ProjectCard title="Floating Bubbles" views="4.4K Forks" tag="Design" image="/assets/bubbles.jpeg" />
        <ProjectCard title="File Manager" views="6.7K Forks" tag="App" image="/assets/file-manager.jpeg" />
        <ProjectCard title="Product Launch Waitlist" views="4.7K Forks" tag="Marketing" image="/assets/launch-waitlist.jpeg" />
        <ProjectCard title="Hero Geometric Background" views="1.1K Forks" tag="Background" image="/assets/hero-geometry.jpeg" />
        <ProjectCard title="Next.js + Charts" views="3.1K Forks" tag="Analytics" image="/assets/charts.jpeg" />
        <ProjectCard title="Vizify" views="1.3K Forks" tag="Research" image="/assets/vizify.jpeg" />
        <ProjectCard title="Next.js Conf 2024" views="7.7K Forks" tag="Event" image="/assets/nextconf.jpeg" />
        <ProjectCard title="Tetris" views="4.4K Forks" tag="Game" image="/assets/tetris.jpeg" />
        <ProjectCard title="Supabase Starter" views="6.6K Forks" tag="Backend" image="/assets/supabase.jpeg" />
      </div>
    </div>
  );
}

export default Home;