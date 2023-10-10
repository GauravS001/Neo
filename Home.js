import React from "react";
import { ScrollView, View, Image, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper';

function Home({navigation}){

    const Slider1 = [{ImgUrl: "", name: ""}, {ImgUrl: "", name: ""}, {ImgUrl: "", name: ""}, {ImgUrl: "", name: ""}, {ImgUrl: "", name: ""}, {ImgUrl: "", name: ""}];
    const LangSlider= [{ImgUrl: "", name: "English"}, {ImgUrl: "", name: "Hindi"}, {ImgUrl: "", name: "Hindi"}, {ImgUrl: "", name: "Hindi"},{ImgUrl: "", name: "Hindi"}];

    return(
        <View style={{backgroundColor: "black", height: "100%"}}>
        <View style={{height: 0, width: "100%", backgroundColor: "transparent"}}>
        </View>
  
  
  
        <ScrollView style={{backgroundColor: "black"}}>
          <View style={{height: 300, width: "100%", backgroundColor: "transparent"}}>

          </View>
           <View style={{position: "absolute"}}>
            <Image source={require("./images/NeoLogo.png")} style={{height: 40, width: 40, top: 5, left: 4}}/>
          </View>







          <View style={{height: 1190, width: "100%", backgroundColor: "black"}}>
            <Text style={{color: "white", fontSize: 19, fontWeight: "500", top: 10, left: 10}}>Latest Releases</Text>
            <View style={{height: 170, width: "100%", backgroundColor: "black", top: 20}}>
                <ScrollView style={{backgroundColor: "black"}} horizontal={true} showsHorizontalScrollIndicator={false}>
                   {Slider1.map((item, index)=>(
                    <TouchableOpacity key={index} style={{height: "100%", width: 120, backgroundColor: "blue", marginLeft: 8, borderRadius: 3}}
                    onPress={()=>navigation.navigate("Details")}></TouchableOpacity>
                   ))}
                   <View style={{width: 10, height: "100%"}}></View>
                </ScrollView>
            </View>

            <Text style={{color: "white", fontSize: 19, fontWeight: "500", top: 30, left: 10}}>Popular Languages</Text>
            <View style={{height: 80, width: "100%", backgroundColor: "transparent", top: 40, left: 5}}>
                <ScrollView style={{backgroundColor: "transparent"}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {LangSlider.map((item, index)=>(
                 <TouchableOpacity style={{height: "100%", width: 150, backgroundColor: "blue", marginLeft: 5, borderRadius: 2}}></TouchableOpacity>
                ))}
                <View style={{width: 5, height: "100%"}}></View>
                </ScrollView> 
            </View>

            <Text style={{color: "white", fontSize: 19, fontWeight: "500", top: 50, left: 10}}><Text style={{color: "rgb(253, 66, 66)"}}>Best</Text> of Superheroes</Text>
            <View style={{height: 170, width: "100%", backgroundColor: "black", top: 60}}>
                <ScrollView style={{backgroundColor: "black"}} horizontal={true} showsHorizontalScrollIndicator={false}>
                   {Slider1.map((item, index)=>(
                    <TouchableOpacity key={index} style={{height: "100%", width: 120, backgroundColor: "blue", marginLeft: 8, borderRadius: 3}}></TouchableOpacity>
                   ))}
                   <View style={{width: 10, height: "100%"}}></View>
                </ScrollView>
            </View>

            <Text style={{color: "white", fontSize: 19, fontWeight: "500", top: 70, left: 10}}>Popular in Action</Text>
            <View style={{height: 170, width: "100%", backgroundColor: "black", top: 82}}>
                <ScrollView style={{backgroundColor: "black"}} horizontal={true} showsHorizontalScrollIndicator={false}>
                   {Slider1.map((item, index)=>(
                    <TouchableOpacity key={index} style={{height: "100%", width: 120, backgroundColor: "blue", marginLeft: 8, borderRadius: 3}}></TouchableOpacity>
                   ))}
                   <View style={{width: 10, height: "100%"}}></View>
                </ScrollView>
            </View>

            <Text style={{color: "white", fontSize: 19, fontWeight: "500", top: 93, left: 10}}>Popular in Comedy</Text>
            <View style={{height: 170, width: "100%", backgroundColor: "black", top: 105}}>
                <ScrollView style={{backgroundColor: "black"}} horizontal={true} showsHorizontalScrollIndicator={false}>
                   {Slider1.map((item, index)=>(
                    <TouchableOpacity key={index} style={{height: "100%", width: 120, backgroundColor: "blue", marginLeft: 8, borderRadius: 3}}></TouchableOpacity>
                   ))}
                   <View style={{width: 10, height: "100%"}}></View>
                </ScrollView>
            </View>

            <View style={{ flex: 1, flexDirection: 'row',  flexWrap: 'wrap', top: 120}}>
                {Slider1.map((item, index)=>(
                    <TouchableOpacity key={index} style={{height: 80, width: 112, backgroundColor: "blue", marginTop: 5, marginLeft: 5, left: 4, borderRadius: 3}}></TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>
        <View style={{height: 50, backgroundColor: "black", borderTopWidth: 2, borderTopColor: "rgb(43, 43, 43)"}}>
            <TouchableOpacity style={{height: 50, width: "25%", backgroundColor: "black", position: "absolute"}}>
                <Image source={require("./images/homefilled.png")} style={{height: 22, width: 22, left: "35%", top: 8}}/>
                 <Text style={{color: "white", fontSize: 10, left: "34%", top: 7, fontWeight: 600}}>Home</Text>
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
            <Image source={require("./images/Account.png")} style={{height: 23, width: 23, left: "35%", top: 8}}/>
            <Text style={{color: "gray", fontSize: 10, left: "25%", top: 7, fontWeight: 400}}>My Space</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

export default Home;