import { screen } from '@testing-library/react';
import { renderWithTheme } from '~/utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render white color by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render bigger size', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });
});
