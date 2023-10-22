import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";
import Tabs from "./tabs";

const panes = [
    { title: 'one', content: 'I am the first' },
    { title: 'two', content: 'Second pane here' },
    { title: 'three', content: 'Third pane here' }
];

const Root = () => (
    <div id="main">
        <Clock />
        <div className="interactive">
            <Tabs panes={panes}/>
        </div>
    </div>
);

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root />, root);
})