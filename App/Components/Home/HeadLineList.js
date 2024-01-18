import React from 'react'
import { Image,FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native'

const HeadLineList = ({newslist}) => {
  return (
    <View>
      <FlatList
        data={newslist}
        horizontal
        renderItem={({item}) =>{
          <TouchableOpacity>
            <Image
              source={{
                uri: item.urlToImage,
              }}
              style={{
                height:100,
                width:100,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        }}
      />
    </View>
  )
}

export default HeadLineList

const styles = StyleSheet.create({})