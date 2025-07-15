import SearchBar from "@/components/SearchBar";
import { Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LastVisitedCourseCard from "@/components/LastVisitedCourseCard";
import courses from "@/assets/data/courses";
import { Ionicons } from "@expo/vector-icons";
const banner = require("@/assets/images/banner.png");

const current_course_id: number = 3;

interface VProps {
  iconName: string,
  title: string,
}

const ValueCard: React.FC<VProps> = ({ iconName, title }) => {
  return (
    <View className="flex-col border-2 border-frame bg-white/10 h-36 w-36 rounded-md items-center justify-center gap-2" >
      <Ionicons name={iconName as any} color={"#ffd33d"} size={36} />
      <Text className="text-text_light">{title}</Text>
    </View>
  )
}

export default function Index() {
  let lastVisited = courses[current_course_id];
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className="mx-6">
        <View className="items-center mt-6">
          <SearchBar
            clicked={clicked}
            setClicked={setClicked}
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
        </View>
        <Text className="text-text_light font-bold text-2xl mt-3">Hello Rick!</Text>

        <View className="mt-4">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
            <ValueCard iconName="medal" title="Your XP" />
            <ValueCard iconName="hammer" title="Projects" />
            <ValueCard iconName="nuclear" title="Insights" />
            <ValueCard iconName="trophy" title="Achievements" />
            <ValueCard iconName="people" title="Community" />
          </ScrollView>
        </View>

        {/* User last visited course */}
        <View>
          <Text className="font-lato font-semibold text-gray-300 text-lg my-3 mt-6">Last Visited</Text>
          <LastVisitedCourseCard name={lastVisited.name} icon={lastVisited.icon} progress={0.35} />
        </View>

        {/* Rewards Banner */}
        <View className="w-full h-40 my-4 rounded-xl overflow-hidden">
          <Image
            source={banner}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

