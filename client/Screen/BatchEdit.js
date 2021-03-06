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
  Input,
  Picker,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import BatchActions from "../redux/actions/BatchActions";
import ProfessorActions from "../redux/actions/ProfessorActions";
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsBatch.create
*	@description CRUD ACTION create
*
* actionsBatch.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsBatch.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsProfessor.findBy_batch
*	@description CRUD ACTION findBy_batch
*	@param Objectid key - Id of model to search for
*
* actionsBatch.list
*	@description CRUD ACTION list
*
* actionsStudent.findBybatch
*	@description CRUD ACTION findBybatch
*	@param Objectid key - Id of model to search for
*

**/


class BatchEdit extends Component {
  
  // Init batch
  constructor(props) {
    super(props);
    this.state = {
      batch: {},
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
        this.props.actionsBatch.loadBatch(itemId);
        this.props.actionsProfessor.findBy_batch(itemId);
        this.props.actionsStudent.findBybatch(itemId);
      } else {
        this.setState({
          batch: {}
        });
      }
      
      this.props.actionsBatch.loadBatchList();
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      batch: {}
    });
    this.props.actionsBatch.reset();
  }

  // Insert props batch in state
  componentWillReceiveProps(props) {
    this.setState({
      batch: props.batch
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
    if (this.state.batch._id) {
      // Edit
      this.props.actionsBatch.saveBatch(this.state.batch).then(data => {
        this.props.navigation.navigate("BatchList");
      });
    } else {
      // Create
      this.props.actionsBatch.createBatch(this.state.batch).then(data => {
        this.props.navigation.navigate("BatchList");
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
            <Title>Detail Batch</Title>
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
                Batch
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.batch, { batch: value }))
                }
                value={this.state.batch.batch && this.state.batch.batch.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* Relation 1:m batchno with Batch */}
          
          <Item stackedLabel>
            <Label >
              Batchno
            </Label>
            <Picker
              mode="dropdown"
              iosHeader="Select a value"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.batch.batchno }
              value={this.state.batch.batchno }
              onValueChange={value =>
                this.setState(Object.assign(this.state.batch, { batchno: value }))
              }
            >
              {this.props.listBatch &&
                this.props.listBatch.map(row => (
                  <Picker.Item label={row._id} value={row._id} key={row._id}>
                    {row._id}
                  </Picker.Item>
                ))}
            </Picker>
          </Item>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with professor */}

          
          {/* External relation with Student */}

          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsBatch: bindActionCreators(BatchActions, dispatch),
    actionsProfessor: bindActionCreators(ProfessorActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
BatchEdit.propTypes = { 
  actionsBatch: PropTypes.object.isRequired,
  actionsProfessor: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    batch: state.BatchEditReducer.batch,
    listBatch: state.BatchEditReducer.listBatch,
    listProfessor: state.BatchEditReducer.listProfessor,
    listStudent: state.BatchEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BatchEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
