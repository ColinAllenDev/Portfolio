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
            this.innerHTML += "<div class=data>" + data + "</div>"
            this.innerHTML += "<img src=" + banner + "></img>"             
        })

        this.innerHTML += `
            <style>
                /* Extra small devices (phones, 600px and down) */
                @media only screen and (max-width: 600px) {
                    .data h1 {
                        font-size: 1.8em;
                    }

                    .data p {
                        font-size: 0.9em;
                    }
                }

                .data {
                    overflow: scroll;
                    margin: 1%;
                    width: 100%;

                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }

                .data::-webkit-scrollbar {
                    display: none;
                }

                .data h1 {
                    margin-left: 2%;
                    margin-top: 0%;
                    margin-bottom: 0%;
                    color: #333333ff;
                }

                .data p {
                    margin-top: 0%;
                    margin-left: 2%;
                    color: #333333ff;
                }

                .links {
                    
                }
            </style>
        `;
    }
}



customElements.define("data-container", DataContainer);