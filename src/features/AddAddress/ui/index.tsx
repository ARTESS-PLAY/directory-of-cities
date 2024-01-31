import { useState } from 'react';
import { WithClassname } from '../../../shared/types/types';
import ModalContainer from '../../../shared/ui/ModalContainer';
import ModalForm from './ModalForm';
import Button from '../../../shared/ui/Button';

const AddAddress = ({ className }: WithClassname) => {
    const [isShowForm, setIsShowForm] = useState(false);

    return (
        <>
            <Button className={`add-address ${className}`} onClick={() => setIsShowForm(true)}>
                Добавить Адрес
            </Button>
            <ModalContainer isShowModal={isShowForm} handleClose={() => setIsShowForm(false)}>
                <ModalForm />
            </ModalContainer>
        </>
    );
};

export default AddAddress;
