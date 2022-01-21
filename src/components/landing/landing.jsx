import React from "react";
import HowWework from "./howWeWork/howWework";
import Landingpage from "./landing page/Landing_page";
import Ngopage from "./NGOs/ngos";
import Stats from "./stats/stats";
import Workpage from "./work page/work_page";

export default function Landing() {
  return (
    <div>
      <Landingpage/>
      <Workpage/>
      <HowWework/>
      <Stats/>
      <Ngopage/>
    </div>
  );
}
