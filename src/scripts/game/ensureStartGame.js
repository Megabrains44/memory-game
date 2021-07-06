import Game from "../../Game";
import React from 'react';
import Menu from "../../components/Menu";
import ReactDOM from 'react-dom';
// export default function ensureCountDown(){
//     ReactDOM.render(
//         <React.StrictMode>
//             <Game />
//         </React.StrictMode>,
//         document.getElementById('main')
//     );
// }

export default function ensureCountDown(){
    ReactDOM.render(
        <React.StrictMode>
            <Game />
        </React.StrictMode>,
        document.getElementById('main')
    );
}


