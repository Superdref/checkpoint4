import React from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

import styles from "./Homepage.module.css";

import Cards from "../../assets/Cartes-tarot.png";

const { tarot } = styles;

function Homepage() {
  return (
    <div>
      <Link to="./About">
        <Image
          src={Cards}
          className={tarot}
          size="tiny"
          centered
          alt="Card Game"
        />
      </Link>
    </div>
  );
}

export default Homepage;
