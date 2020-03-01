/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e5c1e0652a8e9561a0d2dba
*
* You will get 10% discount for each one of your friends
* 
*/
// Dependencies
import React, { Component } from "react";
import { Provider } from "react-redux";
import SecurityService from "./security/SecurityService";

// Components
import AppContainer from "./AppContainer";

// Redux
import store from "./redux/store";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    let user = await SecurityService.getUser();
    await SecurityService.setAuthorization();
    this.setState({ user: user });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer
          user={this.state.user}
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}
