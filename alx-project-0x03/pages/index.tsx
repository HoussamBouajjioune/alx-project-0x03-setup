// pages/index.tsx
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-10">Welcome to Splash App</h1>
        <p className="mt-4 text-gray-600">Start exploring the platform today!</p>
      </div>
    </Layout>
  );
}
