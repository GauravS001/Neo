import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";


function SearchResults({navigation}){

const sk = "Avatar";
const searchresults = [{ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""},
                       {ImgUrl: "", title: ""},  {ImgUrl: "", title: ""},  {ImgUrl: "", title: ""}];

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Search")}>
                <Image source={require("./images/close.png")} style={{height: 30, width: 30, top: 5, left: 5}} />
            </TouchableOpacity>
            <Text style={{color: "white", fontSize: 20, position: "absolute", top: 6, left: "15%", fontWeight: 500}}>{sk}</Text>
            <View style={{flex:1, flexWrap: "wrap", flexDirection: "row", left: 5, top: 5}}>
            {searchresults.map((item,index)=>(
                <View key={index} style={{height: 150, width: 120, backgroundColor: "red", marginLeft: 10, marginTop: 10, borderRadius: 5}}></View>
                ))}
            </View>
        </View>
    )
}

export default SearchResults;