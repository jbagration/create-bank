import { initializeApp } from 'firebase/app'
import { ConfirmationResult, getAuth, RecaptchaVerifier } from 'firebase/auth'

declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier
        confirmationResult: ConfirmationResult
    }
}

const firebaseConfig = {
    apiKey: 'AIzaSyBEhSla3-Uate2WL5497Dp61hYVGCyXmBc',
    authDomain: 'afinnity-bank.firebaseapp.com',
    projectId: 'afinnity-bank',
    storageBucket: 'afinnity-bank.appspot.com',
    messagingSenderId: '271114379903',
    appId: '1:271114379903:web:8747a713c8fe8b838ad54a',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
