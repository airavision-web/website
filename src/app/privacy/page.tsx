export const metadata = {
  title: "Privacy Policy - Aira Vision",
  description: "Privacy policy for Aira Vision construction and project management services.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-[60vh]">
      <h1 className="font-display-lg text-display-lg md:text-display-lg font-bold text-blue-900 mb-stack-md">
        Privacy Policy
      </h1>
      <div className="prose max-w-none text-blue-900 font-body-lg space-y-4">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        <p>
          Aira Vision is committed to protecting your privacy. This privacy policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>
        <p className="italic text-blue-900">
          {/* ponytail: placeholder content for privacy */}
          Detailed privacy policy content goes here. Please provide the official legal text to replace this placeholder.
        </p>
      </div>
    </main>
  );
}
