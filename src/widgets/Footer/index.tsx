import Container from '../../shared/Container/ui';
import { WithClassname } from '../../shared/types/types';
import './index.css';

const Footer = ({ className = '' }: WithClassname) => {
    return (
        <div className={`footer ${className}`}>
            <Container>
                <p>
                    Made by{' '}
                    <a href="https://voronezh.hh.ru/resume/7a79dafbff07c634e30039ed1f7363714d6f59">
                        Pan0mera
                    </a>
                </p>
            </Container>
        </div>
    );
};

export default Footer;
