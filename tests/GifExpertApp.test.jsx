import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    test('Debe de guardar la categoria que escribimos', () => { 
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'argentina'}});
        fireEvent.submit(form);

        expect(screen.getByRole('heading', {level: 3}).innerHTML).toBe('argentina'); //Si existe, significa que se guardo la categoria y la va a mostrar
    })
})