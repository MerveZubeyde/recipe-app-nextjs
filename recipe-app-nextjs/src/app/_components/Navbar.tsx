
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";


export const Navbar = async () => {
  const session  = await getSession();
  const user = session?.user || null;

  return (
    <nav>
      <ul className="flex gap-8 justify-end m-8 text-gray-900">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
        {user && (
          <>
            <li>
              <Link href="/recipes">Add recipe</Link>
            </li>
            <li>
              <Link href="/recipes">Settings</Link>
            </li>
          </>
        )}

        <li>
          {user ? (
            <a href="/api/auth/logout">Logout</a>
          ) : (
            <a href="/api/auth/login">Login</a>
          )}
        </li>
      </ul>
    </nav>
  );
};
