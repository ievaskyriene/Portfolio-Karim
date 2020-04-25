import data from '../data/works-data.js';

class Gallery {
    constructor (target){
        this.target = target;
        this.DOM = null;
        this.DOMfilter = null;
        this.DOMlist = null;

        this.init();
    }

    init(){
        if (this.isValid()){
            this.render();
        }
    }

    isValid() {
        const DOM = document.querySelector(this.target);
        console.log(DOM)
        if (!DOM){
            throw 'ERROR: target selector is incorrect...;('
        }
        this.DOM = DOM;

        if (!Array.isArray(data) && data.length === 0) {
            throw 'Error: data has to be an array';

        }

        return true;

    }
    render(){
        const HTML =`
            <div class = "gallery">
                <div class = "filter">FILTER</div>
                <div class = "list">LIST</div>
            </div>`;
        this.DOM.innerHTML = HTML
        this.DOMfilter = this.DOM.querySelector('.filter');
        this.DOMlist = this.DOM.querySelector('.list');

        this.renderList();
        this.renderFilter();
        
    }

    renderList() {

        let HTML = '';

        for(let i = 0; i<data.length; i++){
            const project = data[i]
            let tagHTML = "";
            console.log(project.categories)
            for(let t = 0; t<project.categories.length; t++){
                tagHTML +=`<li>${project.categories[t]}</li>`
            }

            HTML +=`
                <div class = "item">
                    <img src="${project.photo}" alt="">
                    <div class = "text">
                        <h5>${project.name}</h5>
                        <ul>
                           ${tagHTML}
                        </ul>
                    </div>
                </div>
            `;
        }

        this.DOMlist.innerHTML = HTML
        
    }

    renderFilter() {
        return;
    }
   
}

export default Gallery;