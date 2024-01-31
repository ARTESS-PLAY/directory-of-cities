import { AviableTerm, ChosenTerm, TermForInput } from '../model/types';

//фукция создаёт объект необходимый для чекбоксов из всевозможных объектов конфигрурации
export const generateAviableForCheckboxes = (terms: AviableTerm[]): ChosenTerm[] => {
    return terms.map((el) => ({
        ...el,
        checked: true,
    }));
};

//функция создаёт объект для работы с полями инпутов и валидацией

export const generateTermsForInputs = (terms: AviableTerm[]): TermForInput[] => {
    const newTerms = terms.map((el) => ({ ...el, inputValue: '', error: false }));

    //добавялем гарантировано пользователя
    newTerms.push({ value: 'user', label: 'Житель', inputValue: '', error: false });

    return newTerms;
};
