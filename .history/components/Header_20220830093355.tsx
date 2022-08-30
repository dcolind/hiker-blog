import Link from "next/link";

function Header() {
  return (
    <div className="px-8">
    <header className="flex justify-between p-5 max-w-7xl mx-auto pt-8  rounded-xl bg-slate-400">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-20 object-contain cursor-pointer"
            src="https://webstockreview.net/images/mountain-vector-png-1.png"
            alt=""
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>

      <div className="flex items-center space-x-5">
    
        <h3 className="border px-4 py-1 rounded-full border-black">
          Sign In
        </h3>
      </div>
    </header>
    </div>
  );
}

export default Header;