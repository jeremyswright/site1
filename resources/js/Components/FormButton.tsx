import type React from 'react'
import classNames from 'classnames';

interface FormButtonProps extends React.ComponentProps<'button'> {
}

export const FormButton: React.FunctionComponent<FormButtonProps> = ({
    ...props
}) => {
    const btnClass = classNames({
        'inline-flex items-center px-4 py-2 rounded-sm focus:outline-none transition ease-in-out duration-150 border': true,
    });

    return (
        <>
            <button
                {...props}
                className={btnClass + ' ' +
                    (props.className ? props.className : '') +
                    (props.disabled ? ' opacity-25' : '')
                }
            />
        </>
    )
}

