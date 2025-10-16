import { useEffect, useState } from "react";

const Resize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <h2>Window Resize Listener</h2>
            <p>Width: {windowSize.width}px</p>
            <p>Height: {windowSize.height}px</p>
        </div>
    )
}

export default Resize;
