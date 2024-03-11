import { useContext } from 'react'
import CvContext from '../../../context/cv-context'
import ContactItem from './ContactItem'

const Contacts = () => {
	const { temp } = useContext(CvContext)
	return (
		<section className='contacts aside__contacts aside--hr'>
			<h3 className='contacts__caption'>Contacts</h3>
			<div className='contacts__list'>
				{Object.values(temp.contacts).map((contact) => (
					<ContactItem key={contact.title} contact={contact} />
				))}
			</div>
		</section>
	)
}

export default Contacts
