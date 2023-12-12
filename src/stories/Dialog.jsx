import * as Dialog from "../index.js";
import styles from "./Dialog.module.css";

export default function DialogScreen({ defaultIsOpen }) {
    return (
        <Dialog.Provider defaultIsOpen={defaultIsOpen}>
            <Dialog.Root>
                <Dialog.Trigger>Click</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className={styles.overlay}></Dialog.Overlay>
                    <Dialog.Content>
                        <p> Hello World!</p>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </Dialog.Provider>
    );
}
