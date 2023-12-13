import React from "react";
import { DialogContext } from "../../provider/DialogProvider";

function DialogTrigger({ asChild = false, children, ...rest }) {
    const { toggleIsOpen, triggerRef } = React.useContext(DialogContext);

    if (asChild) {
        return React.cloneElement(children, {
            onClick: toggleIsOpen,
        });
    } else {
        return (
            <button {...rest} ref={triggerRef} onClick={toggleIsOpen}>
                {children}
            </button>
        );
    }
}

export default DialogTrigger;
