export const metadata = {
  title: "Terms & Conditions - Aira Vision",
  description: "Terms and conditions for Aira Vision construction and project management services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-[60vh]">
      <h1 className="font-display-lg text-display-lg md:text-display-lg font-bold text-primary mb-stack-md">
        Terms & Conditions
      </h1>
      <div className="prose max-w-none text-on-surface-variant font-body-lg space-y-4">
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        <p>
          By accessing and using Aira Vision's website and services, you agree to comply with and be bound by the following terms and conditions of use.
        </p>
        <p className="italic text-gray-500">
          {/* ponytail: placeholder content for terms */}
          Detailed terms and conditions content goes here. Please provide the official legal text to replace this placeholder.
        </p>
      </div>
    </main>
  );
}
