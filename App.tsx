import { Dimensions, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.767110,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
};
export default function App() {
  return (
    <><View style={styles.container}>
      <MapView style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION} />

    </View>
    <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          styles={{textInput:styles.input}}
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          } }
          query={{
            key: 'A******',
            language: 'tr',
          }} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer:{
    position:"absolute",
    width:"90%",
    backgroundColor:"white",
    shadowColor:"black",
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.5,
    shadowRadius:4,
    elevation:4,
    padding:10,
    borderRadius:8,
    top:50
  },
  input:{
    borderColor:"#888",
    borderWidth:1
  }
});
