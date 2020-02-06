import React from "react";
import { Link } from "react-router-dom";
import { Image, Grid } from "semantic-ui-react";

import NewBuffon from "../../assets/modern-buffon.jpg";
import Buffon from "../../assets/saltimbanque.jpg";
import Juggler from "../../assets/street-juggler.jpg";
import Statue from "../../assets/street-statue.jpg";
import styles from "./Aboutpage.module.css";

const { gallery, buffon, oldbuffon, juggler, statue } = styles;

function Aboutpage() {
  return (
    <>
      <div>
        <article>The new buffons are in the street...</article>
        <Grid className={gallery}>
          <Grid.Row>
            <Grid.Column>
              <Image
                src={Buffon}
                className={oldbuffon}
                alt="The original Buffon"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image src={NewBuffon} className={buffon} alt="One-man band" />
            </Grid.Column>
            <Grid.Column>
              <Image src={Juggler} className={juggler} alt="Street Juggler" />
            </Grid.Column>
            <Grid.Column>
              <Image src={Statue} className={statue} alt="Street Statue" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <article>
          Our circus is realy a new vision of the street arts mixed with the
          original circus world...
        </article>
        <Link to="./Events">
          <h2>Let's see our shows...</h2>
        </Link>
        <footer></footer>
      </div>
    </>
  );
}

export default Aboutpage;
