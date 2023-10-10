import React, { useState } from "react"
import { View, Image, Text } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import LinearGradient from "react-native-linear-gradient"
import axios from 'axios';


function Details({navigation}){

  const data={ImgUrl: require("./images/avatarposter4.jpg"), tImgUrl: require("./images/avatar.webp"), launchDate: "2022", language: "English", ageRes: "U/A 13+", des: "Set more than a decade after the first film, dive into the story of the Sully family, the lengths they go to keep each other safe and the tragedies they endure", category: "Science Fiction",
             tH: 50, tW: "70%", tl: "15%", tt: 5}
  const seasons = [1,2,3];
  let eps;
  const [S, setS] = useState(0);
  const [EpsH, setEpsH] = useState(0);
  const [EpsW, setEpsW] = useState(0);
  const [Epsds, setEpsds] = useState([{
    "date": "11 Apr 2013",
    "duration": "40min",
    "id": 1,
    "vurl": "http://192.168.1.4/",
    "imgURL": "http://192.168.1.4/",
    "etitle": "Bheem fights Bhishma",
    "sno": "1",
    "epTag": "S1 E1"
}]);

  const setSeason = async (sno) =>{
        setEpsH("100%");
        setEpsW("100%");
        setS(sno);

        try {
            const response = await axios.get(`http://192.168.1.3:8080/Episodes?Sno=${sno}`);
            setEpsds(response.data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
  }

  function clsSeason(){
    setEpsH(0);
    setEpsW(0);
  }

  
            

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>

       <ScrollView style={{backgroundColor: "transparent"}}>
       <View style={{height: 300, width: "95%", backgroundColor: "red", borderRadius: 10, left: 10, top: 10}}>
            <Image source={data.ImgUrl} style={{height: 300, width: "100%", borderRadius: 10}}/>
        </View>
         <LinearGradient style={{height: 80, width: "100%", position: "absolute",top: 230}}  colors={['transparent', 'black']}></LinearGradient>
           
           <Image source={data.tImgUrl} style={{height: data.tH, width: data.tW, left: data.tl, top: data.tt}}/>
           <View style={{height: 25, width: "50%", backgroundColor: "rgb(72, 72, 72)", left: "26.5%", top: 13, justifyContent: "center", alignItems: "center", 
            borderRadius: 5}}> 
              <Text style={{color: "white", fontWeight: 600, }}>{data.launchDate}  |  {data.language}  |  {data.ageRes}</Text>
           </View>

         <TouchableOpacity style={{height: 45, width: "92%", backgroundColor: "white", left: 15, borderRadius: 10, top: 25}}
         onPress={()=>navigation.navigate("Watch")}>
            <Image source={require("./images/Play.png")} style={{height: 18, width: 18, top: "29%", left: "38%"}}/>
             <Text style={{color: "black", fontSize: 18, fontWeight: 600, position: "absolute", left: "46%", top: 9}}>Watch</Text>
         </TouchableOpacity>

         <View style={{height: 100, width: "100%", backgroundColor: "black", top: 40}}>
            <Text style={{color: "gray", left: 15, width: "94%", fontWeight: 500}}>{data.des}</Text>
            <Text style={{color: "white", fontWeight: 500, left: 15, top: 5}}>|  {data.category}  |</Text>
         </View>
         <View style={{paddingBottom: 50, width: "100%", backgroundColor: "black", top: 40}}>
        
         {seasons.map((item, index)=>(
            <TouchableOpacity key={index} style={{height: 40, width: "50%", left: 10, backgroundColor: "white", marginTop: 10, justifyContent: "center", alignItems: "center", borderRadius: 10}}
            onPress={()=>setSeason(item)}>
                <Text style={{color: "black", fontWeight: 600, fontSize: 18}}>Season {item}   </Text>
            </TouchableOpacity>
         ))}
          
         </View>
       </ScrollView>

       <View style={{height: EpsH, width: EpsW, backgroundColor: "black"}}>
        <TouchableOpacity style={{height: 30, width: 30, left: "90%", top: 5}}
        onPress={()=>clsSeason()}>
            <Image source={require("./images/close.png")} style={{height: 30, width: 30}}/>
        </TouchableOpacity>
        <Text style={{color: "white", fontWeight: 600, fontSize: 20, top: -23, left: 10}}>Season {S}</Text>
        {Epsds.map((item, index)=>(
            <View style={{height: 100, width: "100%", backgroundColor: "red", marginTop: 5}}>
                <View style={{height: 90, width: "35%", backgroundColor: "blue", top: 5, left: 5}}></View>
            </View>
        ))}
       </View>
        </View>
    )
}

export default Details