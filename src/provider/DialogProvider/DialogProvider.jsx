import React from "react";
import useClick from "../../hooks/useClick";

export const DialogContext = React.createContext();

function DialogProvider({ defaultIsOpen = false, children }) {
    const [isOpen, setIsOpen] = React.useState(defaultIsOpen);
    const triggerRef = React.useRef();

    const toggleIsOpen = React.useCallback(function toggleIsOpen() {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }, []);

    React.useEffect(() => {
        if (triggerRef.prevIsOpen === undefined) {
            triggerRef.prevIsOpen = defaultIsOpen;
        }
    }, [defaultIsOpen]);

    useClick(() => {
        triggerRef.prevIsOpen = isOpen;
    }, true);

    const value = React.useMemo(() => {
        return {
            isOpen,
            toggleIsOpen,
            triggerRef,
        };
    }, [toggleIsOpen, isOpen]);

    return (
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    );
}

export default DialogProvider;
