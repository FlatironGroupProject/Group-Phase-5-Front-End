import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout",{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    router.push('/');
  }

  return (
    <header className="fixed top-0 left-0 right-0">
      <nav className="bg-goblue border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <a
              href="/"
              className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white"
            >
              WorkWell
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:w-auto">
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <a href="/Home" className="px-4 py-2 text-white bg-gradient-to-br from-goblue to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div>
              <a href="/LogIn" className="list-none px-4 py-2 text-white bg-gradient-to-br from-goblue to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Log in
              </a>
            </div>
            <div>
              <a href="/SignUp" className="list-none px-4 py-2 text-white bg-gradient-to-br from-goblue to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Sign Up
              </a>
            </div>
            <form onSubmit={handleLogout} className="inline">
              <button type="submit" className="px-4 py-2 text-white bg-gradient-to-br from-goblue to-black rounded shadow-md hover:bg-blue-800 md:hover:bg-blue-700 md:hover:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
