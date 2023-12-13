import React from "react";
import { DialogContext } from "../../provider/DialogProvider";
import useKeyDown from "../../hooks/useKeyDown";
import useClick from "../../hooks/useClick";

function DialogContent({ children, ...rest }) {
    const { isOpen, toggleIsOpen, triggerRef } =
        React.useContext(DialogContext);
    const containerRef = React.useRef();

    useKeyDown("Escape", () => {
        if (isOpen) {
            toggleIsOpen();
        }
    });

    useClick((event) => {
        if (
            triggerRef.prevIsOpen &&
            !containerRef?.current.contains(event.target)
        ) {
            toggleIsOpen();
        }
    });

    return (
        isOpen && (
            <div ref={containerRef} {...rest}>
                {children}
            </div>
        )
    );
}

export default DialogContent;
