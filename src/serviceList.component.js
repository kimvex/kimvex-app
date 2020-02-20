import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ImageBackground} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Card,
  List,
  Button,
} from '@ui-kitten/components';

const lista_servicios = [1, 2, 3, 4, 5, 6, 7, 8];

const BackIcon = style => <Icon {...style} name="arrow-back" />;
class ServiceList extends Component {
  navigateShop = () => {
    const {navigation} = this.props;
    console.log(this.props, navigation);
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
      onPress={this.navigateShop}
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
          <Text category="h2" style={{color: '#15bfc2'}}>
            Dermacenter
          </Text>
          <Text style={{color: 'black'}} category="p1">
            Norte 4 456, Conjunto Laureles, 45150 Zapopan, Jal., México
          </Text>
          <Text appearance="hint" category="c1">
            Clinica dermatologica
          </Text>
        </View>
        <Divider style={{marginBottom: '2%', marginTop: '2%'}} />
        <View style={styles.footerCard}>
          {[1].length > 0 ? (
            <View style={styles.footerCardStarts}>
              {[1, 2, 3, 4, 5].map(key => (
                <Icon
                  key={key}
                  name="star"
                  width={24}
                  height={24}
                  fill="#fee623"
                />
              ))}
            </View>
          ) : (
            <Text style={{color: 'rgba(0,0,0,.4)'}}>Sin calificar</Text>
          )}
          <Text style={{color: '#15bfc2'}}>1.66 km</Text>
        </View>
      </View>
    </Card>
  );

  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{flex: 0, backgroundColor: '#15bfc2'}}
          emulateUnlessSupported={false}>
          <TopNavigation
            title="Clinicas"
            alignment="center"
            leftControl={this.BackAction()}
            style={{backgroundColor: '#15bfc2'}}
          />
          <Divider />
        </SafeAreaView>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerCardStarts: {
    flexDirection: 'row',
  },
});

export default ServiceList;
