import Card from './'
import { ThemeProvider } from '../../utils/context'
import { render, screen, fireEvent } from '@testing-library/react'
import { click } from '@testing-library/user-event/dist/click'

describe('Card', () => {
  it("Render l'image", async () => {
    render(
      <ThemeProvider>
        <Card picture="/myPicture.png" />
      </ThemeProvider>
    )
    const image = screen.getByRole('img')
    expect(image.getAttribute('src')).toBe('/myPicture.png')
  })
  it('Modifie le titre', async () => {
    render(
      <ThemeProvider>
        <Card title="Anderson" />
      </ThemeProvider>
    )
    const title = screen.getByText('Anderson')
    fireEvent.click(title.closest('div'))
    expect(title.textContent).toBe('⭐️ Anderson ⭐️')
  })
})
