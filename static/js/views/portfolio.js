import "../components/DataContainer.js";

export default () => `
    <style>
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
            max-width: 50%;
            max-height: 50%;
        }
    </style>

    <h1 id="page-title">Portfolio</h1>

    <p id="page-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

    <div class="page-data">
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>
        <data-container src="/static/html/Sample.html" banner="/static/img/snoop.jpeg"></data-container>    
    </div>
`;