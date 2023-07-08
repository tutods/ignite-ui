import {themes} from "@storybook/theming";
import {Preview} from "@storybook/react";

const parameters: Preview['parameters'] = {
    actions: {argTypesRegex: "^on[A-Z].*"},

    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },

    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'light',
                value: themes.light.appBg
            },
            {
                name: 'dark',
                value: themes.dark.appBg
            }
        ]
    },

    docs: {
        theme: themes.dark
    }
};

export default {
    parameters,
}
