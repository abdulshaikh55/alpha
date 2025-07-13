import { View, Text, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import courses from '@/assets/data/courses'
import CourseButton from '@/components/CourseButton';
import Progress from '@/components/Progress';
import Header from '@/components/Header';

const User = {
  current_course_id: 3,
  courses_completion: [
    { 1: 25 },
    { 3: 35 },
    { 5: 1 },
    { 7: 100 }
  ],
}

const Journey = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className='mx-6 mt-10'>
        <Text className="mb-6 text-text_light text-4xl text-center">Your Journey</Text>
      </View>

      <View className=" rounded-s-sm flex-1 rounded-3xl mx-6 mt-0">
        {/* latest course */}
        <Header title='Your Latest Path' />
        <View>
          <View style={{ position: 'relative' }} className="items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-40 justify-between overflow-hidden">
            {(() => {
              const currentCourse = courses.find(course => course.id === User.current_course_id);
              return (
                <>
                  <ImageBackground
                    source={currentCourse?.icon}
                    style={{ width: 100, height: 100 }}
                    imageStyle={{ opacity: 0.25 }}
                    className='absolute top-0 right-0'
                  >
                  </ImageBackground>

                  <Text className='text-text_light font-semibold my-2 text-lg'>{currentCourse?.name}</Text>
                  <Progress progress={0.35} color='#ffd33d' width={290} height={15} />
                  <CourseButton screen='' root={true} value='Continue your Journey' />
                </>
              );
            })()}
          </View>
        </View>

        <FlatList
          data={courses}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Header title="Your Courses" />}
          contentContainerStyle={{ paddingTop: 0, paddingBottom: 24, flexGrow: 1 }}
          renderItem={({ item, index }) => (
            <View style={{ position: 'relative' }} className="items-start bg-white/10 rounded-lg px-4 py-2 mb-2 flex-col h-40 justify-between overflow-hidden">
              <ImageBackground
                source={item.icon}
                style={{ width: 100, height: 100 }}
                imageStyle={{ opacity: 0.25 }}
                className='absolute top-0 right-0'
              >
              </ImageBackground>
              <Text className='text-text_light font-semibold my-2 text-lg'>{item.name}</Text>
              <CourseButton screen='' root={true} value='Continue your Journey' />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Journey