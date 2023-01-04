import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

const title = 'Titulo';
const url = 'https://prueba.com/';

describe('Pruebas en GifItem', () => {
    test('Evaluar Snapshot', () => {
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
    })

    test('Debe existir el titulo y la url en la img', () => {
        render(<GifItem title={ title } url={ url } />);
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe existir el titulo', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})