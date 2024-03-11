import { useContext } from 'react'
import CvContext from '../../../context/cv-context'
import SocialItem from './SocialItem'

const Social = () => {
	const { social } = useContext(CvContext)
	return (
		<section className='social aside__social aside--hr'>
			<h3 className='social__caption'>Social</h3>
			<div className='social__list'>
				{/* {console.log(social)} */}
				{Object.values(social).map((socialItem) => (
					<SocialItem key={socialItem.title} socialItem={socialItem}/>
				))}
			</div>
		</section>
	)
}

export default Social
