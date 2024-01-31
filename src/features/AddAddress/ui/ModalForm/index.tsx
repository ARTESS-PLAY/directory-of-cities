import { useState } from 'react';
import { useAddressesContext } from '../../../../entities/Address/model/context/AddressesContext';
import Input from '../../../../shared/ui/Input';
import './index.css';
import Button from '../../../../shared/ui/Button';
import { TermType } from '../../../../entities/Address/model/types';
import { generateTermsForInputs } from '../../../../entities/Address/lib/utils';

const ModalForm = () => {
    const { aviableTerms } = useAddressesContext();

    //объект в котором хранятся необходимые значения и флаги на ошибки
    const [values, setValues] = useState(generateTermsForInputs(aviableTerms));

    const handeChangeValue = (typeTerm: TermType, value: string) => {
        const newValues = values.map((el) => {
            if (el.value === typeTerm) {
                if (el.error && value.length > 1) el.error = false;

                el.inputValue = value;
            }

            return el;
        });
        setValues(newValues);
    };

    const handleSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let validCheck = true;
        const newValues = values.map((el) => {
            if (el.inputValue.length < 1) {
                validCheck = false;
                el.error = true;
            }
            return el;
        });

        if (!validCheck) {
            setValues(newValues);
            return;
        }

        const clear = values.map((el) => {
            el.inputValue = '';
            return el;
        });

        setValues(clear);
    };

    return (
        <div className="add-address-form">
            <h3 className="add-address-form__title">Добавить Адресс</h3>
            <form action="">
                {values.map((el) => (
                    <Input
                        key={el.value}
                        value={el.inputValue}
                        onChangeValue={(v) => handeChangeValue(el.value, v)}
                        label={el.label}
                        className="add-address-form__input"
                        error={el.error}
                    />
                ))}
                <Button onClick={handleSend}>Создать</Button>
            </form>
        </div>
    );
};

export default ModalForm;
