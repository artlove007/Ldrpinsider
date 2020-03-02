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
import React, { Component } from "react";
import { ListItem, List, Content, Text, Icon } from "native-base";
import { StyleSheet } from "react-native";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import IconFA from "react-native-vector-icons/FontAwesome";
import SecurityService from "../security/SecurityService";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async logout() {
    await SecurityService.logout();
    this.props.navigation.navigate("Login", { showError: false });
  }

  render() {
    return (
      <Content style={styles.content}>
        <List>
          <ListItem onPress={() => this.props.navigation.navigate("Home")}>
            <IconMaterial name="home" size={20} style={styles.icons} />
            <Text>Home</Text>
          </ListItem>
          {/* START MY SCREENS */}
 
          <ListItem onPress={() => this.props.navigation.navigate("BatchList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List Batch</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("BranchList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List Branch</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("SemesterList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List Semester</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("StudentList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List Student</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("professorList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List professor</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("resultList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List result</Text>
          </ListItem>
          
          <ListItem onPress={() => this.props.navigation.navigate("subjectList")}>
            <IconMaterial
              name="keyboard-arrow-right"
              size={20}
              style={styles.icons}
            />
            <Text>List subject</Text>
          </ListItem>
          {/* END MY SCREENS */}

          <ListItem itemDivider />
          <ListItem onPress={() => this.props.navigation.navigate("Profile")}>
            <IconFA name="user" size={20} style={styles.icons} />
            <Text>Profile</Text>
          </ListItem>
          <ListItem onPress={() => this.logout()}>
            <IconMaterial
              name="power-settings-new"
              size={20}
              style={styles.icons}
            />
            <Text>Logout</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#ffffff",
    paddingTop: 50
  },
  icons: {
    marginRight: 20
  }
});
