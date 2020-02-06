import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MenuLayout from "./Layout/MenuLayout";

import Homepage from "./Homepage/Homepage";
import Aboutpage from "./About/Aboutpage";
import Eventpage from "./Events/Eventpage";
import Gallerypage from "./Gallery/Gallerypage";
import Bookingpage from "./Booking/Bookingpage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/About" layout={MenuLayout} component={Aboutpage} />
        <Route path="/Events" layout={MenuLayout} component={Eventpage} />
        <Route path="/Gallery" layout={MenuLayout} component={Gallerypage} />
        <Route path="/Booking" layout={MenuLayout} component={Bookingpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
