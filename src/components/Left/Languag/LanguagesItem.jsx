import { useEffect, useState } from "react"
import { getImg } from "../../../imgFetch"

const LanguagesItem = ({ lang }) => {
	const [ur, setUr] = useState('')

	useEffect(() => {
		getImg(lang.image).then((u) => setUr(u))
	}, [])
	return (
		<div className='languages__list-item'>
		{/* {console.log(lang)} */}
			<div className='languages__list-icon'>
				<img
					className='languages__list-ico'
					src={ur}
					alt={lang.alt}
				/>
			</div>
			<div className='languages__list-content'>
				<div className='languages__list-subject'>{lang.title}</div>
				<div className='languages__list-link'>{lang.value}</div>
			</div>
		</div>
	)
}

export default LanguagesItem
