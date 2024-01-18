import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Color from "../../Shared/Color";

const TopHeadlineSlider = ({newslist}) => {
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newslist}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{
                uri: item.urlToImage,
              }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />

            <Text
              numberOfLines={2}
              style={{ marginTop: 10, fontSize: 23, fontWeight: "800" }}
            >
              {item.title}
            </Text>

            <Text style={{ marginTop: 5, color: Color.primary }}>
              {item.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TopHeadlineSlider;

const styles = StyleSheet.create({});
