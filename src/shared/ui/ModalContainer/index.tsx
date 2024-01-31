import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import { WithChildren, WithClassname } from '../../types/types';
import './index.css';

interface ModalContainerProps extends WithChildren, WithClassname {
    isShowModal: boolean;
    handleClose: () => void;
}

const ModalContainer = ({
    children,
    handleClose,
    isShowModal,
    className = '',
}: ModalContainerProps): JSX.Element => {
    const modalRef = useRef(null);

    return createPortal(
        <CSSTransition
            nodeRef={modalRef}
            timeout={300}
            classNames="fade"
            in={isShowModal}
            mountOnEnter
            unmountOnExit>
            <div className="modal" ref={modalRef}>
                <div className={`modal__content ${className}`}>
                    <div
                        className="modal__close"
                        aria-label="close modal"
                        onClick={handleClose}></div>
                    {children}
                </div>
            </div>
        </CSSTransition>,
        document.body,
    );
};

export default ModalContainer;
