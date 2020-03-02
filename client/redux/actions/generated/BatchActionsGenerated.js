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
 *  TO CUSTOMIZE FUNCTIONS IN BatchActionsGenerated.js PLEASE EDIT ../BatchActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import BatchApi from "../../../api/BatchApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_BATCH };
  },

  //CRUD METHODS

  // Create batch
  createBatch: function(batch) {
    return function(dispatch) {
      return BatchApi
        .createBatch(batch)
        .then(batch => {
          dispatch(actionsFunction.createBatchSuccess(batch));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createBatchSuccess: function(batch) {
    return { type: types.CREATE_BATCH_SUCCESS, payload: batch };
  },


  // Delete batch
  deleteBatch: function(id) {
    return function(dispatch) {
      return BatchApi
        .deleteBatch(id)
        .then(batch => {
          dispatch(actionsFunction.deleteBatchSuccess(batch));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteBatchSuccess: function(batch) {
    return { type: types.DELETE_BATCH_SUCCESS, payload: batch };
  },


  // Get batch
  loadBatch: function(id) {
    return function(dispatch) {
      return BatchApi
        .getOneBatch(id)
        .then(batch => {
          dispatch(actionsFunction.loadBatchSuccess(batch));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBatchSuccess: function(batch) {
    return { type: types.GET_BATCH_SUCCESS, payload: batch };
  },

  // Load  list
  loadBatchList: function() {
    return function(dispatch) {
      return BatchApi
        .getBatchList()
        .then(list => {
          dispatch(actionsFunction.loadBatchListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBatchListSuccess: function(list) {
    return { type: types.LIST_BATCH_SUCCESS, payload: list };
  },

	
  // Save batch
  saveBatch: function(batch) {
    return function(dispatch) {
      return BatchApi
        .saveBatch(batch)
        .then(batch => {
          dispatch(actionsFunction.saveBatchSuccess(batch));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveBatchSuccess: function(batch) {
    return { type: types.UPDATE_BATCH_SUCCESS, payload: batch };
  },


};

export default actionsFunction;
