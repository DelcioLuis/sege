import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

const { width, height} = Dimensions.get("screen")


export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.herdnot}>
          <TouchableOpacity style={styles.itns}>
            <Ionicons name="notifications-sharp" size={24} color="#000" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.itns}>
            <Ionicons name="ios-menu-sharp" size={24} color="#000" />
          </TouchableOpacity>
          
        </View>

        <View style={styles.perfil}>
          <Avatar.Image source={{uri:"data:image/jpeg;base64,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"}}  size={50}/>
          <Text style={styles.name}>Orlando Guilherme</Text>        
        </View>
      </View>
      <View style={styles.bodys}>
        <View style={styles.body}>
          <TouchableOpacity style={styles.grids}>
            <Image source={require("./academico.png")} style={styles.imags} />
            <Text style={styles.gridstext}>Gestão Académica</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.grids}>
            <Image source={require("./humanos.png")} style={styles.imags} />
            <Text style={styles.gridstext}>Recursos Humanos</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.body}>
          <TouchableOpacity style={styles.grids}>
            <Image source={require("./monitoria.png")} style={styles.imags} />
            <Text style={styles.gridstext}>Monitoria e Avaliação</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.grids}>
            <Image source={require("./finace.png")} style={styles.imags} />
            <Text style={styles.gridstext}>Gestão Financeira</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.body}>
          
          <TouchableOpacity style={styles.grids}>
            <Image source={require("./system.png")} style={styles.imags} />
            <Text style={styles.gridstext}>Gestão de Sistema</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"red"
  },
  header:{
    backgroundColor: 'red',
    height:height*0.27,
    width:width,
    borderBottomRightRadius:width*0.2,
    borderBottomLeftRadius:width*0.2
  },
  bodys:{
    backgroundColor:"#fff",
    borderTopLeftRadius:width*0.1,
    borderTopRightRadius:width*0.1
  },
  body: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:width*0.03,
    marginTop:height*0.03,
    
  },
  grids:{
    width:width*0.44,
    borderRadius:8,
    height:height *0.26,
    borderColor:"#ddd",
    borderWidth:1,
    elevation:0,
    alignItems:"center",
    justifyContent:"center"
  },
  imags:{
    width:width*0.35, 
    height:width*0.35,
    resizeMode:"center"
  },
  gridstext:{
    fontSize:17,
    fontWeight:"700"
  },
  herdnot:{
    alignSelf:"flex-end",
    marginTop:height*0.04,
    marginRight:height*0.04,
    flexDirection:"row",
    width:width*0.2,
    justifyContent:"space-between"
  },
  itns:{
    backgroundColor:"#fff",
    borderRadius:50,
    padding:width*0.01,
    borderWidth:0.9,
    borderColor:"#ddd"
  },
  perfil:{
    flexDirection:"row",
    alignItems:"center",
    top:height*0.08,
    left:width*0.07,
    justifyContent:"space-between",
    width:width*0.54
  },
  name:{
    fontSize:18, 
    fontWeight:"700",
    color:"#fff"
  }
});
