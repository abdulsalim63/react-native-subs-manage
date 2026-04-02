import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { usePostHog } from "posthog-react-native";
import { Text, View } from "react-native";

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog();

  useEffect(() => {
    if (id) {
      posthog.capture("subscription_details_viewed", {
        subscription_id: id,
      });
    }
  }, [id]);

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href="/">Go Back</Link>
    </View>
  );
};

export default SubscriptionsDetails;
