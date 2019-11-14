import React from 'react'
import {SafeAreaView, View, ActivityIndicator, Platform} from 'react-native'
import {WebView} from 'react-native-webview'

class App extends React.Component {
  onLoad = () => {
    console.log('onLoad', {webview: this._webview})
    this._webview.requestFocus()
  }

  render() {
    const html =
      Platform.OS === 'ios'
        ? require('./web.html')
        : {uri: 'file:///android_asset/web.html'}
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <WebView
            onLoad={this.onLoad}
            ref={n => (this._webview = n)}
            source={html}
            style={{flex: 1}}
            startInLoadingState
            renderLoading={() => (
              <View style={{flex: 1}}>
                <ActivityIndicator size={'large'} />
              </View>
            )}
            hideKeyboardAccessoryView
          />
        </SafeAreaView>
      </View>
    )
  }
}

export default App
