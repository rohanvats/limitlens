import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.limitlens',
  appName: 'limitlens',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '891600124643-milg6gi5i82o8v2747rmj9r4mbnh6d61.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;

// 891600124643-milg6gi5i82o8v2747rmj9r4mbnh6d61.apps.googleusercontent.com
