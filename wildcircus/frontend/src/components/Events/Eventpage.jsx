import React from "react";
import { Link } from "react-router-dom";
import styles from "./Eventpage.module.css";

import { Image, Menu, Grid } from "semantic-ui-react";
import Logo from "../../assets/logo wc.png";
import Troubadours from "../../assets/street-style.jpg";
import Burlesque from "../../assets/burlesque-style.jpg";
import Motor from "../../assets/motor-bubble.jpg";
import Water from "../../assets/pool-show.jpg";

const {
  logowildcircus,
  menu,
  section,
  gallery,
  fool,
  fun,
  speed,
  aqua
} = styles;

function Eventpage() {
  return (
    <>
      <div>
        <navbar className={menu}>
          <Menu.Item>
            <Link to="./" className={section}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./Events" className={section}>
              Events
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./Gallery" className={section}>
              Gallery
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./Booking" className={section}>
              Booking
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./" className={section}>
              Contact Us
            </Link>
          </Menu.Item>
        </navbar>

        <Image src={Logo} className={logowildcircus} alt="Logo Wild Circus" />
        <h2>Art is everywhere...</h2>
        <Grid className={gallery}>
          <Grid.Row>
            <Grid.Column>
              <h3>The Street Show</h3>
              <Image src={Troubadours} className={fool} alt="The Street Band" />
            </Grid.Column>
            <Grid.Column>
              <h3>The Burlesque Show</h3>
              <Image src={Burlesque} className={fun} alt="The Funny Band" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h3>The Motor Show</h3>
              <Image src={Motor} className={speed} alt="The Motor Bubble" />
            </Grid.Column>
            <Grid.Column>
              <h3>The Pool Show</h3>
              <Image src={Water} className={aqua} alt="The Mermaids' Band" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <article>
          Our artists are real performers, high level gymnasts, perfomrers from
          the street...
        </article>
        <article>
          We realy believe in respect for wildlife, so the animals that play
          with us are fake!!!
        </article>
        <Link to="./Gallery">
          <h2>Let us present the artists...</h2>
        </Link>
        <footer></footer>
      </div>
    </>
  );
}

export default Eventpage;
