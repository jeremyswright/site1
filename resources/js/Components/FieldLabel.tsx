import type React from 'react'

interface FieldLabelProps extends React.ComponentProps<'label'> {
    label: string
}

export const FieldLabel: React.FunctionComponent<FieldLabelProps> = ({
    label,
    ...props
}) => (
    <>
        <label
            {...props}
            className={
                `block font-bold text-lg text-purple ` +
                (props.className ? props.className : '')
            }
        >
            {label}
        </label>
    </>
)
