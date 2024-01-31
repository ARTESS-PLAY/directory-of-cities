import { WithChildren, WithClassname } from '../../types/types';
import './index.css';

interface ButtonProps extends WithChildren, WithClassname {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <button onClick={(e) => onClick(e)} className={`cute-btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;
