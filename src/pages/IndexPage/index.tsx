import Container from '../../shared/Container/ui';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';
import './index.css';

const IndexPage = () => {
    return (
        <div className="page">
            <Header />
            <Container className="page-content">abpa</Container>
            <Footer />
        </div>
    );
};

export default IndexPage;
