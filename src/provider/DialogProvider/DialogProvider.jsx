import React from "react";
import useClick from "../../hooks/useClick";

export const DialogContext = React.createContext();

function DialogProvider({ defaultIsOpen = false, children }) {
    const [isOpen, setIsOpen] = React.useState(defaultIsOpen);
    const triggerRef = React.useRef();

    const toggleIsOpen = React.useCallback(
        function toggleIsOpen() {
            triggerRef.prevIsOpen = isOpen;
            setIsOpen((currentIsOpen) => !currentIsOpen);
        },
        [isOpen]
    );

    React.useEffect(() => {
        if (triggerRef.prevIsOpen === undefined) {
            triggerRef.prevIsOpen = defaultIsOpen;
        }
    }, [defaultIsOpen]);

    useClick(() => {
        triggerRef.prevIsOpen = isOpen;
    });

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
