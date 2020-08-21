import React from "react";
import "./HomePage.style.scss";
import LinkModal from "../common/LinkModal";

const HomePage = () => (
  <div className="home-page-container">
    <h1>Robinson Legaspi</h1>
    <a href="mailto:robinson.legaspi@yahoo.com">robinson.legaspi@yahoo.com</a>
    <LinkModal
      className="users-link"
      pathname="/users"
      title="Goto Users page"
      noState
      type="button"
    />
  </div>
);

export default HomePage;
