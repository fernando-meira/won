import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should be render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/logo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open and close mobile menu.', () => {
    renderWithTheme(<Menu />);

    // Selecionar o menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Clicar no botão de abrir o menu e verificar se ele abriu.
    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // Clicar no botão de fechar o menu e verificar se ele fechou.
    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
