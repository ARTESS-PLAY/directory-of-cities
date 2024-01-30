import { WithChildren, WithClassname } from '../../types/types';
import './index.css';

interface ContainerProps extends WithChildren, WithClassname {}

const Container = ({ children, className = '' }: ContainerProps) => {
    return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
