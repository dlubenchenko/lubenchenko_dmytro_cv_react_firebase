import { useContext } from 'react'
import CvContext from '../../../context/cv-context'
import LanguagesItem from './LanguagesItem'

const Languages = () => {
	const { languages } = useContext(CvContext)

	return (
		<section className='languages aside__languages aside--hr'>
			<h3 className='languages__caption'>Languages</h3>
			<div className='languages__list'>
				{Object.values(languages).map((lang, i) => (
					<LanguagesItem key={Object.keys(languages)[i]} lang={lang} />
				))}
			</div>
		</section>
	)
}

export default Languages
