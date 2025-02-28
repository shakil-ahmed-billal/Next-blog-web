import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gray-100 bg-opacity-50 sticky top-0 backdrop-blur-sm">
      <div className="flex justify-between items-center p-4 w-11/12 mx-auto">
        <div className="">
          <p>MY Blogs</p>
        </div>
        <div className="space-x-2 flex items-center justify-center">
          <Link href={"/"}> Home</Link>
          <Link href={"/blog"}> Blogs</Link>
          <Link href={"/profile"}> Profile</Link>
          {user ? (
            <div className="">
              <LogoutLink>
                <Button variant={"destructive"} className="rounded-full">
                  <LogOut />
                </Button>
              </LogoutLink>
            </div>
          ) : (
            <>
              <LoginLink>
                <Button>Login</Button>
              </LoginLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
