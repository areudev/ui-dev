import { Button } from './components/button'
import Counter from './demos/counter'
import DogFacts from './demos/dog-facts'
import { FizzBuzz } from './demos/fizz-buzz'
import GalacticInputGala from './demos/galactic-input-gala'
import PackingList from './demos/packing-list'
import PokemonSearch from './demos/pokemon'
import PokemonDetail from './demos/pokemon/pokemon-page'

import ThemeToggler from './lib/theming'
import {
	createBrowserRouter,
	RouterProvider,
	Link,
	Outlet,
} from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [],
	},
	{
		path: '/counter',
		element: <Counter />,
		children: [],
	},
	{
		path: '/fizz-buzz',
		element: <FizzBuzz />,
		children: [],
	},
	{
		path: '/galactic-input-gala',
		element: <GalacticInputGala />,
		children: [],
	},
	{
		path: '/packing-list',
		element: <PackingList />,
		children: [],
	},
	{
		path: '/dog-facts',
		element: <DogFacts />,
		children: [],
	},
	{
		path: '/pokemon',
		element: <PokemonSearch />,
		children: [],
	},
	{
		path: '/pokemon/:id',
		element: <PokemonDetail />,
		children: [],
	},
])

function Layout() {
	return (
		<>
			<div className="flex justify-between items-center">
				<nav className="flex items-center">
					<Button variant="link" asChild>
						<Link to="/counter">Counter</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/fizz-buzz">Fizz Buzz</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/galactic-input-gala">Galactic Input Gala</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/packing-list">Packing List</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/dog-facts">Dog Facts</Link>
					</Button>
					<Button variant="link" asChild>
						<Link to="/pokemon">Pokemon</Link>
					</Button>
				</nav>
				<ThemeToggler />
			</div>
			<FizzBuzz />
			<PackingList />
			<Counter />
			<GalacticInputGala />
		</>
	)
}

function App() {
	return <RouterProvider router={router} />
}

export default App
