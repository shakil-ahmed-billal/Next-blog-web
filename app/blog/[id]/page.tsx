import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string; }>;
}

const Page = async ({ params }: PageProps) => {
  // Await the params directly
  const { id } = await params;

  

  // Fetch post data using the dynamic ID
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch post data");
  }

  const post = await response.json();
  const { title, body } = post || {};

  return (
    <div className="py-20">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{body}</CardDescription>
        </CardContent>
        <CardFooter>
          <Link href={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
