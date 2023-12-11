import * as Dialog from "../index.js";

export default {
    title: "DialogRoot",
    component: Dialog.Root,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const TestRoot = {
    args: {
        primary: true,
        label: "Button",
    },
};
