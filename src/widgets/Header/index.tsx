import { WithClassname } from '../../shared/types/types';
import Container from '../../shared/ui/Container';
import Logo from '../../shared/ui/Logo';
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
