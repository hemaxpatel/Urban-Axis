import "./agents.scss";

function Agents() {
  return (
    <div className="agents">
      <div className="container">
        <div className="header">
          <h1>Our Real Estate Agents</h1>
          <p>Meet our experienced team of real estate professionals</p>
        </div>

        <div className="agents-grid">
          <div className="agent-card">
            <img src="/agent1.jpg" alt="Agent 1" />
            <div className="info">
              <h3>John Smith</h3>
              <p>Senior Real Estate Agent</p>
              <p>10+ years of experience</p>
              <button>Contact Agent</button>
            </div>
          </div>

          <div className="agent-card">
            <img src="/agent2.jpg" alt="Agent 2" />
            <div className="info">
              <h3>Sarah Johnson</h3>
              <p>Luxury Property Specialist</p>
              <p>8+ years of experience</p>
              <button>Contact Agent</button>
            </div>
          </div>

          <div className="agent-card">
            <img src="/agent3.jpg" alt="Agent 3" />
            <div className="info">
              <h3>Michael Brown</h3>
              <p>Commercial Property Expert</p>
              <p>12+ years of experience</p>
              <button>Contact Agent</button>
            </div>
          </div>

          <div className="agent-card">
            <img src="/agent4.jpg" alt="Agent 4" />
            <div className="info">
              <h3>Emily Davis</h3>
              <p>Residential Specialist</p>
              <p>6+ years of experience</p>
              <button>Contact Agent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents; 