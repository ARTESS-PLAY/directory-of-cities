import { useId } from 'react';
import { WithClassname } from '../../types/types';
import './index.css';

interface InputProps extends WithClassname {
    value: string;
    onChangeValue: (value: string) => void;
    placeholder?: string;
    label?: string;
    error?: boolean;
}

const Input = ({ value, onChangeValue, placeholder, label, error, className = '' }: InputProps) => {
    const id = useId();

    const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value;
        onChangeValue(v);
    };

    return (
        <label htmlFor={id} className={`input ${className} ${error ? 'input_error' : ''}`}>
            {label && <p>{label}</p>}
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                onChange={handleChage}
                value={value}
            />
        </label>
    );
};

export default Input;
