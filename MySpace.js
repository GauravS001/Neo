import React from "react"
import { View } from "react-native"
import {ScrollView, TouchableOpacity, Image, Text } from "react-native";


function MySpace({navigation}){

    const userInfo = {username: "Gaurav", contact: "9131611790", subPack: "149"}

    return(
        <View>
              <View style={{backgroundColor: "black", height: "100%"}}>
                
              <View style={{height: "93%", width: "100%", backgroundColor: "black"}}>
              <View style={{height: 50, width: 50, borderRadius: 50, backgroundColor: "gray", left: "83%", top: 15}}></View>
               <Text style={{color: "white", position: "absolute", fontSize: 24, top: 10, left: 10}}>{userInfo.username}</Text>
               <Text style={{color: "white", position: "absolute", fontSize: 17, top: 40, left: 12}}>{userInfo.contact}</Text>
                <TouchableOpacity style={{height: 30, width: "24%", backgroundColor: "red", top: 20, left: 10, borderRadius: 5}}>
                <Image source={require("./images/Logout.png")} style={{height: 23, width: 23, position: "absolute", top: 3, left: 5}}/>
                 <Text style={{color: "white", fontSize: 16, fontWeight: 500, left: 30, top: 2}}>Logout</Text>
                </TouchableOpacity>
              </View>
         

  
  
    

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
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "50%"}}
            onPress={()=>navigation.navigate("New")}>
            <Image source={require("./images/Fire.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>   
            <Text style={{color: "gray", fontSize: 10, left: "25%", top: 7, fontWeight: 400}}>New & Hot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "75%"}}
            onPress={()=>navigation.navigate("MySpace")}>
            <Image source={require("./images/Accountfilled.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>
            <Text style={{color: "white", fontSize: 10, left: "25%", top: 7, fontWeight: 600}}>My Space</Text>
            </TouchableOpacity>
        </View>
      </View>
        </View>
    )

}

export default MySpace