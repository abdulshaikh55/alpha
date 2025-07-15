import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import React from 'react';
import Progress from './Progress';
import CourseButton from './CourseButton';

interface LastVisitedCourseCardProps {
  icon: ImageSourcePropType,
  name?: string,
  progress?: number,
}

const LastVisitedCourseCard: React.FC<LastVisitedCourseCardProps> = ({ icon, name, progress }) => {
  return (
    <View className="relative items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-40 justify-between overflow-hidden">
      <ImageBackground
        source={icon}
        style={{ width: 100, height: 100 }}
        imageStyle={{ opacity: 0.25 }}
        className='absolute top-0 right-0'
      >
      </ImageBackground>

      <Text className='text-text_light font-semibold my-2 text-lg'>{name ? name : "MetaGlobals"}</Text>
      <Progress progress={progress ? progress : 0} color='#ffd33d' width={290} height={15} />
      <CourseButton screen='' root={true} value='Continue your Journey' />

    </View>
  )
}

export default LastVisitedCourseCard