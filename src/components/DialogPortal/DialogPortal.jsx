import React from "react";
import { createPortal } from "react-dom";
import { DialogContext } from "../../provider/DialogProvider";

function DialogPortal({ domContainer = document.body, children }) {
    const { isOpen } = React.useContext(DialogContext);

    return isOpen && createPortal(children, domContainer);
}

export default DialogPortal;
