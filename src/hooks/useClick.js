import React from "react";

function useClick(handleClick) {
    React.useEffect(() => {
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [handleClick]);
}

export default useClick;
