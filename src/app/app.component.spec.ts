import { render, screen, fireEvent } from '@testing-library/angular'
import { AppComponent } from './app.component';

describe('Counter', () => {
  test('should render counter', async () => {
    await render(AppComponent)

    expect(screen.getByText('Hi!'))
  })
});