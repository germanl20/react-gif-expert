import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
    const inputValue = 'Prueba texto';

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={(val) => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: inputValue}});

        expect(input.value).toBe(inputValue);
    })

    test('Debe hacer submit, blanquearse el input y devolver la palabra escrita', () => {
        // let category = '';
        // const newCategory = (val) => {
        //     category = val;
        // }

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        //expect(category).toBe(inputValue);
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); //Que haya sido llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Que haya sido llamada una vez
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //Que haya sido llamada con el valor del input

    })

    test('No debe de llamar onNewCategory cuando el input esta vacio', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();

    })
})