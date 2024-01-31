import {
    AvailableTerm,
    ChosenTerm,
    TermForInput,
    UserAddress,
    UserAddressDto,
} from '../model/types';

//фукция создаёт объект необходимый для чекбоксов из всевозможных объектов конфигрурации
export const generateAvailableForCheckboxes = (terms: AvailableTerm[]): ChosenTerm[] => {
    return terms.map((el) => ({
        ...el,
        checked: true,
    }));
};

//функция создаёт объект для работы с полями инпутов и валидацией

export const generateTermsForInputs = (terms: AvailableTerm[]): TermForInput[] => {
    const newTerms = terms.map((el) => ({ ...el, inputValue: '', error: false }));

    //добавялем гарантировано пользователя
    newTerms.push({ value: 'user', label: 'Житель', inputValue: '', error: false });

    return newTerms;
};

export const generateTermsFromServer = (data: UserAddressDto[]): UserAddress[] => {
    const formatedData: UserAddress[] = [];

    data.map((el) => {
        let city = formatedData.find((c) => c.id === el.address.city._id);
        if (!city) {
            city = {
                id: el.address.city._id,
                type: 'city',
                name: el.address.city.name,
                meta: {
                    population: el.address.city.population,
                },
                children: [],
            };
            formatedData.push(city);
        }

        let district = city.children?.find((d) => d.id === el.address.district._id);

        if (!district) {
            district = {
                id: el.address.district._id,
                type: 'district',
                name: el.address.district.name,
                children: [],
            };
            city.children?.push(district);
        }

        let street = district.children?.find((s) => s.id === el.address.street._id);

        if (!street) {
            street = {
                id: el.address.street._id,
                type: 'street',
                name: el.address.street.name,
                children: [],
            };
            district.children?.push(street);
        }

        const tooltip = `${city.name}, ${city.meta.population} житилей`;
        const user: UserAddress = {
            id: el._id,
            name: el.name,
            type: 'user',
            meta: {
                tooltip: tooltip,
            },
        };
        street.children?.push(user);
    });

    return formatedData;
};
