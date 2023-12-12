import React from "react";
import { DialogContext } from "../../provider/DialogProvider";
import useKeyDown from "../../hooks/useKeyDown";

function DialogContent({ children, ...rest }) {
    const { isOpen, toggleIsOpen } = React.useContext(DialogContext);
    const containerRef = React.useRef();

    useKeyDown("Escape", () => {
        if (isOpen) {
            toggleIsOpen();
        }
    });

    React.useEffect(() => {
        function handleClick(event) {
            if (isOpen && !containerRef?.current.contains(event.target)) {
                toggleIsOpen();
            }
        }
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [isOpen, toggleIsOpen]);

    return (
        isOpen && (
            <div ref={containerRef} {...rest}>
                {children}
            </div>
        )
    );
}

export default DialogContent;
