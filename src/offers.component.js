import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ImageBackground} from 'react-native';
import {
  Divider,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
  List,
} from '@ui-kitten/components';

const lista_servicios = [1, 2, 3, 4, 5, 6, 7, 8];

const BackIcon = style => <Icon {...style} name="arrow-back" />;

class Offers extends Component {
  navigateShop = () => {
    const {navigation} = this.props;
    navigation.navigate('Shop');
  };

  navigateBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={this.navigateBack} />
  );

  renderItem = () => (
    <Card
      style={styles.item}
      header={() => (
        <React.Fragment>
          <ImageBackground
            style={styles.itemImage}
            source={{
              uri:
                'https://res.cloudinary.com/h27hacklab/image/upload/f_auto,q_auto/v1581799953/container-assets/restaurant-690975_1920.jpg',
            }}>
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  backgroundColor: 'rgba(0, 0, 0, 0.45)',
                  justifyContent: 'center',
                },
              ]}
            />
          </ImageBackground>
        </React.Fragment>
      )}>
      <View style={styles.itemFooter}>
        <View style={styles.itemAuthoringContainer}>
          <Text category="h5" style={{color: '#15bfc2'}}>
            Oferta de lo mejor y mas bonita
          </Text>
          <Text style={{color: 'black'}} category="p1">
            Esta oferta es muy bonita, espero que les guste
          </Text>
          <Text appearance="hint" category="c1">
            DERMACENTER
          </Text>
        </View>
        <Divider style={{marginBottom: '2%', marginTop: '2%'}} />
        <View style={styles.footerCard}>
          <View style={styles.footerCardSinceUntil}>
            <Text style={{color: '#AEB6D0'}}>Desde 2020-01-25</Text>
            <Text style={{color: '#AEB6D0'}}>- Hasta 2020-03-31</Text>
          </View>
          <Divider style={{marginBottom: '2%', marginTop: '2%'}} />
          <View style={styles.footerCardSinceUntil}>
            <Text style={{color: '#15bfc2'}}>1.66 km</Text>
          </View>
        </View>
      </View>
    </Card>
  );

  render() {
    return (
      <React.Fragment>
        <List
          style={styles.list}
          data={lista_servicios}
          contentContainerStyle={styles.listContent}
          renderItem={this.renderItem}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  headerImage: {
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  list: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
  },
  itemImage: {
    height: 220,
  },
  itemTitle: {
    zIndex: 1,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  footerCard: {
    flexDirection: 'column',
  },
  footerCardSinceUntil: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Offers;
