"use strict";
import data from '../data/achievements-data.js'

class Achievements {
    constructor( target ){
        this.target = target;

        this.render();
    }
    render(){
        const DOM = document.querySelector(this.target);

        if (!DOM) {
            throw "ERROR: OMG.. go fix Ahievemtns"
        }


        let HTML = "";

        for(let i=0; i<data.length; i++){
            const ach = data[i]
            HTML +=`
                <dic class="col-3 achievement">
                    <i class = "fa fa-${ach.icon}"></i>
                    <div class = "number">${ach.number}</div>
                    <div class = "number">${ach.title}</div>
                </div>
    
            `
        }

        DOM.innerHTML = HTML;

    }
}

export default Achievements;