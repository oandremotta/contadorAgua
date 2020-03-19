/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class ContadorAgua extends Component{

  constructor(props){
    super(props);
    this.state = {consumido:0, status:'ruim', pct:'0'};
    this.addCopo = this.addCopo.bind(this);
    this.atualiza = this.atualizar.bind(this);
  }

  atualizar(){
    let s = this.state;
    s.pct = Math.floor(((s.consumido/2000)*100));

    if(s.pct>=50){
      s.status = 'Médio';
    }else if(s.pct>80){
      s.status = 'Bom'
    }
       else {
      s.status = 'Ruim';
    }
    //s.pct +='%';
    this.setState(s);
  }
  addCopo(){
    let s = this.state;
    s.consumido +=200;
    this.setState(s);
    this.atualizar();
  }
  render(){
    return(
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <View>
            <View style={styles.infoArea}>

              <View style={styles.area}>
                <Text style={styles.areaTitulo}>META</Text>
                <Text style={styles.areaDado}>2000</Text>
              </View>

              <View style={styles.area}>
              <Text style={styles.areaTitulo}>Consumido</Text>
              <Text style={styles.areaDado}>{this.state.consumido}ml</Text>
              </View>

              <View style={styles.area}>
              <Text style={styles.areaTitulo}>Status</Text>
              <Text style={styles.areaDado}>{this.state.status}</Text>
              </View>

            </View>

            <View style={styles.pctArea}>
              <Text style={styles.pctText}>{this.state.pct}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addCopo}/>
            </View>
          </View>
        </ImageBackground>
      </View>
    
      
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingTop: 20
  },
  bgimage:{
    flex:1,
    width:null
  },
  infoArea:{
    flex:1,
    flexDirection: "row",
    marginTop: 50
  },
  area:{
    flex:1,
    alignItems: "center"
  },
  areaTitulo:{
    color:'#45b2fc'
  },
  areaDado:{
    color:'#2b4274',
    fontSize: 15,
    fontWeight: "bold"
  },
  pctArea:{
    marginTop: 150,
    alignItems:'center'
  },
  pctText:{
    fontSize:60,
    color:'#FFF',
    backgroundColor: 'transparent'
  },
  btnArea:{
    marginTop:30,
    alignItems: "center"
  }

});