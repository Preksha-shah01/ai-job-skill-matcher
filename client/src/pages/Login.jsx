import { Link } from 'react-router'

function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
      <h1 className="text-4xl font-bold">
        Login Page
      </h1>

      <p className="mt-4 text-slate-300">
        Authentication will be implemented later.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </main>
  )
}

export default Login