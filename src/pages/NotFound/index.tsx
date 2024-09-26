import lang from '@/locales/en-US.json'

import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-xl text-gray-700 mt-4">{lang.notFound.description}</p>
        <Link to="/" className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
          {lang.notFound.buttonBack}
        </Link>
      </div>
    </div>
  )
}
