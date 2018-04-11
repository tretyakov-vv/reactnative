import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal
} from 'react-native';

import ImageElement from './app/components/ImageElement';

export default class ImageGallery extends Component {
  // Определяем начальное состояние
  state = {
    modalVisible: false,
    modalImage: require('./app/img/img1.jpg'),
    images: [
      require('./app/img/img1.jpg'),
      require('./app/img/img2.jpg'),
      require('./app/img/img3.jpg'),
      require('./app/img/img4.jpg'),
      require('./app/img/img5.jpg'),
      require('./app/img/img6.jpg'),
    ]
  }
  // Функция для переключения изображения
  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }
  // Функция для клика по изображению
  getImage() {
    return this.state.modalImage;
  }

  render() {

    let images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback key={key}
                onPress={()  => { this.setModalVisible(true, key)}}>
                <View style={styles.imagewrap}>
                  <ImageElement imgsource={val}></ImageElement>
                </View>
              </TouchableWithoutFeedback>
    });

    return (
      <View style={styles.container}>

        <Modal style={styles.modal} animationType={'fade'}
            transparent={true} visible={this.state.modalVisible}
            onRequestClose={() => {}}>

            <View style={styles.modal}>
                <Text style={styles.text}
                    onPress={() => {this.setModalVisible(false)}}>Close</Text>
                <ImageElement imgsource={this.state.modalImage}></ImageElement>
            </View>

        </Modal>

        {images}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3) - 12,
    width: (Dimensions.get('window').width/2) - 4,
    backgroundColor: '#fff'
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    color: '#fff',
  }

});

AppRegistry.registerComponent('ImageGallery', () => ImageGallery);
