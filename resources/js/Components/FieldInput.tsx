import * as React from 'react'

export interface FieldInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export const FieldInput = React.forwardRef<HTMLInputElement, FieldInputProps>(
    ({ ...props }, ref) => {
        return (
            <input
                {...props}
                ref={ref}
                className={
                    `block w-full appearance-none rounded-sm border border-[#8d8d8d] bg-[#fafafa] focus:border-[#66afe9] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] focus:outline-none disabled:opacity-50 ` +
                    (props.className ? props.className : '')
                }
            />
        )
    }
)
