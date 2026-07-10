export const metadata = {
  title: "Blog & Insights - Aira Vision",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-primary py-20 text-center">
        <h1 className="text-display-lg font-bold text-white mb-4">Blog & Insights</h1>
        <p className="text-body-lg text-white/80 max-w-2xl mx-auto">
          Industry news, project management tips, and home inspection advice.
        </p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        <p className="text-body-lg text-on-surface-variant">Blog posts list goes here...</p>
      </div>
    </div>
  );
}
