const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class BodyWrapper{

	selectQuery;
	keyModified = new Map();
	/**
	 * The method to get the selectQuery
	 * @returns {String} A String
	 */
	getSelectQuery()	{
		return this.selectQuery;

	}

	/**
	 * The method to set the value to selectQuery
	 * @param {String} selectQuery A String
	 */
	setSelectQuery(selectQuery)	{
		if((selectQuery != null) && (!(Object.prototype.toString.call(selectQuery) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: selectQuery EXPECTED TYPE: String", null, null);
		}
		this.selectQuery = selectQuery;
		this.keyModified.set("select_query", 1);

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
	MasterModel : BodyWrapper,
	BodyWrapper : BodyWrapper
}