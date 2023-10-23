import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-issues-reproduction',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    iosScheme: 'httpsionic',
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    SSLPinning: {
      certs: ['certs/server.cer'],
      excludedDomains: []
    },
  }
};

export default config;
