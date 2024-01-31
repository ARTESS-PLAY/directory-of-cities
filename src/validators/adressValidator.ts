import { body } from 'express-validator';

export const createAddressValidator = [
    body('city', 'Отсутствует название города').isLength({ min: 1 }),
    body('district', 'Отсутствует название района').isLength({ min: 1 }),
    body('street', 'Отсутствует название улицы').isLength({ min: 1 }),
    body('user', 'Отсутствует житель').isLength({ min: 1 }),
];
