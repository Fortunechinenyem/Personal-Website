import Layout from "@/app/components/Layout";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <section className="mt-20">
        <h2 className="text-3xl font-bold capitalize">
          {slug.replace("-", " ")}
        </h2>
        <p className="text-gray-600 mt-2">
          This is where the blog content will go.
        </p>
      </section>
    </Layout>
  );
};

export default BlogPost;
