import { Text, View } from "react-native"
import { LineChart } from "react-native-gifted-charts";
import CustomAreaChart from "./src/components/AreaCharts";
import DoughnutChart from "./src/components/DoughnutChart";

const App = () => {
  const data = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  return <View style={{
    backgroundColor: 'white',
    flex: 1,
    width: '100%'
    // height:'200%'
  }}>
    <View style={{
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#F0E303',
      borderRadius: 10,
      marginTop: 10
    }}>
      <Text style={{
        color: 'black',
        fontWeight: '800'
      }}>Assets Net Worth</Text>
    </View>
    <View style={{
      width: '100%',
      backgroundColor: 'white'
    }}>
      <CustomAreaChart />
    </View>
    <DoughnutChart />

  </View>
}

export default App