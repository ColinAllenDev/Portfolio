async function getFile(src) {
    let response = await fetch(src);

    if (response.status != 200) {
        throw new Error("Could not get file: " + src);
    }

    const data = await response.text();
    return data;
}

class DataContainer extends HTMLElement {    
    connectedCallback() {
        let src = this.getAttribute('src') || undefined;
        let banner = this.getAttribute('banner') || "/static/img/snoop.jpeg";

        getFile(src).then(data => {

            this.innerHTML += "<div class=data>" + data + "</div>";
            this.innerHTML += "<img src=" + banner + "></img>";
        })

        this.innerHTML += `
            <style>
                .data {
                    overflow: scroll;
                    margin: 1%;
                    width: 100%;
                }

                .data h1 {
                    margin: 0%;
                    color: #333333ff;
                }

                .data p {
                    margin: 0%;
                    color: #333333ff;
                }
            </style>
        `;
    }
}



customElements.define("data-container", DataContainer);