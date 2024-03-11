import { useEffect, useState } from 'react'
import { getImg } from '../../../imgFetch'

const SocialItem = ({ socialItem }) => {
	const [ur, setUr] = useState('')

	useEffect(() => {
		getImg(socialItem.image).then((u) => setUr(u))
	}, [])

	return (
		<div className='social__list-item'>
			<div className='social__list-icon'>
				<img
                className={socialItem.class + ' social__list-ico'}
					src={ur}
					alt={socialItem.alt}
				/>
			</div>
			<div className='social__list-content'>
				<div className='social__list-subject'>{socialItem.title}</div>
				<a target='_blank' className='social__list-link' href={socialItem.link}>
					{socialItem.value}
				</a>
			</div>
			{/* {console.log(socialItem)} */}
		</div>
	)
}

export default SocialItem
