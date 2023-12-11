import React from "react";
import { DialogContext } from "../../provider/DialogProvider";

function DialogRoot({ children }) {
    const { isOpen } = React.useContext(DialogContext);

    return (
        <>
            {isOpen && <div> hello world</div>}
            {children}
        </>
    );
}

export default DialogRoot;
