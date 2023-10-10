import React from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import Video from 'react-native-video';

function New({navigation}){

    const data = [{ImgUrl: require("./images/avatar.webp"), ImgUrl2: require("./images/avatarposter.jpg"), language: "English", AgeRes: "U/A 13+", category: "Action", des: "Chance brings together four talented musicians and then", launchdate: "Oct 11"},
                   {ImgUrl: "", ImgUrl2: "", language: "English", AgeRes: "U/A 13+", category: "Action", des: "Chance brings together four talented musicians and then", launchdate: "Oct 11"}];

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>
         <View style={{height: 45, width: "100%", backgroundColor: "black"}}>
            <Text style={{color: "white", fontWeight: 500, fontSize: 18, left: "37%", top: 10}}>Coming Soon</Text>
           <View style={{height: 2, width: "40%", backgroundColor: "white", borderRadius: 10, bottom: 0, position: "absolute", left: "32%"}}></View>
         </View>
  
  
        <ScrollView style={{backgroundColor: "rgb(53, 53, 53)"}}>
        
        {data.map((item,index)=>(
            <View key={index} style={{height: 400, width: "100%", backgroundColor: "black", marginTop: 10}}>
             <Image source={item.ImgUrl2} style={{height: 200, width: "100%"}}/>
              <Image source={item.ImgUrl} style={{width: "50%", height: 30, top: 15, left: 10}}/>
               <Text style={{color: "white", fontWeight: 500, fontSize: 13, top: 20, left: 10}}>Releasing on {item.launchdate}</Text>

               <Text style={{color: "rgb(163, 162, 162)", top: 30, left: 10, fontWeight: 500, fontSize: 13}}>{item.language} | </Text>

               <View style={{height: 20, width: 50, backgroundColor: "rgb(53, 53, 53)", position: "absolute", top: 277, left: 65, borderRadius: 3}}>
                <Text style={{color: "white", fontSize: 11.5, left: 4.5, top: 1.2}}>{item.AgeRes}</Text>
                 <View style={{backgroundColor: "gray", height: 5, width: 5, position: "absolute", borderRadius: 10, left: 60, top: 7}}></View>
                  <Text style={{position: "absolute", color: "rgb(163, 162, 162)", fontSize: 13, fontWeight: 500, left: 75}}>{item.category}</Text>
               </View>
               <Text style={{color: "gray", width: "85%", top: 35, left: 10}} numberOfLines={1} ellipsizeMode="tail" >{item.des}</Text>
                <TouchableOpacity style={{height: 45, width: "94%", backgroundColor: "white", left: 10, top: 50, borderRadius: 10, justifyContent: "center", alignItems: "center"}}>
                <Image source={require("./images/Alarm.png")} style={{height: 23, width: 23, position: "absolute", left: 70}}/>
                    <Text style={{fontSize: 16, fontWeight: 600, color: "black"}}>Remind Me
                    <Text style={{position: "absolute", fontWeight: 400, fontSize: 15}}>  {item.launchdate}</Text>
                    </Text>
                    
                </TouchableOpacity>
            </View>
        ))}
        
        </ScrollView>












        <View style={{height: 50, backgroundColor: "black", borderTopWidth: 2, borderTopColor: "rgb(43, 43, 43)"}}>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute"}}
            onPress={()=>navigation.navigate("Home")}>
                <Image source={require("./images/home.png")} style={{height: 22, width: 22, left: "35%", top: 8}}/>
                 <Text style={{color: "gray", fontSize: 10, left: "34%", top: 7, fontWeight: 400}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "25%"}}
            onPress={()=> navigation.navigate("Search")}>
            <Image source={require("./images/Search.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>
            <Text style={{color: "gray", fontSize: 10, left: "35%", top: 7, fontWeight: 400}}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "50%"}}>
            <Image source={require("./images/Firefilled.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>   
            <Text style={{color: "white", fontSize: 10, left: "25%", top: 7, fontWeight: 600}}>New & Hot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "75%"}}
            onPress={()=>navigation.navigate("MySpace")}>
            <Image source={require("./images/Account.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>
            <Text style={{color: "gray", fontSize: 10, left: "25%", top: 7, fontWeight: 400}}>My Space</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

export default New;