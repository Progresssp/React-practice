import { useEffect, useRef, useState } from "react";

function  SearchBox() {

    const inputRef = useRef(null);
    const renderCount = useRef(0);

    const [text, setText] = useState("");

    renderCount.current++;

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h2>Search Box</h2>

            <input
            ref={inputRef}
            typr="text"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <p>you typed: {text}</p>

            <p>Render Count: {renderCount.current}</p>
        </div>
    );
}

export default SearchBox;
