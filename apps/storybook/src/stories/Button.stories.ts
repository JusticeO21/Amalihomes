import type { Meta, StoryObj } from '@storybook/react'
import Button from '@repo/ui/button'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'I am a primary button.',
        variant: 'primary',
        size: 'default',
    },
}

export const Secondary: Story = {
    args: {
        children: 'I am a secondary button.',
        variant: 'secondary',
        size: 'default',
    },
}
