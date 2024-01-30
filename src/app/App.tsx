import ToolTip from '../features/ToolTip/ui';
import IndexPage from '../pages/IndexPage';
import AddressesContextProvider from './Providers/AddressesContextProvider';

function App() {
    return (
        <AddressesContextProvider>
            <ToolTip />
            <IndexPage />
        </AddressesContextProvider>
    );
}

export default App;
