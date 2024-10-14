import * as React from 'react'

export interface FieldGroupProps
    extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

export const FieldGroup = (props: FieldGroupProps) => {
    return (
        <div
            {...props}
            className={
                `flex flex-col md:flex-row md:mx-5 leading-7 ` +
                (props.className ? props.className : '')
            }
        >
            {props.children}
        </div>
    )
}
