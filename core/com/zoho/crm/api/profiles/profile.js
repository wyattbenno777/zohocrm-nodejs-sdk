const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Profile{

	displayLabel;
	createdTime;
	modifiedTime;
	permissionsDetails;
	name;
	modifiedBy;
	default1;
	description;
	id;
	category;
	createdBy;
	sections;
	delete1;
	keyModified = new Map();
	/**
	 * The method to get the displayLabel
	 * @returns {String} A String
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns {Date} An instance of Date
	 */
	getCreatedTime()	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param {Date} createdTime An instance of Date
	 */
	setCreatedTime(createdTime)	{
		if((createdTime != null) && (!(createdTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
		}
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns {Date} An instance of Date
	 */
	getModifiedTime()	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param {Date} modifiedTime An instance of Date
	 */
	setModifiedTime(modifiedTime)	{
		if((modifiedTime != null) && (!(modifiedTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
		}
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the permissionsDetails
	 * @returns {Array} An Array
	 */
	getPermissionsDetails()	{
		return this.permissionsDetails;

	}

	/**
	 * The method to set the value to permissionsDetails
	 * @param {Array} permissionsDetails An Array
	 */
	setPermissionsDetails(permissionsDetails)	{
		if((permissionsDetails != null) && (!(Object.prototype.toString.call(permissionsDetails) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionsDetails EXPECTED TYPE: Array", null, null);
		}
		this.permissionsDetails = permissionsDetails;
		this.keyModified.set("permissions_details", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns {User} An instance of User
	 */
	getModifiedBy()	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param {User} modifiedBy An instance of User
	 */
	setModifiedBy(modifiedBy)	{
		const User = require("../users/user").MasterModel;
		if((modifiedBy != null) && (!(modifiedBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
		}
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the default
	 * @returns {Boolean} A Boolean
	 */
	getDefault()	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param {Boolean} default1 A Boolean
	 */
	setDefault(default1)	{
		if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
		}
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the description
	 * @returns {String} A String
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {String} description A String
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the category
	 * @returns {Boolean} A Boolean
	 */
	getCategory()	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param {Boolean} category A Boolean
	 */
	setCategory(category)	{
		if((category != null) && (!(Object.prototype.toString.call(category) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: Boolean", null, null);
		}
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns {User} An instance of User
	 */
	getCreatedBy()	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param {User} createdBy An instance of User
	 */
	setCreatedBy(createdBy)	{
		const User = require("../users/user").MasterModel;
		if((createdBy != null) && (!(createdBy instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
		}
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the sections
	 * @returns {Array} An Array
	 */
	getSections()	{
		return this.sections;

	}

	/**
	 * The method to set the value to sections
	 * @param {Array} sections An Array
	 */
	setSections(sections)	{
		if((sections != null) && (!(Object.prototype.toString.call(sections) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sections EXPECTED TYPE: Array", null, null);
		}
		this.sections = sections;
		this.keyModified.set("sections", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {Boolean} A Boolean
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {Boolean} delete1 A Boolean
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	MasterModel : Profile,
	Profile : Profile
}