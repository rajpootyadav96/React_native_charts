import { View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const DoughnutChart = () => {
    const pieData = [
        { value: 40, color: '#246176', text: '40%' },
        { value: 12, color: '#93D3D4', text: '12%' },
        { value: 12, color: '#67CCEE', text: '12%' },
        { value: 12, color: '#67CCEE', text: '12%' },
        { value: 12, color: '#67CCEE', text: '12%' },
        { value: 12, color: '#67CCEE', text: '12%' },
    ];

    return (
        <View style={{
            marginTop:20,
            backgroundColor: 'red'
        }}>
            <PieChart
                donut
                isAnimated
                // isThreeD
                // showText
                // innerCircleColor={'bla'}
                innerCircleBorderWidth={10}
                innerRadius={80}
                tiltAngle="0deg"
                innerCircleBorderColor="black"
                // pieInnerComponentHeight={10}
                // pieInnerComponent={()=>{
                //     <View>
                        
                //     </View>
                // }}
                // shiftInnerCenterX={0}
                // shiftInnerCenterY={-10}
                radius={170}
                strokeWidth={10}
                strokeColor="white"
                data={pieData}
            />
        </View>
    )
};

export default DoughnutChart;