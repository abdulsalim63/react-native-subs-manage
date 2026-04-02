<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Recurrly subscription management app (Expo / React Native 0.81.5). The integration covers the full user lifecycle — from sign-up through daily usage to sign-out — using `posthog-react-native@4.39.2`.

## Changes summary

- **`app.config.js`** (new): Dynamic Expo config that exposes `POSTHOG_PROJECT_TOKEN` and `POSTHOG_HOST` from `.env` via `expo-constants` extras. Replaces `app.json` as the active config. Also adds the required `expo-localization` plugin.
- **`src/config/posthog.ts`** (new): PostHog client singleton configured from `Constants.expoConfig.extra`, with production-safe defaults (disabled if token is missing, batching, retry, feature flags).
- **`app/_layout.tsx`**: Wrapped the app tree with `PostHogProvider` (inside `ClerkProvider`), added manual screen tracking with `posthog.screen()` on pathname changes via `useEffect`.
- **`app/(auth)/sign-in.tsx`**: Identifies the user and captures `user_signed_in` on successful login; captures `user_sign_in_failed` with error details on failure.
- **`app/(auth)/sign-up.tsx`**: Captures `user_signed_up` on form submit; identifies the user and captures `user_email_verified` after email code verification completes.
- **`app/(tabs)/settings.tsx`**: Captures `user_signed_out` and calls `posthog.reset()` before Clerk sign-out.
- **`app/(tabs)/index.tsx`**: Captures `subscription_card_expanded` with subscription metadata when a card is expanded on the home screen.
- **`app/subscriptions/[id].tsx`**: Captures `subscription_details_viewed` with the subscription ID on mount.

## Events

| Event | Description | File |
|-------|-------------|------|
| `user_signed_up` | User submits sign-up form successfully | `app/(auth)/sign-up.tsx` |
| `user_email_verified` | User completes email verification during sign-up | `app/(auth)/sign-up.tsx` |
| `user_signed_in` | User signs in successfully | `app/(auth)/sign-in.tsx` |
| `user_sign_in_failed` | Sign-in attempt returned an error | `app/(auth)/sign-in.tsx` |
| `user_signed_out` | User signs out via Settings | `app/(tabs)/settings.tsx` |
| `subscription_card_expanded` | User expands a subscription card to view details | `app/(tabs)/index.tsx` |
| `subscription_details_viewed` | User opens the subscription detail screen | `app/subscriptions/[id].tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/363324/dashboard/1422971
- **Sign-up to Email Verification Funnel**: https://us.posthog.com/project/363324/insights/SuXkr6Kp
- **Daily Active Users (Sign-ins)**: https://us.posthog.com/project/363324/insights/Hn8RA29U
- **Sign-in Success vs Failure**: https://us.posthog.com/project/363324/insights/Xur9478Z
- **Subscription Card Engagement**: https://us.posthog.com/project/363324/insights/XPvk1QMX
- **Churn Signal: Daily Sign-outs**: https://us.posthog.com/project/363324/insights/Uj1cYKar

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
