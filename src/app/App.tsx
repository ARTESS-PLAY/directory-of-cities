import PageLoader from '../features/PageLoader/ui';
import ToolTip from '../features/ToolTip/ui';
import IndexPage from '../pages/IndexPage';
import AddressesContextProvider from './Providers/AddressesContextProvider';

function App() {
    return (
        <AddressesContextProvider>
            <ToolTip />
            <PageLoader />
            <IndexPage />
        </AddressesContextProvider>
    );
}

export default App;
