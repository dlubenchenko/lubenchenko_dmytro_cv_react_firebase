import { useEffect, useState } from 'react'
import { getImg } from '../../../imgFetch'

const ContactItem = ({ contact }) => {
	const [ur, setUr] = useState('')

	useEffect(() => {
		getImg(contact.image).then((u) => setUr(u))
	}, [])
	return (
		<div className='contacts__list-item'>
			{/* {console.log(contact)} */}
			<div className='contacts__list-icon'>
				<img className='contacts__list-ico' src={ur} alt={contact.alt} />
			</div>
			<div className='contacts__list-content'>
				<div className='contacts__list-subject'>{contact.title}</div>
				{contact.link ? (
					<a className='contacts__list-link' href={contact.link}>
						{contact.value}
					</a>
				) : (
					<p>{contact.value}</p>
				)}
			</div>
		</div>
	)
}

export default ContactItem
