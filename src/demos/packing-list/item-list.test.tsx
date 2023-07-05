import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { render, screen } from 'test/utilities'
import { ItemList } from './item-list'
import { store } from './store'
import { add } from './store/items-slice'

it('should render', async () => {
	render(<ItemList title="Unpacked Items" packed={false} />, {
		wrapper: ({ children }: PropsWithChildren) => (
			<Provider store={store}>{children}</Provider>
		),
	})
})

it('should display items', () => {
	store.dispatch(add({ name: 'Lucky beanie' }))

	render(<ItemList title="Unpacked Items" packed={false} />, {
		wrapper: ({ children }: PropsWithChildren) => (
			<Provider store={store}>{children}</Provider>
		),
	})

	expect(screen.getByTestId('unpacked-items-list')).toMatchInlineSnapshot(`
    <ul
      class="flex flex-col gap-2"
      data-testid="unpacked-items-list"
    >
      <li
        class="flex items-center justify-between gap-2"
      >
        <div
          class="flex items-center gap-2"
        >
          <button
            aria-checked="false"
            class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            data-state="unchecked"
            id="toggle-1"
            role="checkbox"
            type="button"
            value="on"
          />
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="toggle-1"
          >
            Lucky beanie
          </label>
          <input
            class="h-10 w-full rounded-md border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 py-0 text-sm hidden"
            value="Lucky beanie"
          />
        </div>
        <div>
          <div
            class="flex gap-2"
          >
            <button
              aria-label="Edit Lucky beanie"
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
            >
              Edit
            </button>
            <button
              aria-label="Remove Lucky beanie"
              class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 rounded-md px-3"
            >
              Remove
            </button>
          </div>
        </div>
      </li>
    </ul>
	`)
})
