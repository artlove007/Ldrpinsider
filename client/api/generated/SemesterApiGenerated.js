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
 *  TO CUSTOMIZE APIS IN SemesterApiGenerated.js PLEASE EDIT ../SemesterApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class SemesterApiGenerated {

  static contextUrl = properties.endpoint + "/semester";

  // CRUD METHODS

  /**
  * SemesterService.create
  *   @description CRUD ACTION create
  *
  */
  static createSemester(semester) {
    return axios.post(SemesterApiGenerated.contextUrl, semester )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteSemester(id) {
    return axios.delete(SemesterApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.findBybranch
  *   @description CRUD ACTION findBybranch
  *   @param Objectid key Id of model to search for
  *
  */
  static findBybranch(id) {
    return axios.get(SemesterApiGenerated.contextUrl + "/findBybranch/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.findByresult
  *   @description CRUD ACTION findByresult
  *   @param Objectid key Id of model to search for
  *
  */
  static findByresult(id) {
    return axios.get(SemesterApiGenerated.contextUrl + "/findByresult/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.findBysemester
  *   @description CRUD ACTION findBysemester
  *   @param Objectid key Id of model to search for
  *
  */
  static findBysemester(id) {
    return axios.get(SemesterApiGenerated.contextUrl + "/findBysemester/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneSemester(id) {
    return axios.get(SemesterApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.list
  *   @description CRUD ACTION list
  *
  */
  static getSemesterList() {
    return axios.get(SemesterApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * SemesterService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveSemester(semester) {
    return axios.post(SemesterApiGenerated.contextUrl + "/" + semester._id, semester )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default SemesterApiGenerated;
