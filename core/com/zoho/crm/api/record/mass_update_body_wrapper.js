const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class MassUpdateBodyWrapper{

	data;
	cvid;
	ids;
	territory;
	overWrite;
	criteria;
	keyModified = new Map();
	/**
	 * The method to get the data
	 * @returns {Array} An Array
	 */
	getData()	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param {Array} data An Array
	 */
	setData(data)	{
		if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
		}
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the cvid
	 * @returns {String} A String
	 */
	getCvid()	{
		return this.cvid;

	}

	/**
	 * The method to set the value to cvid
	 * @param {String} cvid A String
	 */
	setCvid(cvid)	{
		if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: String", null, null);
		}
		this.cvid = cvid;
		this.keyModified.set("cvid", 1);

	}

	/**
	 * The method to get the ids
	 * @returns {Array} An Array
	 */
	getIds()	{
		return this.ids;

	}

	/**
	 * The method to set the value to ids
	 * @param {Array} ids An Array
	 */
	setIds(ids)	{
		if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
		}
		this.ids = ids;
		this.keyModified.set("ids", 1);

	}

	/**
	 * The method to get the territory
	 * @returns {Territory} An instance of Territory
	 */
	getTerritory()	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param {Territory} territory An instance of Territory
	 */
	setTerritory(territory)	{
		const Territory = require("./territory").MasterModel;
		if((territory != null) && (!(territory instanceof Territory)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: Territory", null, null);
		}
		this.territory = territory;
		this.keyModified.set("territory", 1);

	}

	/**
	 * The method to get the overWrite
	 * @returns {Boolean} A Boolean
	 */
	getOverWrite()	{
		return this.overWrite;

	}

	/**
	 * The method to set the value to overWrite
	 * @param {Boolean} overWrite A Boolean
	 */
	setOverWrite(overWrite)	{
		if((overWrite != null) && (!(Object.prototype.toString.call(overWrite) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overWrite EXPECTED TYPE: Boolean", null, null);
		}
		this.overWrite = overWrite;
		this.keyModified.set("over_write", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Array} An Array
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Array} criteria An Array
	 */
	setCriteria(criteria)	{
		if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Array", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

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
	MasterModel : MassUpdateBodyWrapper,
	MassUpdateBodyWrapper : MassUpdateBodyWrapper
}