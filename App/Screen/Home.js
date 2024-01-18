import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native'
import CategorySlider from '../Components/Home/CategorySlider'
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../Services/GlobalApi'
import HeadLineList from "../Components/Home/HeadLineList";


const Home = () => {
  const [newslist, setnewlist] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    // console.log(result);
    setnewlist(result.articles);
  };

  return (
    <View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'center'}}>
            <Text style={styles.appName}>Akshay News</Text>
            <Ionicons name="notifications-outline" size={25} color="black" />
        </View>
        <CategorySlider/>  
        <TopHeadlineSlider newslist={newslist}/>
        <HeadLineList newslist={newslist}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    appName:{
        fontSize:24,
        fontWeight:"bold",
        color:Color.primary
    }
})