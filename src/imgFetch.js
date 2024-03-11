import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAAvy3NEaLz4R5C7dY_e18MhM-OGCd-WD4',
	authDomain: 'luberchenko-cv-react-firebase.firebaseapp.com',
	databaseURL:
		'https://luberchenko-cv-react-firebase-default-rtdb.firebaseio.com',
	projectId: 'luberchenko-cv-react-firebase',
	storageBucket: 'luberchenko-cv-react-firebase.appspot.com',
	messagingSenderId: '32629010980',
	appId: '1:32629010980:web:4e28b2a1001fedd67b1eb1',
}

export let loading = false

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export function getImg(url) { 
    return getDownloadURL(ref(storage, url))
	.then((url) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url)
		return url
	})
	.catch((error) => {
		console.error('Error fetching image from Firebase:', error)
		throw error
	})

 }

