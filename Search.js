import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";


function Search({navigation}){

  

    const popSearch = [{ImgUrl: "", title: "Avatar"}, {ImgUrl: "", title: "The Lion King"}, {ImgUrl: "", title: "Loki"}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""},
                       {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}];

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>
         <View style={{height: 70, width: "100%", backgroundColor: "black"}}>
            <TextInput style={{height: 40, width: "83%", backgroundColor: "white", top: 15, borderRadius: 5, left: 10, paddingLeft: 45}}></TextInput>
            <Image source={require("./images/SearchTab.png")} style={{position: "absolute", height: 28, width: 28, top: 20, left: 18}}/>
            <TouchableOpacity style={{height: 40, width: 45, backgroundColor: "rgb(221, 1, 1)", position: "absolute", top: 14.5, left: "85%",
             borderTopRightRadius: 5, borderBottomRightRadius: 5}}
             onPress={()=>navigation.navigate("SearchResults")}>
                <Image source={require("./images/go.png")} style={{height: 20, width: 20, left: 15, top: 10}}/>
             </TouchableOpacity>
         </View>

  
  
        <ScrollView style={{backgroundColor: "black"}}>
         <View style={{paddingBottom: 5, width: "100%", backgroundColor: "black"}}>
            <Image source={require("./images/rise.png")} style={{height: 20, width: 20, left: 15}}/>
             <Text style={{color: "white", fontWeight: 600, fontSize: 13, position: "absolute", left: "13%", top: -1}}>POPULAR SEARCHES</Text>

             {popSearch.map((item, index)=> (
                <TouchableOpacity key={index} style={{height: 65, width: "100%", backgroundColor: "black", marginTop: 5}}>
                    <View style={{height: 60, width: "30%", backgroundColor: "blue", top: 2.5, left: 3, borderRadius: 5}}>
                    <Image source={item.ImgUrl} />
                    </View>
                     <Text style={{color: "white", fontSize: 15, fontWeight: 500, position: "absolute", left: "35%", top: "30%"}}>{item.title}</Text>
                      <View style={{height: 20, width: 20, backgroundColor: "black", position: "absolute", top: "35%", left: "90%"}}>
                        <Image source={require("./images/Forward.png")} style={{height: 20, width: 20}}/>
                      </View>
                </TouchableOpacity>
             ))}
         </View>
         
        
        </ScrollView>








       



        <View style={{height: 50, backgroundColor: "black", borderTopWidth: 2, borderTopColor: "rgb(43, 43, 43)"}}>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute"}}
            onPress={()=>navigation.navigate("Home")}>
                <Image source={require("./images/home.png")} style={{height: 22, width: 22, left: "35%", top: 8}}/>
                 <Text style={{color: "gray", fontSize: 10, left: "34%", top: 7, fontWeight: 400}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "25%"}}
            onPress={()=> navigation.navigate("Search")}>
            <Image source={require("./images/Searchfilled.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>
            <Text style={{color: "white", fontSize: 10, left: "35%", top: 7, fontWeight: 600}}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute", left: "50%"}}
            onPress={()=>navigation.navigate("New")}>
            <Image source={require("./images/Fire.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>   
            <Text style={{color: "gray", fontSize: 10, left: "25%", top: 7, fontWeight: 400}}>New & Hot</Text>
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

export default Search;