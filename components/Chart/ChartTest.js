// import React from 'react'
// import { PieChart } from 'react-native-svg-charts'
// import { Circle, G, Line } from 'react-native-svg'

// const slice = [{
//   labelCentroid: ['a', 'b'],
//   pieCentroid: [1, 2],
//   data: {
//     key: 1,
//     value: 'ajrfyd',
//     svg: { fill: 'red' },
//   }
// },
// {
//   labelCentroid: ['a', 'b'],
//   pieCentroid: [1, 2],
//   data: {
//     key: 2,
//     value: 'ajrfyd3943',
//     svg: { fill: 'blue' },
//   }
// }, 
// 'b', 'c', 'd', 'e', 'f', 'g']




// const ChartTest = () => {
  
//   const data = [ 50, 10, 40, 95, -4, -24, 85, 91 ]

//   const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

//   const pieData = data
//             .filter(value => value > 0)
//             .map((value, index) => ({
//                 value,
//                 svg: { fill: randomColor() },
//                 key: `pie-${index}`,
//             }))


//   const Labels = ({ slices }) => {
//     console.log(slices)
//     return slices.map((slice, index) => {
//         const { labelCentroid, pieCentroid, data } = slice;
//         return (
//             <G key={ index }>
//                 <Line
//                     x1={ labelCentroid[ 0 ] }
//                     y1={ labelCentroid[ 1 ] }
//                     x2={ pieCentroid[ 0 ] }
//                     y2={ pieCentroid[ 1 ] }
//                     stroke={ data.svg.fill }
//                 />
//                 <Circle
//                     cx={ labelCentroid[ 0 ] }
//                     cy={ labelCentroid[ 1 ] }
//                     r={ 15 }
//                     fill={ data.svg.fill }
//                 />
//             </G>
//         )
//     })
//   }
//   return (
//     <PieChart
//       style={ { height: 200 } }
//       data={ pieData }
//       innerRadius={ 20 }
//       outerRadius={ 55 }
//       labelRadius={ 80 }
//     >
//       <Labels slices={slice}/>
//     </PieChart>
//     )
// }

// export default ChartTest;



import React from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'

class ChartTest extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
        }
      })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <PieChart
          style={{ height: 200 }}
          outerRadius={'80%'}
          innerRadius={'45%'}
          data={data}
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center'
          }}>
          {`${label} \n ${value}`}
        </Text>
      </View>
    )
  }
}

export default ChartTest;




// import React, { useState } from 'react';
// import {
//   Text,
//   View,
//   Dimensions
// } from 'react-native';
// import { PieChart } from 'react-native-svg-charts'

// const ChartTest = () => {
//   const [sstate, setSstate] = useState({
//     selectedSlice: {
//       label: '',
//       value: 0
//     },
//     labelWidth: 0
//   })

//   const { labelWidth, selectedSlice } = sstate;
//   // const { label, value } = selectedSlice;
//   const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
//   const values = [15, 25, 35, 45, 55];
//   const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
//   const data = keys.map((key, index) => {
//         return {
//           key,
//           value: values[index],
//           svg: { fill: colors[index] },
//           arc: { outerRadius: (70 + values[index]) + '%', padAngle: selectedSlice?.label === key ? 0.1 : 0 },
//           onPress: () => setSstate({ selectedSlice: { label: key, value: values[index] } })
//         }
//       })
//     const deviceWidth = Dimensions.get('window').width

//     return (
//       <View style={{ justifyContent: 'center', flex: 1 }}>
//         <PieChart
//           style={{ height: 200 }}
//           outerRadius={'80%'}
//           innerRadius={'45%'}
//           data={data}
//         />
//         <Text
//           onLayout={({ nativeEvent: { layout: { width } } }) => {
//             setSstate({ labelWidth: width });
//           }}
//           style={{
//             position: 'absolute',
//             left: deviceWidth / 2 - labelWidth / 2,
//             textAlign: 'center'
//           }}>
//           {`${selectedSlice?.label} \n ${selectedSlice?.value}`}
//         </Text>
//       </View>
//     )
// }

// export default ChartTest;