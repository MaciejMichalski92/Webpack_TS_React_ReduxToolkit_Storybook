import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExampleComponent from './ExampleComponent';
import { renderWithProviders } from '../../../test/utils/test-util';

const texts = {
  title: 'Example Component',
  counterValue: 0
};

describe('ExampleComponent', () => {
  it('should render correctly', () => {
    renderWithProviders(<ExampleComponent />);

    expect(
      screen.getByTestId('example-component')
    ).toHaveTextContent(texts.title);
  });
});
