import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'argentina';

    test('Debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('Debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => {
        const gifs = [
            {
                id: '1',
                title: 'Titulo',
                url: 'https://hola.com'
            },
            {
                id: '2',
                title: 'Titulo2',
                url: 'https://hola2.com'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={ category }/>);
        
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})