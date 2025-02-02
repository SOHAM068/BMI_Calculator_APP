import { View, Text, StyleSheet, TextInput, Button, ScrollView, useColorScheme, Image, TouchableOpacity, Pressable, Stack, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { lightStyles, darkStyles } from './Styles'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const colorScheme = useColorScheme()
  const Styles = colorScheme === 'light' ? lightStyles : darkStyles;
  // const Styles = lightStyles;
  // useEffect(()=>{
  //   if(Platform.OS=='android'){
  //     SplashScreen.hide();}
  // },[])

  const [Weight, setWeight] = useState('')
  const [Height, setHeight] = useState('')
  const [BMI, setBMI] = useState('')
  const [HealthStatus, setHealthStatus] = useState('')

  const CalculateBMI = () => {
    const HeightInMeters = Height / 100
    const BMI = (Weight / (HeightInMeters * HeightInMeters)).toFixed(2)

    if (BMI < 18.5) {
      setHealthStatus('Under Weight')
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
      setHealthStatus('Healthy, Normal Weight')
    }
    else if (BMI >= 25) {
      setHealthStatus('Over Weight')
    }
    else { setHealthStatus('Invalid Data') }
    setBMI(BMI)
  }
  const ClearData = () => {
    setHeight('')
    setWeight('')
    setBMI('')
    setHealthStatus('')
  }
  return (
    <ScrollView style={{ backgroundColor: 'transparent' }}>

      <Text style={Styles.Heading}>BMI CALCULATOR</Text>
      <View style={Styles.Container}>

        <View style={Styles.InputRow}>
          <Text style={{ fontSize: 17 }}>Height (Cm) : </Text>
          <TextInput
            placeholder='Enter Height' value={Height} onChangeText={(text) => setHeight(text)} keyboardType='numeric'
            style={{ fontSize: 17, borderBottomWidth: 2, borderColor: 'white', padding: 3 }}
          />
        </View>
        <View style={Styles.InputRow}>
          <Text style={{ fontSize: 17 }}>Weight (Kg)  : </Text>
          <TextInput
            placeholder='Enter Weight' value={Weight} onChangeText={(text) => setWeight(text)} keyboardType='numeric'
            style={{ fontSize: 17, borderBottomWidth: 2, borderColor: 'white', padding: 3 }}
          />
        </View>
        {/* <View style={Styles.ButtonStyle}>
          <Button title='Calculate BMI' onPress={CalculateBMI} -->/>
        </View> */}
        <TouchableOpacity
          style={Styles.TouchableOpacityButton}
          onPress={CalculateBMI}
        >
          <Text style={{ fontSize: 18, fontWeight: '500' }}>Calculate BMI</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 15, margin: 11 }}>BMI : <Text style={{fontWeight:'bold'}}>{BMI}</Text></Text>
        <Text style={{ fontSize: 15, marginLeft: 11 }}>Health Status : <Text style={{fontWeight:'bold'}}>{HealthStatus}</Text></Text>
      </View>
      <View style={{ marginLeft: 270, marginTop: 5 }}><Button title='Reload' color={'#FF3224'} onPress={ClearData} /></View>

      <View style={Styles.imagecontainer}>
        <Image source={require('./IMAGES/BMI_Image.png')} style={Styles.image1} />
      </View>

      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: '700', alignSelf: 'center' }}>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</Text>
        <Text style={{ fontWeight: '700', alignSelf: 'center' }}>Healthy weight for the height: 59.9 kgs - 81 kgs</Text>
        <Text style={{ marginVertical: 20 }}>The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units. Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.</Text>
        <Text style={Styles.BMIIntro}>BMI introduction</Text>
        <Text>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.</Text>
      </View>

      <View style={{ margin: 10 }}>
        <Text style={Styles.BMIIntro}>BMI table for adults</Text>
        <View style={Styles.imagecontainer}>
          <Image source={require('./IMAGES/BMI_Adult_Table.png')} style={Styles.image2} />
        </View>
      </View>
    </ScrollView>
  )
}
export default App
