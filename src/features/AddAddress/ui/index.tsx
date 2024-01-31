import { useState } from 'react';
import { WithClassname } from '../../../shared/types/types';
import ModalContainer from '../../../shared/ui/ModalContainer';
import ModalForm from './ModalForm';
import Button from '../../../shared/ui/Button';
import { hideModal, showModal } from '../../../shared/lib/modal';

const AddAddress = ({ className }: WithClassname) => {
    const [isShowForm, setIsShowForm] = useState(false);

    const handleOpen = () => {
        setIsShowForm(true);
        showModal();
    };
    const handleClose = () => {
        setIsShowForm(false);
        hideModal();
    };

    return (
        <>
            <Button className={`add-address ${className}`} onClick={handleOpen}>
                Добавить Адрес
            </Button>
            <ModalContainer isShowModal={isShowForm} handleClose={handleClose}>
                <ModalForm handleClose={handleClose} />
            </ModalContainer>
        </>
    );
};

export default AddAddress;
