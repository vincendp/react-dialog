import React from "react";

export const DialogContext = React.createContext();

function DialogProvider({ defaultIsOpen = false, children }) {
    const [isOpen, setIsOpen] = React.useState(defaultIsOpen);

    function toggleIsOpen() {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const value = React.useMemo(() => {
        return {
            isOpen,
            toggleIsOpen,
        };
    }, [isOpen]);

    return (
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    );
}

export default DialogProvider;
