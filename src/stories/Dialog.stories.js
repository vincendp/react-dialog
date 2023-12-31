import DialogScreen from "./Dialog";

export default {
    title: "Dialog Screen",
    component: DialogScreen,
    tags: ["autodocs"],
    argTypes: {
        defaultIsOpen: { control: "boolean" },
    },
};

export const DefaultClosed = {
    args: {
        defaultIsOpen: false,
    },
};

export const DefaultOpen = {
    args: {
        defaultIsOpen: true,
    },
};
