import { Link } from 'react-router'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <h1 className="text-4xl font-bold">
        AI Job Skill Matcher
      </h1>

      <p className="mt-4 text-center text-slate-300">
        Discover jobs that match your skills.
      </p>

      <Link
        to="/login"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Go to Login
      </Link>
    </main>
  )
}

export default Home