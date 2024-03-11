import { useContext } from 'react'
import RightSidebar from './Right/RightSidebar'
import LeftSidebar from './Left/LeftSidebar'
import CvContext from '../context/cv-context'
import Loader from './Loader/Loader'

const AppLayout = () => {
	const { loading } = useContext(CvContext)

	if (loading) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
					<Loader />
			</div>
		)
	}

	return (
		<div className='wrapper'>
			<LeftSidebar />
			<RightSidebar />
		</div>
	)
}

export default AppLayout
