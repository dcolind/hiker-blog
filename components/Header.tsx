import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

function Header() {
  const { data: session, status } = useSession()
    const loading = status === 'loading'

  return (
    <div className="px-6 py-8">
    <header className="flex justify-between p-5 max-w-7xl mx-auto pt-8  rounded-xl bg-slate-400">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-16 object-contain cursor-pointer"
            src="https://webstockreview.net/images/mountain-vector-png-1.png"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          {/* <h3>Follow</h3> */}
        </div>
      </div>

      <div className="flex items-center space-x-5">
    
        <h3 className="border px-4 py-1 rounded-full border-black">
        <p>
          {!session && (
            <>
              <span className="">
                
              </span>
              <a
                href={`/api/auth/signin`}
                className=""
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              <span
                style={{ backgroundImage: `url(${session.user.image})` }}
                className=""
              />
              
              <a
                href={`/api/auth/signout`}
                className=""
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
        </h3>
      </div>
    </header>
    </div>
  );
}

export default Header;