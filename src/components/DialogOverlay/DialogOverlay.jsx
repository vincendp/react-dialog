import React from "react";

import { DialogContext } from "../../provider/DialogProvider";

function DialogOverlay({ children, ...rest }) {
    const { isOpen } = React.useContext(DialogContext);

    return isOpen && <div {...rest}> {children} </div>;
}

export default DialogOverlay;
