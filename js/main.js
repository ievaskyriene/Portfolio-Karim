"use strict"

import SectionHeading from "./section-heading.js"
import Achievements from "./Achievements.js"

//find all attr with "data-h2" to vreate H2 elem
const allDataH2 = document.querySelectorAll("[data-h2]")

for (let i = 0; i<allDataH2.length; i++){
        new SectionHeading(allDataH2[i]);
}

//
new Achievements('#achievements > .row');
