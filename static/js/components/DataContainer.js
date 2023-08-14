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
        let banner = this.getAttribute('banner');

        getFile(src).then(data => {
            this.innerHTML += "<div class=data>" + data + "</div>"
            this.innerHTML += "<img src=" + banner + "></img>"             
        })

        // InnerHTML v2
        this.innerHTML += `
            <style>
                /* Extra small devices (phones, 600px and down) */
                @media only screen and (max-width: 600px) {
                    .data a {
                        font-size: 1.8em;
                    }

                    .data p {
                        font-size: 0.9em;
                    }
                }

                /* Small devices (portrait tablets and large phones, 600px and up) */ 
                @media only screen and (min-width: 600px) {
                    .data a {
                        font-size: 1.8em;
                    }
                }
                
                /* Medium devices (landscape tablets, 768px and up) */
                @media only screen and (min-width: 768px) {
                    .data a {
                        font-size: 1.8em;
                    }
                }
                
                /* Large devices (laptops/desktops, 992px and up) */
                @media only screen and (min-width: 992px) {
                    .data a {
                        font-size: 1.8em;
                    }
                }
                
                /* Extra large devices (large laptops and desktops, 1200px and up) */
                @media only screen and (min-width: 1200px) {
                    .data a {
                        font-size: 1.8em;
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

                .data a {
                    text-decoration: none;
                    color: #333333ff;
                    margin-left: 2%;
                    margin-top: 0%;
                    margin-bottom: 0%;
                    color: #333333ff;
                    transition: color 0.25s;
                }

                .data a:hover {
                    color: #c7c7c7;
                }
                
                .data p {
                    margin-top: 0%;
                    margin-left: 2%;
                    color: #333333ff;
                }
            </style>
        `;
    }
}



customElements.define("data-container", DataContainer);