/**
 *
 * 作者：黎伟杰 on 2018/5/2.
 * 邮箱：liweijieok@qq.com
 * description：上拉刷新+下拉加载的FlatList封装
 * update by:
 * update day:
 */

import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";

/**
 * 列表状态
 * @type {{NORMAL: number, REFRESHING: number, LOADING: number, LOAD_END: number, ERROR: number, NO_DATA: number}}
 */
export const State = {
  NORMAL: 0,//正常状态
  REFRESHING: 1,//刷新中
  LOADING: 2,//正在加载
  LOAD_END: 3,//上拉加载完成
  ERROR: 4,//上拉加载发生错误
  NO_DATA: 5,//无数据情况
};


/**
 * 默认样式
 */
const styles = StyleSheet.create({
  //底部默认样式
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 44,
  },
  footerText: {
    fontSize: 14,
    color: "#555555"
  }
});

export default class PullLoadComponent extends Component {

  /**
   * 默认的样式，可以通过传入props进行覆盖重写
   * @type {{loadingText: string, loadErrorText: string, loadEndText: string, loadEmptyText: string, requestState: number, footerContainer: {}, footerText: {}, data: Array, id: string, onRequest: function()}}
   */
  static defaultProps = {
    loadingText: "数据加载中...",
    loadErrorText: "点击重新加载...",
    loadEndText: "已加载全部数据",
    loadEmptyText: "暂时没有相关数据",
    requestState: State.NORMAL,
    footerContainer: {},
    footerText: {},
    data: [],
    id: "flat_list",
    onRequest: (isRefresh) => {
    },
  };

  constructor(props) {
    super(props);
    //是否刷新/加载可用，外部可以通过调用方法设置，默认都可以
    this.state = {
      enableLoadMore: true,
      enableRefresh: true,
    };
  }

  /**
   * 不会显示顶部可以刷新的UI
   * @param enableLoad
   */
  setEnableLoad = (enableLoad) => {
    this.setState({
      enableLoad: enableLoad,
    });
  };


  /**
   * 他是不会显示底部刷新的UI的
   * @param enableRefresh
   */
  setEnableRefresh = (enableRefresh) => {
    this.setState({
      enableRefresh: enableRefresh,
    });
  };

  /**
   * 刷新触发
   * @private
   */
  _onRefresh = () => {
    console.log("_onRefresh");
    if (this._enableRefresh()) {
      this.props.onRequest && this.props.onRequest(true);
    }
  };

  /**
   * 是否可以顶部刷新
   * 当前需要 非刷新，而且也不是正在加载
   * @returns {boolean}
   */
  _enableRefresh = () => {
    console.log("_enableRefresh");
    return !(this.props.requestState === State.REFRESHING || this.props.requestState === State.LOADING);
  };

  _onEndReached = () => {
    console.log("end");
    if (this._enableLoad()) {
      this.props.onRequest && this.props.onRequest(false);
    }
  };

  /**
   * 是否可以加载，当前数据不能是0(因为进入的时候必须是refresh获取的数据显示)
   * @returns {boolean}
   */
  _enableLoad = () => {
    let { requestState, data } = this.props;
    if (data.length === 0) {
      return false;
    }
    return requestState === State.NORMAL;
  };

  /**
   * 刷新或加载
   * @param isRefresh
   * @private
   */
  _reRequest = (isRefresh) => {
    //回调外部方法
    this.props.onRequest && this.props.onRequest(isRefresh);
  };

  _keyExtractor = (item, index) => {
    const { keyExtractor } = this.props;
    if (keyExtractor) {
      return keyExtractor(item, index);
    }
    return index.toString();
  };


  /**
   * 渲染底部
   * @returns {*}
   */
  _renderFooter = () => {
    let footer = null;
    let footerContainerStyle = [styles.footerContainer, this.props.footerContainer];
    let footerTextStyle = [styles.footerText, this.props.footerText];
    let { loadingText, loadErrorText, loadEndText, loadEmptyText } = this.props;
    const hasData = this.props.data && this.props.data.length > 0;
    switch (this.props.requestState) {
      case State.NORMAL:
        footer = (<View style={footerContainerStyle}/>);
        break;
      case State.ERROR: {
        //是否有数据
        footer = hasData ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={footerContainerStyle}
            onPress={this._reRequest}
          >
            <Text style={footerTextStyle}>{loadErrorText}</Text>
          </TouchableOpacity>
        ) : (<EmptyData onPress={this._reRequest} tips={loadErrorText}/>);
        break;
      }
      case State.NO_DATA: {
        footer = <EmptyData onPress={this._reRequest} tips={loadEmptyText}/>;
        break;
      }
      case State.LOADING: {
        footer = (
          <View style={footerContainerStyle}>
            <ActivityIndicator size="small" color="#888888"/>
            <Text style={[footerTextStyle, { marginLeft: 7 }]}>{loadingText}</Text>
          </View>
        );
        break;
      }
      case State.LOAD_END: {
        footer = (
          <View style={footerContainerStyle}>
            <Text style={footerTextStyle}>{loadEndText}</Text>
          </View>
        );
        break;
      }
    }

    return footer;
  };
  _separator = () => {
    const { separator } = this.props;
    if (separator) {
      return separator();
    }
    return <View style={{
      height: 1,
      backgroundColor: "#ededed",
      marginLeft: 10,
      marginRight: 10
    }}/>;
  };

  /**
   * 渲染
   * @returns {*}
   */
  render() {
    //防止为null
    const {
      renderItem = () => {
      }
    } = this.props;
    return (
      <FlatList
        onEndReached={this._onEndReached}
        onRefresh={this.state.enableRefresh ? this._onRefresh : null}
        refreshing={this.state.enableRefresh && (this.props.requestState === State.REFRESHING)}
        ListFooterComponent={this.state.enableLoad ? this._renderFooter : null}
        onEndReachedThreshold={0.1}
        renderItem={renderItem}
        {...this.props}
        ItemSeparatorComponent={this._separator}
        keyExtractor={this._keyExtractor} Ò
      />
    );
  }
}

class EmptyData extends Component {
  static defaultProps = {
    tips: "暂无数据",
  };
  _onPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress(true);
    }
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} activeOpacity={0.8}>
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image
            style={{
              marginTop: 10,
              marginBottom: 10,
              width: 120,
              height: 120,
              resizeMode: "contain"
            }}
            source={require("../../img/pic_empty_data.png")}
          />
          <Text>{this.props.tips}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

