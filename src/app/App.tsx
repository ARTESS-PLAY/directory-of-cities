import IndexPage from '../pages/IndexPage';
import AddressesContextProvider from './Providers/AddressesContextProvider';

function App() {
    return (
        <AddressesContextProvider>
            <IndexPage />
        </AddressesContextProvider>
    );
}

export default App;
