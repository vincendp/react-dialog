import Dialog from "../components/Dialog";

export default {
    title: "Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

export const Test = {
    args: {
        primary: true,
        label: "Button",
    },
};
