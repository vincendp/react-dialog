import React from "react";

function useClick(handleClick, capture = false) {
    React.useEffect(() => {
        window.addEventListener("click", handleClick, { capture: capture });

        return () => {
            window.removeEventListener("click", handleClick, {
                capture: capture,
            });
        };
    }, [handleClick, capture]);
}

export default useClick;
