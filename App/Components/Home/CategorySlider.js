import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Color from "../../Shared/Color";

const CategorySlider = () => {
  const [active, setactive] = useState(1);
  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Business",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movie",
    },
  ];

  const onCategoryClick=(id)=>{
    setactive(id);
  }

  return (
    <View style={styles.flatlistContainer}>
      <FlatList
        data={categoryList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={ () =>  onCategoryClick(item.id)}>
            <Text
              style={
                item.id == active
                  ? styles.Selectedflatlist
                  : styles.unSelectedflatlist
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  flatlistContainer: {
    marginTop: 25,
  },
  unSelectedflatlist: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.gray,
  },
  Selectedflatlist: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary,
  },
});
