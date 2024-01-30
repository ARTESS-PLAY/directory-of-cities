import Container from '../../shared/Container/ui';
import Logo from '../../shared/Logo/ui';
import { WithClassname } from '../../shared/types/types';
import './index.css';

const Header = ({ className }: WithClassname) => {
    return (
        <header className={`header ${className}`}>
            <Container>
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
