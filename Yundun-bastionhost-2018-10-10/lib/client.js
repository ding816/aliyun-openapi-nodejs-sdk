
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-10';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeInstance(params = {}, options = {}) {
    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  listTagKeys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagKeys', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} NextToken - nextToken. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. optional.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. optional.
   */
  tagResourcesSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('TagResourcesSystemTags', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeys. optional.
   * @param {Boolean} All - deleteAll. optional.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResources', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeys. optional.
   * @param {Boolean} All - deleteAll. optional.
   */
  untagResourcesSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResourcesSystemTags', params, options);
  }

}

module.exports = Client;
