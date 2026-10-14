import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        services: resolve(import.meta.dirname, 'services.html'),
        industries: resolve(import.meta.dirname, 'industries.html'),
        products: resolve(import.meta.dirname, 'products.html'),
        msp: resolve(import.meta.dirname, 'msp.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        careers: resolve(import.meta.dirname, 'careers.html'),
        whoWeAre: resolve(import.meta.dirname, 'who-we-are.html'),
        whatWeDo: resolve(import.meta.dirname, 'what-we-do.html'),
        valuesEthics: resolve(import.meta.dirname, 'values-ethics.html'),
        leadership: resolve(import.meta.dirname, 'leadership.html'),
        platformDevelopment: resolve(import.meta.dirname, 'service-platform-development.html'),
        platformDevelopmentAlias: resolve(import.meta.dirname, 'platform-development.html'),
        hardwareDesign: resolve(import.meta.dirname, 'service-hardware-design-services.html'),
        hardwareDesignAlias: resolve(import.meta.dirname, 'hardware-design-services.html'),
        embeddedSoftware: resolve(import.meta.dirname, 'service-embedded-software.html'),
        embeddedSoftwareAlias: resolve(import.meta.dirname, 'embedded-software.html'),
        internetOfThings: resolve(import.meta.dirname, 'service-internet-of-things.html'),
        internetOfThingsAlias: resolve(import.meta.dirname, 'internet-of-things.html'),
        artificialIntelligence: resolve(import.meta.dirname, 'service-artificial-intelligence.html'),
        artificialIntelligenceAlias: resolve(import.meta.dirname, 'artificial-intelligence.html'),
        mobileWeb: resolve(import.meta.dirname, 'service-mobile-web.html'),
        mobileWebAlias: resolve(import.meta.dirname, 'mobile-web.html'),
        cybersecurity: resolve(import.meta.dirname, 'service-cybersecurity.html'),
        cybersecurityAlias: resolve(import.meta.dirname, 'cybersecurity.html'),
        cloudServices: resolve(import.meta.dirname, 'service-cloud-services.html'),
        cloudServicesAlias: resolve(import.meta.dirname, 'cloud-services.html'),
        manufacturing: resolve(import.meta.dirname, 'manufacturing.html'),
        medical: resolve(import.meta.dirname, 'industry-medical.html'),
        medicalAlias: resolve(import.meta.dirname, 'medical.html'),
        industrial: resolve(import.meta.dirname, 'industry-industrial.html'),
        industrialAlias: resolve(import.meta.dirname, 'industrial.html'),
        consumerElectronics: resolve(import.meta.dirname, 'industry-consumer-electronics.html'),
        consumerElectronicsAlias: resolve(import.meta.dirname, 'consumer-electronics.html'),
        semiconductor: resolve(import.meta.dirname, 'industry-semiconductor.html'),
        semiconductorAlias: resolve(import.meta.dirname, 'semiconductor.html'),
        designVerification: resolve(import.meta.dirname, 'design-verification.html'),
        physicalDesign: resolve(import.meta.dirname, 'physical-design.html'),
        verificationValidation: resolve(import.meta.dirname, 'verification-validation.html'),
        rtlDesign: resolve(import.meta.dirname, 'rtl-design.html'),
        erpSap: resolve(import.meta.dirname, 'erp-sap.html'),
        erpDynamics365: resolve(import.meta.dirname, 'erp-dynamics-365.html'),
        erpOracle: resolve(import.meta.dirname, 'erp-oracle.html'),
        erpWorkday: resolve(import.meta.dirname, 'erp-workday.html'),
        productOne: resolve(import.meta.dirname, 'product-1.html'),
        productTwo: resolve(import.meta.dirname, 'product-2.html'),
        productThree: resolve(import.meta.dirname, 'product-3.html')
      }
    }
  }
});
