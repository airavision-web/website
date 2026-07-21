import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  coverPage: {
    flexDirection: 'column',
    backgroundColor: '#001f3f', // Navy Blue
    color: '#ffffff',
    height: '100%',
    padding: 40,
    justifyContent: 'space-between'
  },
  logo: {
    width: 150,
    marginBottom: 20,
  },
  headerLogo: {
    width: 100,
    position: 'absolute',
    top: 20,
    right: 30,
  },
  coverTitle: {
    fontSize: 28,
    color: '#f39c12', // Bronze/Orange
    marginBottom: 10,
    marginTop: 20,
  },
  coverSubtitle: {
    fontSize: 16,
    marginBottom: 40,
    color: '#dddddd',
  },
  addressBlock: {
    marginTop: 'auto',
    borderTop: '2px solid #f39c12',
    paddingTop: 15,
  },
  addressText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#dddddd'
  },
  sectionTitle: {
    fontSize: 18,
    color: '#001f3f',
    borderBottom: '1px solid #001f3f',
    paddingBottom: 5,
    marginBottom: 15,
    marginTop: 20,
  },
  text: {
    fontSize: 10,
    color: '#333333',
    lineHeight: 1.5,
    marginBottom: 10,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

export const ReportPDF = () => (
  <Document>
    {/* Cover Page */}
    <Page size="A4" style={styles.coverPage}>
      <View>
        <Image style={styles.logo} src="/logo.png" />
        <Text style={styles.coverTitle}>HOME INSPECTION REPORT</Text>
        <Text style={styles.coverSubtitle}>Comprehensive Property Analysis</Text>
        
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>PREPARED FOR:</Text>
          <Text style={{ fontSize: 18, color: '#ffffff' }}>Mr. ABC</Text>
          
          <Text style={{ fontSize: 14, marginTop: 20, marginBottom: 5 }}>PROPERTY ADDRESS:</Text>
          <Text style={{ fontSize: 16, color: '#ffffff' }}>XYZ</Text>
          
          <Text style={{ fontSize: 14, marginTop: 20, marginBottom: 5 }}>INSPECTION DATE:</Text>
          <Text style={{ fontSize: 16, color: '#ffffff' }}>Apr 15 2026</Text>
        </View>
      </View>
      
      <View style={styles.addressBlock}>
        <Text style={{ fontSize: 14, marginBottom: 5, color: '#f39c12' }}>Aira Vision Pvt. Ltd.</Text>
        <Text style={styles.addressText}>Operating in Hyderabad, Delhi and Bengaluru.</Text>
        <Text style={styles.addressText}>Office address: 2nd floor, Vaibhava lakshmi Nilayam, plot# 608,</Text>
        <Text style={styles.addressText}>Aparna Hillpark Rd, PJR Layout, Chanda Nagar, Hyderabad, Telangana 500050</Text>
      </View>
    </Page>

    {/* Content Page 1 */}
    <Page size="A4" style={styles.page}>
      <Image style={styles.headerLogo} src="/logo.png" />
      
      <View style={{ marginTop: 50 }}>
        <Text style={styles.sectionTitle}>1. Introduction & Disclaimer</Text>
        <Text style={styles.text}>
          This report is intended for the sole use of the client and is not to be relied upon or shared wholly and solely, except for the purposes provided herein.
        </Text>
        <Text style={styles.text}>
          It is clarified that the report is intended to operate as a visual aid to the client and as such cannot be given unqualified reliance. The report shared is solely intended for use by the client for rectifications of the snags reported and is the property of Aira Vision Pvt. Ltd.
        </Text>
        
        <Text style={styles.sectionTitle}>2. Inspection Findings</Text>
        <Text style={styles.text}>
          [SAMPLE DATA] Living Room: No major visual defects noted at the time of inspection. Walls are in acceptable condition with minor touch-ups required.
        </Text>
        <Text style={styles.text}>
          [SAMPLE DATA] Kitchen: Plumbing fixtures appear fully functional. Electrical outlets tested normal and GCFI protected.
        </Text>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `Page ${pageNumber} of ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

export default ReportPDF;
