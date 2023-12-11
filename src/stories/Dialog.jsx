import * as Dialog from "../index.js";

export default function DialogScreen({ defaultIsOpen }) {
    return (
        <Dialog.Provider defaultIsOpen={defaultIsOpen}>
            <Dialog.Root>
                <Dialog.Trigger asChild={true}>
                    <button style={{ backgroundColor: "blue" }}>
                        CLICK!!!
                    </button>
                </Dialog.Trigger>
            </Dialog.Root>
        </Dialog.Provider>
    );
}
