import "./index.scss";
const { render, useState } = wp.element; // react functions came from wp.element library

const componentSelector = document.querySelectorAll('[%componentname%]');

const %componentreactname% = () => { // change the name of the component element here
    const [likes, setLikes ] = useState(0);
    return (<>
        <div className="%componentname%">
            <h1>Component built and loaded</h1>
            <p><strong>%componentname%</strong> is ready to be edited</p>
        </div>
    </>)
}

componentSelector.forEach(el => {
    render(<%componentreactname% />, el )
});
