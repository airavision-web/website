'use client';
import { PDFViewer } from '@react-pdf/renderer';
import ReportPDF from './ReportPDF';

export default function PDFViewerClient() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
        <ReportPDF />
      </PDFViewer>
    </div>
  );
}
