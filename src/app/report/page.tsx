'use client';
import dynamic from 'next/dynamic';

const PDFViewerClient = dynamic(() => import('@/components/PDFViewerClient'), {
  ssr: false,
});

export default function ReportPage() {
  return (
    <main>
      <PDFViewerClient />
    </main>
  );
}
