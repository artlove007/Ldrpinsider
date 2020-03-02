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
import { StyleSheet } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Picker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import ResultActions from "../redux/actions/ResultActions";
import StudentActions from "../redux/actions/StudentActions";
import SemesterActions from "../redux/actions/SemesterActions";
import BranchActions from "../redux/actions/BranchActions";
import ProfessorActions from "../redux/actions/ProfessorActions";

// END IMPORT ACTIONS

/** APIs

* actionsResult.create
*	@description CRUD ACTION create
*
* actionsResult.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsResult.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBy_result
*	@description CRUD ACTION findBy_result
*	@param Objectid key - Id of model to search for
*
* actionsSemester.findByresult
*	@description CRUD ACTION findByresult
*	@param Objectid key - Id of model to search for
*
* actionsSemester.list
*	@description CRUD ACTION list
*
* actionsBranch.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsProfessor.list
*	@description CRUD ACTION list
*

**/


class ResultEdit extends Component {
  
  // Init result
  constructor(props) {
    super(props);
    this.state = {
      result: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsResult.loadResult(itemId);
        this.props.actionsStudent.findBy_result(itemId);
        this.props.actionsSemester.findByresult(itemId);
      } else {
        this.setState({
          result: {}
        });
      }
      
      this.props.actionsBranch.loadBranchList();
      this.props.actionsProfessor.loadProfessorList();
      this.props.actionsSemester.loadSemesterList();
      this.props.actionsStudent.loadStudentList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      result: {}
    });
    this.props.actionsResult.reset();
  }

  // Insert props result in state
  componentWillReceiveProps(props) {
    this.setState({
      result: props.result
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.result._id) {
      // Edit
      this.props.actionsResult.saveResult(this.state.result).then(data => {
        this.props.navigation.navigate("ResultList");
      });
    } else {
      // Create
      this.props.actionsResult.createResult(this.state.result).then(data => {
        this.props.navigation.navigate("ResultList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Result</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel>
              <Label>
                Mark
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.result, { mark: value }))
                }
                value={this.state.result.mark && this.state.result.mark.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* Relation m:m branch with Branch */}
          
          <Item stackedLabel>              
            <Label >
              Branch
            </Label>
            <SectionedMultiSelect
              items={this.props.listBranch }
              displayKey="_id"
              uniqueKey="_id"
              selectText="Choose some items..."
              alwaysShowSelectText={true}
              modalAnimationType={"slide"}
              renderSelectText={() => {
                return "Choose some items...";
              }}
              onSelectedItemsChange={value =>
                this.setState(Object.assign(this.state.result, { branch: value }))
              }
              selectedItems={this.state.result.branch }
            />
          </Item>
          
          
          {/* Relation 1:m professor with professor */}
          
          <Item stackedLabel>
            <Label >
              Professor
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.result.professor }
              value={this.state.result.professor }
              onValueChange={value =>
                this.setState(Object.assign(this.state.result, { professor: value }))
              }
            >
              {this.props.listProfessor &&
                this.props.listProfessor.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          
          {/* Relation 1:m sem with Semester */}
          
          <Item stackedLabel>
            <Label >
              Sem
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.result.sem }
              value={this.state.result.sem }
              onValueChange={value =>
                this.setState(Object.assign(this.state.result, { sem: value }))
              }
            >
              {this.props.listSemester &&
                this.props.listSemester.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          
          {/* Relation m:m student with Student */}
          
          <Item stackedLabel>              
            <Label >
              Student
            </Label>
            <SectionedMultiSelect
              items={this.props.listStudent }
              displayKey="_id"
              uniqueKey="_id"
              selectText="Choose some items..."
              alwaysShowSelectText={true}
              modalAnimationType={"slide"}
              renderSelectText={() => {
                return "Choose some items...";
              }}
              onSelectedItemsChange={value =>
                this.setState(Object.assign(this.state.result, { student: value }))
              }
              selectedItems={this.state.result.student }
            />
          </Item>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Student */}

          
          {/* External relation with Semester */}

          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsResult: bindActionCreators(ResultActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsSemester: bindActionCreators(SemesterActions, dispatch),
    actionsBranch: bindActionCreators(BranchActions, dispatch),
    actionsProfessor: bindActionCreators(ProfessorActions, dispatch),
  };
};

// Validate types
ResultEdit.propTypes = { 
  actionsResult: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsSemester: PropTypes.object.isRequired,
  actionsBranch: PropTypes.object.isRequired,
  actionsProfessor: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    result: state.ResultEditReducer.result,
    listBranch: state.ResultEditReducer.listBranch,
    listProfessor: state.ResultEditReducer.listProfessor,
    listSemester: state.ResultEditReducer.listSemester,
    listStudent: state.ResultEditReducer.listStudent,
    listStudent: state.ResultEditReducer.listStudent,
    listSemester: state.ResultEditReducer.listSemester
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});