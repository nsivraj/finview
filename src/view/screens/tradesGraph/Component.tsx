import * as React from 'react';
import { View } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';

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

  render() {
    const { tradeSymbol, trades } = this.props;

    if(tradeSymbol && tradeSymbol.length > 0 && trades.result) {
      return (
        <View style={styles.container}>
          <CText>TradesGraph got trades for symbol: {tradeSymbol}</CText>
        </View>
      );
    } else if(tradeSymbol && tradeSymbol.length > 0) {
      return (
        <View style={styles.container}>
          <CText>Loading graph for symbol {tradeSymbol}</CText>
        </View>
      );
    } else {
      return (null);
    }
  }
}

export default TradesGraph;
