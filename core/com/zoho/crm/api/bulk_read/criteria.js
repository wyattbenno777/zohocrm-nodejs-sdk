const Choice = require("../../../../../../utils/util/choice").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Criteria{

	apiName;
	value;
	groupOperator;
	group;
	comparator;
	keyModified = new Map();
	/**
	 * The method to get the apiName
	 * @returns {String} A String
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the value
	 * @returns {Object} An Object
	 */
	getValue()	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param {Object} value An Object
	 */
	setValue(value)	{
		this.value = value;
		this.keyModified.set("value", 1);

	}

	/**
	 * The method to get the groupOperator
	 * @returns {Choice} An instance of Choice
	 */
	getGroupOperator()	{
		return this.groupOperator;

	}

	/**
	 * The method to set the value to groupOperator
	 * @param {Choice} groupOperator An instance of Choice
	 */
	setGroupOperator(groupOperator)	{
		if((groupOperator != null) && (!(groupOperator instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: Choice", null, null);
		}
		this.groupOperator = groupOperator;
		this.keyModified.set("group_operator", 1);

	}

	/**
	 * The method to get the group
	 * @returns {Array} An Array
	 */
	getGroup()	{
		return this.group;

	}

	/**
	 * The method to set the value to group
	 * @param {Array} group An Array
	 */
	setGroup(group)	{
		if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
		}
		this.group = group;
		this.keyModified.set("group", 1);

	}

	/**
	 * The method to get the comparator
	 * @returns {Choice} An instance of Choice
	 */
	getComparator()	{
		return this.comparator;

	}

	/**
	 * The method to set the value to comparator
	 * @param {Choice} comparator An instance of Choice
	 */
	setComparator(comparator)	{
		if((comparator != null) && (!(comparator instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: Choice", null, null);
		}
		this.comparator = comparator;
		this.keyModified.set("comparator", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String
	 * @returns {Integer} An Integer
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String
	 * @param {Integer} modification An Integer
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : Criteria,
	Criteria : Criteria
}