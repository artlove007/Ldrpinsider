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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN StudentActionsGenerated.js PLEASE EDIT ../StudentActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import StudentApi from "../../../api/StudentApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_STUDENT };
  },

  //CRUD METHODS

  // Create student
  createStudent: function(student) {
    return function(dispatch) {
      return StudentApi
        .createStudent(student)
        .then(student => {
          dispatch(actionsFunction.createStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createStudentSuccess: function(student) {
    return { type: types.CREATE_STUDENT_SUCCESS, payload: student };
  },


  // Delete student
  deleteStudent: function(id) {
    return function(dispatch) {
      return StudentApi
        .deleteStudent(id)
        .then(student => {
          dispatch(actionsFunction.deleteStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteStudentSuccess: function(student) {
    return { type: types.DELETE_STUDENT_SUCCESS, payload: student };
  },


  // Get student
  loadStudent: function(id) {
    return function(dispatch) {
      return StudentApi
        .getOneStudent(id)
        .then(student => {
          dispatch(actionsFunction.loadStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStudentSuccess: function(student) {
    return { type: types.GET_STUDENT_SUCCESS, payload: student };
  },

  // Load  list
  loadStudentList: function() {
    return function(dispatch) {
      return StudentApi
        .getStudentList()
        .then(list => {
          dispatch(actionsFunction.loadStudentListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadStudentListSuccess: function(list) {
    return { type: types.LIST_STUDENT_SUCCESS, payload: list };
  },

	
  // Save student
  saveStudent: function(student) {
    return function(dispatch) {
      return StudentApi
        .saveStudent(student)
        .then(student => {
          dispatch(actionsFunction.saveStudentSuccess(student));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveStudentSuccess: function(student) {
    return { type: types.UPDATE_STUDENT_SUCCESS, payload: student };
  },


};

export default actionsFunction;
