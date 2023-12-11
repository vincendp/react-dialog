import React from "react";
import { DialogContext } from "../../provider/DialogProvider";

function DialogTrigger({ asChild = false, children }) {
    const { toggleIsOpen } = React.useContext(DialogContext);

    if (asChild) {
        return React.cloneElement(children, {
            onClick: toggleIsOpen,
        });
    } else {
        return <button onClick={toggleIsOpen}>{children}</button>;
    }
}

export default DialogTrigger;
