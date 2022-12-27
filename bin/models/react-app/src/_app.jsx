import "../styles/index.scss";  // Import the stylesheet
import { render } from "react-dom";
import { default as WPChunkApp }

const el = document.querySelector('[wpchunk-%componentname%]');
let name = el.dataset.wpchunk.replaceAll("-", "_");
let instance = parseInt(el.dataset.instance);
let params = window[name][instance];
render( <WPChunkApp {...params} />, el );
