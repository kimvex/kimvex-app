import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {
  TopNavigation,
  Text,
  Icon,
  Divider,
  Button,
  Modal,
  Layout,
  List,
  Avatar,
  Input,
} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

class Shop extends Component {
  state = {
    visible: false,
    url_image: '',
  };

  BackAction = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  imageModal = () => {
    const {url_image} = this.state;
    return (
      <Layout level="3" style={styles.modalContainer}>
        <Icon
          onPress={() => {
            this.setState({
              visible: !this.state.visible,
              url_image: '',
            });
          }}
          width={40}
          height={40}
          fill="#fff"
          name="close-outline"
        />
        <Image
          style={{width: 400, height: 600}}
          source={{
            uri: url_image,
          }}
        />
      </Layout>
    );
  };

  rating = () => {};

  renderItem = () => (
    <View style={styles.containerComment}>
      <Avatar
        style={styles.avatar}
        size="small"
        source={{
          uri:
            'https://react.semantic-ui.com/images/avatar/small/christian.jpg',
        }}
      />
      <View style={styles.completeDetail}>
        <Text style={{color: 'black'}} category="c3">
          Benjamin De la cruz
        </Text>
        <Text appearance="hint" category="c1">
          Hace 2 dias
        </Text>
        <Text style={{color: 'black'}} category="p1">
          Es una clinica de lo mejor
        </Text>
      </View>
    </View>
  );

  render() {
    const {visible} = this.state;

    return (
      <KeyboardAwareScrollView style={styles.container}>
        <ImageBackground
          style={{
            height: 350,
          }}
          source={{
            uri:
              'https://res.cloudinary.com/h27hacklab/image/upload/f_auto,q_auto/v1581799953/container-assets/restaurant-690975_1920.jpg',
          }}>
          <View
            style={{
              paddingTop: 70,
              paddingLeft: 20,
              fontSize: 50,
              height: 10,
            }}
            onPress={this.BackAction}>
            <Icon
              onPress={this.BackAction}
              width={40}
              height={40}
              fill="#fff"
              name="close-outline"
            />
          </View>
        </ImageBackground>
        <View style={styles.viewInformation}>
          <Text style={styles.titleFont} category="h4">
            DERMACENTER
          </Text>
          <View style={styles.informationContainer}>
            <View style={{backgroundColor: '#fbbd0a', padding: 6}}>
              <Icon width={20} height={20} fill="white" name="star" />
            </View>
            <Text
              style={{backgroundColor: '#e6ae0c', color: 'white', padding: 4}}
              category="h6">
              5
            </Text>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.iconText}>
              <Icon
                width={25}
                height={25}
                fill="#15bfc2"
                name="navigation-2-outline"
              />
            </View>
            <Text style={styles.textStyle} category="p1">
              Norte 4 456, Conjunto Laureles, 45150 Zapopan, Jal., México
            </Text>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.iconText}>
              <Icon
                width={25}
                height={25}
                fill="#15bfc2"
                name="phone-outline"
              />
            </View>
            <Text style={styles.textStyle} category="p1">
              9931982113 -- 9931076334
            </Text>
          </View>
          <View style={styles.informationContainer}>
            <View style={styles.iconText}>
              <Icon
                width={25}
                height={25}
                fill="#15bfc2"
                name="credit-card-outline"
              />
            </View>
            <Text style={styles.textStyle} category="p1">
              Acepta tarjeta
            </Text>
          </View>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.titleFont} category="h4">
            Información
          </Text>
          <Text style={styles.information} category="p1">
            Somos la fonda que te da las mejores opciones de comida, mariscos,
            comida italiana(pizza), comida mexicana(tacos, tortas, tamales,
            burritos).
          </Text>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Horarios de atención
          </Text>
          <View style={styles.containerHours}>
            {['L', 'M', 'MI', 'J', 'V', 'S', 'D'].map((day, key) => (
              <Button key={key} style={styles.buttonHours} size="small">
                {day} 10:00 am - 20:00 pm
              </Button>
            ))}
          </View>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Acepta tarjetas
          </Text>
          <View style={styles.containerHours}>
            {[
              'Visa',
              'Master Card',
              'Bancomer',
              'Banamex',
              'Santander',
              'Banorte',
              'American Express',
              'Banco Azteca',
            ].map(banco => (
              <Button
                icon={() => <Icon fill="white" name="credit-card-outline" />}
                style={styles.buttonHours}
                size="small">
                {banco}
              </Button>
            ))}
          </View>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Ubicación
          </Text>

          <View style={styles.mapContainer}></View>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Galeria
          </Text>
          <ScrollView horizontal={true}>
            {[1, 2, 3, 4, 5].map((img, key) => (
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    visible: !this.state.visible,
                    url_image:
                      'https://res.cloudinary.com/h27hacklab/image/upload/f_auto,q_auto/v1581799953/container-assets/restaurant-690975_1920.jpg',
                  });
                }}>
                <Image
                  key={key}
                  style={styles.imagesGallery}
                  source={{
                    uri:
                      'https://res.cloudinary.com/h27hacklab/image/upload/f_auto,q_auto/v1581799953/container-assets/restaurant-690975_1920.jpg',
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Califica
          </Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity>
                <Icon width={30} height={30} fill="gold" name="star" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <Divider style={{backgroundColor: '#dededf'}} />
        <View style={styles.viewTextInformation}>
          <Text style={styles.sizesPTitles} category="h4">
            Comentarios
          </Text>
          <List
            style={styles.list}
            data={[1, 2, 3, 4, 5, 6, 7]}
            contentContainerStyle={styles.listContent}
            renderItem={this.renderItem}
          />
          <View style={styles.showMoreComments}>
            <TouchableOpacity>
              <Text style={styles.titleFont}>Mas comentarios...</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerComment}>
            <Input
              style={styles.inputComment}
              textStyle={{color: 'black', borderColor: '#15bfc2'}}
              captionStyle={{borderColor: '#15bfc2'}}
              size="large"
              placeholder="Comentar"
            />
            <TouchableOpacity>
              <Icon
                name="paper-plane-outline"
                width={60}
                height={40}
                fill="#15bfc2"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          backdropStyle={styles.backdrop}
          onBackdropPress={this.toggleModal}
          visible={visible}>
          {this.imageModal()}
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewInformation: {
    flex: 2,
    paddingTop: 10,
    padding: 20,
    backgroundColor: 'white',
  },
  titleFont: {
    color: '#15bfc2',
  },
  textStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    color: 'black',
    width: '90%',
  },
  iconText: {
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 12,
    width: 16,
  },
  informationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTextInformation: {
    flex: 3,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
  },
  information: {
    paddingTop: 8,
    color: 'black',
  },
  containerHours: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonHours: {
    backgroundColor: '#15bfc2',
    borderColor: '#15bfc2',
    margin: 4,
  },
  sizesPTitles: {
    color: '#15bfc2',
    marginBottom: 12,
  },
  mapContainer: {
    height: 300,
    backgroundColor: 'teal',
  },
  containerImages: {
    flexDirection: 'row',
    height: '100%',
  },
  imagesGallery: {
    marginRight: 8,
    width: 300,
    height: 300,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 'auto',
    height: 500,
    padding: 16,
    backgroundColor: 'transparent',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  starContainer: {
    flexDirection: 'row',
  },
  containerComment: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  avatar: {
    margin: 8,
  },
  completeDetail: {},
  showMoreComments: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  inputComment: {
    width: '88%',
    color: 'black',
    borderColor: '#15bfc2',
  },
});

export default Shop;
