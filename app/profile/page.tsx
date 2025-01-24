import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  const { getUser , isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/profile");
  }
  
  console.log(user);
  return (
    <div className="py-20">
      <Card className="w-11/12 mx-auto">
        <CardHeader>
          <div className="flex justify-center items-center">
            <Image
              className="rounded-full"
              src={user?.picture || "/blog_logo.png"}
              alt="blog site logo"
              width={80}
              height={80}
            ></Image>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="space-y-2">
              <CardTitle>Name: {user?.given_name}</CardTitle>
              <CardTitle>Email: {user?.email}</CardTitle>
            </div>
          </div>
          <CardContent className="text-center">user id: {user?.id}</CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default page;
