/**
 * Button Component
 *
 * A reusable button component for navigation using Expo Router.
 *
 * @param {Object} props - Component props
 * @param {string} props.screen - The target screen path (without leading slash).
 * @param {boolean} props.root - If true, navigates to the root path ("/{screen}"), otherwise to "/(tabs)/{screen}".
 * @param {string} props.value - The text to display inside the button.
 *
 * @example
 * <Button screen="profile" root={false} value="Go to Profile" />
 *
 * @returns {JSX.Element} TouchableOpacity button that navigates to the specified route.
 */


import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RelativePathString, useRouter } from 'expo-router'

interface Props {
  screen: string,
  root: boolean,
  value: string,
}

const CourseButton = ({ screen, root, value }: Props) => {
  const router = useRouter();
  const route: RelativePathString = root
    ? ("/" + screen) as RelativePathString
    : ("/(tabs)/" + screen) as RelativePathString;
  return (
    <TouchableOpacity
      className="bg-white px-6 py-3 rounded-lg min-w-40 items-center self-center mb-2 w-full"
      onPress={() => router.push(route)}
    >
      <Text className="text-buttonText text-base font-bold">{value}</Text>
    </TouchableOpacity>
  )
}

export default CourseButton