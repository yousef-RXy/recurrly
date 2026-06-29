import { Link, useLocalSearchParams } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);
const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>Subscription {id} Details</Text>
      <Link href="/">Go back</Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
