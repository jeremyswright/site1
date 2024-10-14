import React, { ChangeEvent, useState } from 'react';
import { IMaskInput } from 'react-imask';

interface FinancialInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: number;
    name: string;
    onChange: (event) => void;
}

const FinancialInput = React.forwardRef<HTMLInputElement, FinancialInputProps>(
    ({ ...props }, ref) => {
        const [inputValue, setInputValue] = useState(props.value.toFixed(2));

        return (
            <IMaskInput
                className={
                    `financial-input block w-full appearance-none rounded-sm border border-[#8d8d8d] bg-[#fafafa] focus:border-[#66afe9] focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),_0_0_8px_rgba(102,175,233,0.6)] focus:outline-none disabled:opacity-50 ` +
                    (props.className ? props.className : '')
                }
                mask={'£ num'}
                lazy={false}
                blocks={{
                    num: {
                        mask: Number,
                        radix: '.',
                        scale: 2,
                        padFractionalZeros: true,
                    },
                }}
                value={inputValue}
                unmask={true} // true|false|'typed'
                onAccept={
                    (value, mask) => {
                        props.onChange({
                            target: {
                                name: props.name,
                                value: value
                            }
                        } as unknown as ChangeEvent<HTMLInputElement>
                        )

                        setInputValue(value);
                    }
                }
            />
        );
    });

export default FinancialInput;
