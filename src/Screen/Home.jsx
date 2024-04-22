import React, { useReducer } from 'react';
import Nav from '../Components/Nav';
import './Home.css';

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            return { ...state, text: action.payload };
        case "uppercase":
            return { ...state, text: state.text.toUpperCase() };
        case "lowercase":
            return { ...state, text: state.text.toLowerCase() };
        case "clear":
            return { ...state, text: "" };
        case "removeExtra":
            return { ...state, text: state.text.replace(/\s+/g, ' ').trim() }; // Regex to replace multiple spaces with single space
        case "copy":
            // Dynamically create a textarea and copy text to clipboard
            const textarea = document.createElement('textarea');
            textarea.value = state.text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            return state;
        case "darkmode":
            return { ...state, darkmode: !state.darkmode };
        default:
            return state;
    }
};

const Home = () => {
    const initialState = {
        text: "",
        darkmode: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // Add darkmode class to homeContent based on state
    const homeContentClass = state.darkmode ? "homeContent darkmode" : "homeContent";

    return (
        <>
            <Nav dispatch={dispatch} state={state} />
            <div className={homeContentClass}>
                <h3>TextUtils - Word Counter, Character Counter, Remove Extra Space</h3>
                <br />
                <h3 htmlFor="">Enter Your text here</h3>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={state.text}
                    onChange={(e) => {
                        dispatch({ type: "change", payload: e.target.value });
                    }}
                ></textarea>
                <br />
                <div className="buttons">
                    <button
                        onClick={() => {
                            dispatch({ type: "uppercase" });
                        }}
                    >
                        Convert Uppercase
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "lowercase" });
                        }}
                    >
                        Convert Lowercase
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "clear" });
                        }}
                    >
                        Clear Text{" "}
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "copy" });
                        }}
                    >
                        Copy to Clipboard
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "removeExtra" });
                        }}
                    >
                        Remove Extra spaces
                    </button>
                </div>
                <br />
                <br />
                <h5>Summary Of Your text</h5>
                <br />
                <p>
                    Number of Words : {state.text ? state.text.split(" ").length : "0"}
                </p>
                <p>Number of characters : {state.text ? state.text.length : "0"} </p>
                <p>Reading time : {state.text ? state.text.length * 0.008 : "0"}</p>
                <br />
            </div>
        </>
    )
}

export default Home;
