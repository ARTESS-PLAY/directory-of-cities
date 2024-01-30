import { useId } from 'react';
import { WithClassname } from '../../types/types';
import './index.css';

interface CheckBoxProps extends WithClassname {
    label: string;
    value: string;
    checked?: boolean;
    onChecked: (v: string, c: boolean) => void;
}

const CheckBox = ({
    label,
    value,
    onChecked,
    checked = false,
    className = '',
}: CheckBoxProps): JSX.Element => {
    const id = useId();

    const handleChecked = () => {
        onChecked(value, !checked);
    };

    return (
        <label htmlFor={id} className={`checkbox  ${className}`}>
            <input
                type="checkbox"
                id={id}
                value={value}
                checked={checked}
                onChange={handleChecked}
            />
            <span className="checkbox__mark"></span>
            <p>{label}</p>
        </label>
    );
};

export default CheckBox;
