import type { StorybookConfig } from '@storybook/react-vite'
import { join } from 'path'
import { dirname } from 'path'

import { fileURLToPath } from 'url'

function getAbsolutePath(value: string): string {
    const packagePath = join(dirname(fileURLToPath(import.meta.url)), '..', 'node_modules', value)
    return packagePath
}
const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@chromatic-com/storybook'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
}
export default config
