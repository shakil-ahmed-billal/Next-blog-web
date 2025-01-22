import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="">
          <Image
            src={"/blog_logo.png"}
            alt="blog site logo"
            width={80}
            height={80}
          ></Image>
        </div>
        <div className="space-x-2 flex items-center justify-center">
          <Link href={"/"}> Home</Link>
          {user ? (
            <div className="">
              <LogoutLink>
                <Button>Logout</Button>
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
    </>
  );
};

export default Header;
