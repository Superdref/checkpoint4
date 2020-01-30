import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import Eventpage from "./Events/Eventpage";
import Gallerypage from "./Gallery/Gallerypage";
import Bookingpage from "./Booking/Bookingpage";

//function Route({ component: Component }) {
//  return <Route />;
//}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Events" component={Eventpage} />
        <Route path="/Gallery" component={Gallerypage} />
        <Route path="/Booking" component={Bookingpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
