import "../components/DataContainer.js";

export default () => `
    <style>
        /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {
            data-container > img {
                display: none;
            }
        }

        @keyframes slideInFromRight {
            0% {
                transform: translateX(20%);
            }
            100% {
                transform: translateX(0);
            }
        }   

        #page-title {
            font-size: 42pt;
            margin: 0;
            padding: 0;
            color: #333333ff;
        }

        #page-desc {
            margin: 0;
            padding: 0;
            color: #666666ff;
        }

        .page-data {
            height: 100vh;
        }

        data-container {
            overflow: hidden;
            display: flex;
            height: 35%;
            width: 100%;
            border-radius: 5px;
            margin-top: 1%;
            margin-bottom: 1%;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            transition: box-shadow 0.25s;
        }

        data-container:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        data-container > img {
            margin-right: 2.5%;
            margin-top: auto;
            margin-bottom: auto;
            max-width: 100%;
            max-height: 65%;
        }
    </style>

    <h1 id="page-title">Portfolio</h1>

    <p id="page-desc">Below are projects developed during my time working professionally, enrolled in university, and learning at home. </p>

    <div class="page-data">
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>    
    </div>
`;