import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts"

const customLabel = val => {
    return (
        <View style={{ width: 70, marginLeft: 30 }}>
            <Text style={{ fontSize: 12, color: '#969696' }}>{val}</Text>
        </View>
    );
};

const MultilineChart = () => {
    const lineData = [
        {
            labelComponent: () => customLabel('01-02'),
            value: 0, dataPointText: '0'
        },
        {
            value: 10, dataPointText: '10'
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 8, dataPointText: '8'
        },
        {
            value: 58, dataPointText: '58'
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 56, dataPointText: '56'
        },
        {
            value: 78, dataPointText: '78'
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 74, dataPointText: '74'
        },
        {
            value: 98, dataPointText: '98'
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 0, dataPointText: '0'
        },
        {
            value: 20, dataPointText: '20'
        },
        {
            labelComponent: () => customLabel('01-02'),
            value: 18, dataPointText: '18'
        },
    ];

    const lineData2 = [
        {
            value: 0, dataPointText: '0'
        },
        {
            value: 20, dataPointText: '20'
        },
        {
            value: 18, dataPointText: '18'
        },
        {
            value: 40, dataPointText: '40'
        },
        {
            value: 36, dataPointText: '36'
        },
        {
            value: 60, dataPointText: '60'
        },
        {
            value: 54, dataPointText: '54'
        },
        {
            value: 85, dataPointText: '85'
        },
        {
            value: 0, dataPointText: '0'
        },
        {
            value: 20, dataPointText: '20'
        },
        {
            value: 18, dataPointText: '18'
        },
    ];
    return (
        <View style={{
        }}>
            <LineChart
                curved
                curvature={0.08}
                yAxisLabelTexts={[
                    '200',
                    '200',
                    '200',
                    '200',
                    '200',
                    '200'
                ]}
                data={lineData}
                data2={lineData2}
                noOfSections={5}
                yAxisLabelPrefix="$"
                yAxisLabelSuffix="k"
                yAxisTextStyle={{ color: '#969696', fontSize: 12 }}
                xAxisLabelTextStyle={{ color: '#969696', width: 70, fontSize: 12 }}
                hideRules
                spacing={38}
                initialSpacing={0}
                color1="#32A071"
                color2="#FFD5C0"
                hideDataPoints
                textFontSize={13}
                xAxisColor={"transparent"}
                yAxisColor={"transparent"}
            />
        </View>
    );
};

export default MultilineChart