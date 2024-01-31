import { useAddressesContext } from '../../../entities/Address/model/context/AddressesContext';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import './index.css';

const PageLoader = () => {
    const { isLoaded } = useAddressesContext();
    const loaderRef = useRef<HTMLDivElement>(null);

    return (
        <CSSTransition
            nodeRef={loaderRef}
            timeout={300}
            classNames="fade"
            in={!isLoaded}
            mountOnEnter
            unmountOnExit>
            <div className="page--loader" ref={loaderRef}>
                <span className="page--loader__spiner"></span>
            </div>
        </CSSTransition>
    );
};

export default PageLoader;
