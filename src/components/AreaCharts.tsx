import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts"
const CustomAreaChart = () => {
    const customDataPoint = () => {
        return (
            <View
                style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: '#2DA771',
                }}
            />
        );
    };
    const customLabel = val => {
        return (
            <View style={{ width: 70, marginLeft: 30 }}>
                <Text style={{ fontSize: 12, color: '#969696' }}>{val}</Text>
            </View>
        );
    };
    const data = [
        {
            value: 100,
            labelComponent: () => customLabel('01-02'),
            customDataPoint: customDataPoint,
            hideDataPoint: true,
        },
        {
            value: 140,
            hideDataPoint: true,
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 100,
            customDataPoint: customDataPoint,
            hideDataPoint: true,
        },
        {
            value: 290,
            hideDataPoint: true,
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 150,
            customDataPoint: customDataPoint,
            showStrip: false,
            stripHeight: 190,
            stripColor: 'black',
            dataPointLabelShiftY: -70,
            dataPointLabelShiftX: -4,
            hideDataPoint: true,
        },
        {
            value: 440,
            customDataPoint: customDataPoint,
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 300,
            customDataPoint: customDataPoint,
            hideDataPoint: true,
        },
        {
            value: 280,
            hideDataPoint: true,
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 180,
            customDataPoint: customDataPoint,
            hideDataPoint: true,
        },
        {
            value: 150,
            hideDataPoint: true,
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 150,
            customDataPoint: customDataPoint,
            hideDataPoint: true,
        },
    ];
    return (
        <View style={{
            marginTop: 10,
            paddingHorizontal: 10
        }}>
            <LineChart
                color="#2DA771"
                maxValue={600}
                noOfSections={5}
                areaChart
                yAxisLabelTexts={[
                    '200',
                    '200',
                    '200',
                    '200',
                    '200',
                    '200'
                ]}
                yAxisLabelPrefix="$"
                yAxisLabelSuffix="k"
                yAxisTextStyle={{ color: '#969696', fontSize: 12 }}
                data={data}
                curved
                curvature={0.08}
                startFillColor={'#73B06F7D'}
                endFillColor={'#22C46A00'}
                startOpacity={0.3}
                endOpacity={0.1}
                spacing={38}
                hideRules
                initialSpacing={0}
                yAxisColor="transparent"
                xAxisColor="transparent"
            />
        </View>
    );
};

export default CustomAreaChart