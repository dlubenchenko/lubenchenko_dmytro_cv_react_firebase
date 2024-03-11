import { useContext, useEffect, useState } from 'react'
import CvContext from '../../context/cv-context'
import { getImg } from '../../imgFetch'


const Personal = () => {
	const { personal } = useContext(CvContext)
	const [ur, setUr] = useState('')

	useEffect(() => {
		getImg(personal.photo.link).then((u) => setUr(u))
	}, [])

	return (
		<div className='personal aside__personal aside--hr'>
		{/* {console.log(personal.photo)} */}
			<div className='personal__image'>
				<img
					className='personal__userpic'
					src={ur}
					alt={personal.photo.alternative}
				/>
			</div>
			<div className='personal__heading'>
				<h1 className='personal__heading-title'>
					{personal.firstName} {personal.lastName}
				</h1>
				<div className='personal__heading-position'>{personal.position}</div>
			</div>
			<div className='personal__quote'>
				<div className='personal__quote-text'>{personal.quote}</div>
				<div className='personal__quote-author'>{personal.quoteAuthor}</div>
			</div>
		</div>
	)
}

export default Personal
