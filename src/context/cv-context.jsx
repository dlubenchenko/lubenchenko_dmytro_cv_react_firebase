import { createContext, useState, useEffect, useContext } from 'react'
import { fetchDataFromFirebase } from '../dataFetching'

const CvContext = createContext({
	contacts: [],
	loading: true,
	personal: [],
	social: [],
	languages: []
})

export function CvContextProvider({ children }) {
	const [loading, setLoading] = useState(true)
	const [contacts, setContacts] = useState([])
	const [personal, setPersonal] = useState([])
	const [social, setSocial] = useState([])
	const [languages, setLanguages] = useState([])
	const [temp, setTemp] = useState([])
	useEffect(() => {
		async function preload() {
			fetchDataFromFirebase().then((data) => {
				setLoading(true)
				setContacts(data.left.contacts)
				setPersonal(data.left.personal)
				setSocial(data.left.social)
				setLanguages(data.left.languages)
				setTemp({
					contacts: data.left.contacts,
					personal: data.left.personal,
					social: data.left.social,
					languages: data.left.languages
				})                
				setLoading(false)
			})
		}
        preload()
	}, [])

	return (
		<CvContext.Provider value={{ loading, contacts, personal, social, languages, temp }}>
			{children}
		</CvContext.Provider>
	)
}

export default CvContext

export function useCvData() {
	return useContext(CvContext)
}
