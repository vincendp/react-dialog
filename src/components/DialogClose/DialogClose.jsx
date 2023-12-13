import React from "react";
import { DialogContext } from "../../provider/DialogProvider";

function DialogClose({ asChild = false, children, ...rest }) {
    const { toggleIsOpen } = React.useContext(DialogContext);

    if (asChild) {
        return React.cloneElement(children, { onClick: toggleIsOpen });
    } else {
        return (
            <button {...rest} onClick={toggleIsOpen}>
                {children}
            </button>
        );
    }
}

export default DialogClose;
