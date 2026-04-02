// app.config.js — dynamic config extending app.json
// PostHog token and host are injected via expo-constants extras at build time
const appJson = require('./app.json')

module.exports = {
  ...appJson.expo,
  plugins: [
    ...(appJson.expo.plugins || []),
    'expo-localization',
  ],
  extra: {
    posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
    posthogHost: process.env.POSTHOG_HOST,
  },
}
