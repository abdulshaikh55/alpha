import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/Button';
import ListItem from '@/components/ListItem';

const ProfilePic = require('./../../assets/images/rick_sanchez.jpg');

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary_bg">
      <View className="m-6 mt-10 flex-row justify-between border-4 border-frame py-5 px-4 rounded-3xl">
        <View>
          <Text className="text-white text-3xl">Profile Name</Text>
          <Text className="text-white text-sm">wubbalubbadubdub@portal.gun</Text>
          <Text className="text-white text-lg">Travelling Since July 2025</Text>
        </View>
        <Image source={ProfilePic} className='rounded-full h-28 w-28 ' />
      </View>

      <View className='px-4 mx-2'>
        <Button screen={"EditProfile"} root={true} value='Edit Profile' />
      </View>

      <View className='m-6'>
        <View className='h-1 w-full my-2 bg-text_light'></View>
        <ListItem iconName='settings' label='App Settings' rightIcon={'arrow-forward-sharp'} />
        <ListItem iconName='people-circle' label='Classmates' rightIcon={'arrow-forward-sharp'} />
        <ListItem iconName='help-circle' label='Get Help' rightIcon={'arrow-forward-sharp'} />
      </View>

    </SafeAreaView>
  )
}

export default Profile