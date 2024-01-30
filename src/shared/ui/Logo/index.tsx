import { WithClassname } from '../../types/types';
import './index.css';

const Logo = ({ className = '' }: WithClassname): JSX.Element => {
    return (
        <div className={`logo ${className}`}>
            <p>Pan0mera's directory of cities</p>
        </div>
    );
};

export default Logo;
