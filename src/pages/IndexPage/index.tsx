import Container from '../../shared/ui/Container';
import Addresses from '../../widgets/Addresses';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import './index.css';

const IndexPage = () => {
    return (
        <div className="page">
            <Header />
            <Container className="page-content">
                <Addresses />
            </Container>
            <Footer />
        </div>
    );
};

export default IndexPage;
