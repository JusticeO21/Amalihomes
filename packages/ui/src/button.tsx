'use client'
import './style/output.css'
import { cn } from './util/utils'
import { cva, type VariantProps } from 'cva'

const buttonVariants = cva('w-32 py-2 rounded-md', {
    variants: {
        variant: {
            default: 'bg-blue-500',
            primary: 'bg-blue-500',
            secondary: 'bg-green-500',
        },
        size: {
            default: 'w-32 py-2',
            sm: 'w-24 py-1',
            lg: 'w-40 py-3',
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
})

function Button({
    className,
    variant,
    size,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            onClick={() => alert(`Hello from your button component`)}
            {...props}
        />
    )
}

export default Button
