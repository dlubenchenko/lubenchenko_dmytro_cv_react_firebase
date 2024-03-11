import AppLayout from './components/AppLayout'
import { CvContextProvider } from './context/cv-context'

function App() {

	return (
		<CvContextProvider>
			<AppLayout />
		</CvContextProvider>
	)
}

export default App
