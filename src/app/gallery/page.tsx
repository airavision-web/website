export const metadata = {
  title: "Gallery - Aira Vision",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-primary py-20 text-center">
        <h1 className="text-display-lg font-bold text-white mb-4">Gallery</h1>
        <p className="text-body-lg text-white max-w-2xl mx-auto">
          A visual showcase of our work and precision on the ground.
        </p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        <p className="text-body-lg text-blue-900">Gallery grid goes here...</p>
      </div>
    </div>
  );
}
