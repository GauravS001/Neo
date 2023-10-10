import React from "react";
import { View, Image, Text } from "react-native";
import { ScrollView, TouchableOpacity} from "react-native-gesture-handler";
import Video from "react-native-video"


function Watch({navigation}){

  const title="Space Quest";
  const subTitle="S1 E1 Endurance Test";
  const mlt = [{ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}, {ImgUrl: "", title: ""}]

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>

           <Video 
             source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
             style={{height: 220, width: "100%"}}
             controls={true}
           />

           <Text style={{color: "white", fontWeight: 600, fontSize: 18, top: 10, left: 10}}>{title}</Text>
           <Text style={{color: "gray", fontWeight: 500, top: 13, left: 10}}>{subTitle}</Text>
            
            <Text style={{color: "white", fontSize: 19, fontWeight: 600, top: 65, left: 10}}>More Like This</Text>
           <View style={{height: 330, width: "100%", backgroundColor: "green", top: 80}}>
            <ScrollView>
             <View style={{height: 360, width: "100%", backgroundColor: "black", flex: 1, flexWrap: "wrap", flexDirection: "row"}}>
             {mlt.map((item, index)=>(
                <View style={{height: 150, width: 107, backgroundColor: "gray", marginLeft: 10, marginTop: 10, borderRadius: 3}}></View>
               ))}
             </View>
            
            </ScrollView>
           </View>

        </View>
    )
}

export default Watch;