import Contacts from './Contacts/Contacts'
import Personal from './Personal'
import Social from './Social/Social'
import Languages from './Languag/Languages'
import CvContext from '../../context/cv-context'
import { useContext } from 'react'

const LeftSidebar = () => {
	const { temp } = useContext(CvContext)

	return (
		<div className='aside wrapper__aside'>
			<Personal />
			<Contacts />
			<Social />
			<Languages />
		</div>
	)
}

export default LeftSidebar
