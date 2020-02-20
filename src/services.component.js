import React, {Component} from 'react';
import {SafeAreaView, ImageBackground, StyleSheet, View} from 'react-native';
import {
  Icon,
  TopNavigation,
  Card,
  Text,
  List,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

import Offers from './offers.component';
import Shop from './shop/index';

const lista_servicios = [1, 2, 3, 4, 5, 6, 7, 8];

class Service extends Component {
  state = {
    selectedIndex: 0,
  };

  setSelectedIndex = i => {
    this.setState({
      selectedIndex: i,
    });
  };

  navigateServiceList = () => {
    const {navigation} = this.props;
    navigation.navigate('ServiceList');
  };

  renderItem = () => (
    <Card
      onPress={this.navigateServiceList}
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
              ]}>
              <Text style={styles.itemTitle} category="h1" status="control">
                Clinicas
              </Text>
            </View>
          </ImageBackground>
        </React.Fragment>
      )}
    />
  );

  viewList = index => {
    const {navigation} = this.props;
    switch (index) {
      case 1:
        return <Offers />;
        break;

      case 2:
        return <Shop navigation={navigation} />;
        break;
      case 0:
        return (
          <List
            style={styles.list}
            data={lista_servicios}
            contentContainerStyle={styles.listContent}
            renderItem={this.renderItem}
          />
        );
        break;
    }
  };

  screenPosition = () => {
    const {selectedIndex} = this.state;
    let screen = '';
    switch (selectedIndex) {
      case 0:
        screen = 'Lista de servicios';
        break;
      case 1:
        screen = 'Ofertas';
        break;
      case 2:
        screen = 'Crear servicio';
        break;
      case 3:
        screen = 'Perfil';
        break;
      case 4:
        screen = 'Kimvex';
        break;
    }

    return screen;
  };

  render() {
    const {selectedIndex} = this.state;
    return (
      <React.Fragment>
        <SafeAreaView style={{flex: 0, backgroundColor: '#15bfc2'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <TopNavigation
            title={this.screenPosition()}
            alignment="center"
            style={{backgroundColor: '#15bfc2', color: '#15bfc2'}}
          />
          {this.viewList(selectedIndex)}
          <BottomNavigation
            indicatorStyle={{backgroundColor: '#15bfc2'}}
            selectedIndex={selectedIndex}
            onSelect={this.setSelectedIndex}>
            <BottomNavigationTab
              titleStyle={selectedIndex === 0 && styles.bottomNavigationTab}
              icon={() => (
                <Icon
                  fill={selectedIndex === 0 ? '#15bfc2' : '#AEB6D0'}
                  name="grid-outline"
                />
              )}
              title="SERVICIOS"
            />
            <BottomNavigationTab
              category="c1"
              titleStyle={selectedIndex === 1 && styles.bottomNavigationTab}
              icon={() => (
                <Icon
                  fill={selectedIndex === 1 ? '#15bfc2' : '#AEB6D0'}
                  name="award"
                />
              )}
              title="OFERTAS"
            />
            <BottomNavigationTab
              category="c2"
              titleStyle={selectedIndex === 2 && styles.bottomNavigationTab}
              icon={() => (
                <Icon
                  fill={selectedIndex === 2 ? '#15bfc2' : '#AEB6D0'}
                  name="plus"
                />
              )}
              title="CREAR"
            />

            <BottomNavigationTab
              category="c1"
              titleStyle={selectedIndex === 3 && styles.bottomNavigationTab}
              icon={() => (
                <Icon
                  fill={selectedIndex === 3 ? '#15bfc2' : '#AEB6D0'}
                  name="person"
                />
              )}
              title="PERFIL"
            />
            <BottomNavigationTab
              category="c1"
              titleStyle={selectedIndex === 4 && styles.bottomNavigationTab}
              icon={() => (
                <Icon
                  fill={selectedIndex === 4 ? '#15bfc2' : '#AEB6D0'}
                  name="home"
                />
              )}
              title="KIMVEX"
            />
          </BottomNavigation>
        </SafeAreaView>
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
    height: 220,
  },
  itemImage: {
    ...StyleSheet.absoluteFillObject,
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
    textAlign: 'center',
  },
  bottomNavigationTab: {
    color: '#15bfc2',
  },
});

export default Service;
