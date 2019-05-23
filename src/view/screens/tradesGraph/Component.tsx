import * as React from 'react';
import { View, Dimensions } from 'react-native';
import styles from './styles';
import { CText } from '../../elements/custom';
import { LineChart } from 'react-native-chart-kit';

export interface Props {
  tradeSymbol: string,
  fetchRecentTrades: any,
  trades: any,
}

interface State {}

class TradesGraph extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps:any) {
    const { tradeSymbol } = this.props;
    if (tradeSymbol && tradeSymbol.length > 0 && tradeSymbol !== prevProps.tradeSymbol) {
      this.props.fetchRecentTrades(tradeSymbol);
    }
  }

  mapTradeData = (tradeSymbol:string, trades:any) => {
    return trades.result[tradeSymbol].map((trade:any) => {
      return trade[0];
    });
  }

  render() {
    const { tradeSymbol, trades } = this.props;

    if(tradeSymbol && tradeSymbol.length > 0 && trades.result && trades.result[tradeSymbol]) {
        const chartConfig = {
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        };
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        const tradeData = {
          datasets: [{
            data: this.mapTradeData(tradeSymbol, trades),
            color: (opacity = .1) => `rgba(255, 1, 1, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }]
        };

        return (
        <View style={styles.container}>
          <CText>Graph for symbol: {tradeSymbol}</CText>
          <LineChart
            data={tradeData}
            width={screenWidth}
            height={screenHeight}
            chartConfig={chartConfig}
          />
        </View>
      );
    } else if(tradeSymbol && tradeSymbol.length > 0) {
      return (
        <View style={styles.container}>
          <CText>Loading graph for symbol {tradeSymbol} ...</CText>
        </View>
      );
    } else {
      return (null);
    }
  }
}

export default TradesGraph;
