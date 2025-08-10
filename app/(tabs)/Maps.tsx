import courses from '@/assets/data/courses'
import Header from '@/components/Header'
import MapButton from '@/components/MapButton'
import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Maps = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className=" rounded-s-sm flex-1 rounded-3xl m-6 mt-0">
        <FlatList
          data={courses}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<Header title="Maps" style="m-6 mt-10" textStyle="mb-6 text-text_light text-4xl text-center" />}
          showsVerticalScrollIndicator={false}
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
              <MapButton screen='' root={true} value='Start Journey' />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Maps