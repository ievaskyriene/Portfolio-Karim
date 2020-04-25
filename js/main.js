"use strict"

import SectionHeading from "./components/section-heading.js"
import Achievements from "./components/Achievements.js"
import Gallery from "./components/galery.js"

//find all attr with "data-h2" to vreate H2 elem
const allDataH2 = document.querySelectorAll("[data-h2]")

for (let i = 0; i<allDataH2.length; i++){
        new SectionHeading(allDataH2[i]);
}

//
new Achievements('#achievements > .row');
new Gallery('#works > .row:nth-child(3) > .col-12');