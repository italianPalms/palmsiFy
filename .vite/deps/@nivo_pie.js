import {
  require_jsx_runtime,
  require_prop_types
} from "./chunk-KNUUBBVK.js";
import {
  require_react_dom
} from "./chunk-FBRNPY62.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __commonJS,
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array2, key) {
      var length = array2.length;
      while (length--) {
        if (eq(array2[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index2 == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index2, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      return index2 < 0 ? void 0 : data[index2][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index2 = assocIndexOf(data, key);
      if (index2 < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index2][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e7) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e7) {
        }
        try {
          return func + "";
        } catch (e7) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map4, key) {
      var data = map4.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index2 = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index2 < length) {
        var entry = entries[index2];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs2 = data.__data__;
        if (!Map2 || pairs2.length < LARGE_ARRAY_SIZE - 1) {
          pairs2.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs2);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e7) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignMergeValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index2];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array2) {
      var index2 = -1, length = source.length;
      array2 || (array2 = Array(length));
      while (++index2 < length) {
        array2[index2] = source[index2];
      }
      return array2;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e7) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module) {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module.exports = safeGet;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index2 = -1, length = props.length;
      while (++index2 < length) {
        var key = props[index2];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n4, iteratee) {
      var index2 = -1, result = Array(n4);
      while (++index2 < n4) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity6(value) {
      return value;
    }
    module.exports = identity6;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start2, transform) {
      start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
      return function() {
        var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array2 = Array(length);
        while (++index2 < length) {
          array2[index2] = args[start2 + index2];
        }
        index2 = -1;
        var otherArgs = Array(start2 + 1);
        while (++index2 < start2) {
          otherArgs[index2] = args[index2];
        }
        otherArgs[start2] = transform(array2);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity6 = require_identity();
    var baseSetToString = !defineProperty ? identity6 : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count2 = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count2 >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count2 = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity6 = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start2) {
      return setToString(overRest(func, start2, identity6), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index2, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index2;
      if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
        return eq(object[index2], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index2 < length) {
          var source = sources[index2];
          if (source) {
            assigner(object, source, index2, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge2;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number2, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array2, iteratee) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array2[index2], index2, array2);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index2 = 0, length = path2.length;
      while (object != null && index2 < length) {
        object = object[toKey(path2[index2++])];
      }
      return index2 && index2 == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path2, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index2 < length) {
        var key = toKey(path2[index2]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index2 != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject(objValue) ? objValue : isIndex(path2[index2 + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/set.js
var require_set = __commonJS({
  "node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set2(object, path2, value) {
      return object == null ? object : baseSet(object, path2, value);
    }
    module.exports = set2;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? array2[length - 1] : void 0;
    }
    module.exports = last;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index2 = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index2 < length) {
        this.add(values[index2]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array2, predicate, fromIndex, fromRight) {
      var length = array2.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array2, value, fromIndex) {
      var index2 = fromIndex - 1, length = array2.length;
      while (++index2 < length) {
        if (array2[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array2, value, fromIndex) {
      return value === value ? strictIndexOf(array2, value, fromIndex) : baseFindIndex(array2, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array2, value) {
      var length = array2 == null ? 0 : array2.length;
      return !!length && baseIndexOf(array2, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array2, value, comparator) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (comparator(value, array2[index2])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_baseDifference.js
var require_baseDifference = __commonJS({
  "node_modules/lodash/_baseDifference.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var arrayMap = require_arrayMap();
    var baseUnary = require_baseUnary();
    var cacheHas = require_cacheHas();
    var LARGE_ARRAY_SIZE = 200;
    function baseDifference(array2, values, iteratee, comparator) {
      var index2 = -1, includes = arrayIncludes, isCommon = true, length = array2.length, result = [], valuesLength = values.length;
      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      } else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
        while (++index2 < length) {
          var value = array2[index2], computed = iteratee == null ? value : iteratee(value);
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var valuesIndex = valuesLength;
            while (valuesIndex--) {
              if (values[valuesIndex] === computed) {
                continue outer;
              }
            }
            result.push(value);
          } else if (!includes(values, computed, comparator)) {
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseDifference;
  }
});

// node_modules/lodash/without.js
var require_without = __commonJS({
  "node_modules/lodash/without.js"(exports, module) {
    var baseDifference = require_baseDifference();
    var baseRest = require_baseRest();
    var isArrayLikeObject = require_isArrayLikeObject();
    var without = baseRest(function(array2, values) {
      return isArrayLikeObject(array2) ? baseDifference(array2, values) : [];
    });
    module.exports = without;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index2 = -1, length = paths.length, result = {};
      while (++index2 < length) {
        var path2 = paths[index2], value = baseGet(object, path2);
        if (predicate(value, path2)) {
          baseSet(result, castPath(path2, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index2 = -1, length = path2.length, result = false;
      while (++index2 < length) {
        var key = toKey(path2[index2]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index2 != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_basePick.js
var require_basePick = __commonJS({
  "node_modules/lodash/_basePick.js"(exports, module) {
    var basePickBy = require_basePickBy();
    var hasIn = require_hasIn();
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path2) {
        return hasIn(object, path2);
      });
    }
    module.exports = basePick;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array2, values) {
      var index2 = -1, length = values.length, offset = array2.length;
      while (++index2 < length) {
        array2[offset + index2] = values[index2];
      }
      return array2;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array2, depth, predicate, isStrict, result) {
      var index2 = -1, length = array2.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index2 < length) {
        var value = array2[index2];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array2) {
      var length = array2 == null ? 0 : array2.length;
      return length ? baseFlatten(array2, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/pick.js
var require_pick = __commonJS({
  "node_modules/lodash/pick.js"(exports, module) {
    var basePick = require_basePick();
    var flatRest = require_flatRest();
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });
    module.exports = pick;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length;
      while (++index2 < length) {
        if (predicate(array2[index2], index2, array2)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array2);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array2;
      }
      var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array2, other);
      stack.set(other, array2);
      while (++index2 < arrLength) {
        var arrValue = array2[index2], othValue = other[index2];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array2);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map4) {
      var index2 = -1, result = Array(map4.size);
      map4.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index2 = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array2, predicate) {
      var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array2[index2];
        if (predicate(value, index2, array2)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index2 = objLength;
      while (index2--) {
        var key = objProps[index2];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index2 < objLength) {
        key = objProps[index2];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual2;
  }
});

// node_modules/@nivo/pie/dist/nivo-pie.es.js
var import_react20 = __toESM(require_react());

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_react16 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_react15 = __toESM(require_react());

// node_modules/@react-spring/shared/dist/react-spring_shared.modern.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var globals_exports = {};
__export(globals_exports, {
  assign: () => assign,
  colors: () => colors,
  createStringInterpolator: () => createStringInterpolator,
  skipAnimation: () => skipAnimation,
  to: () => to,
  willAdvance: () => willAdvance
});
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  const time2 = raf.now() + ms;
  const cancel = () => {
    const i4 = timeouts.findIndex((t7) => t7.cancel == cancel);
    if (~i4)
      timeouts.splice(i4, 1);
    pendingCount -= ~i4 ? 1 : 0;
  };
  const timeout = { time: time2, handler, cancel };
  timeouts.splice(findTimeout(time2), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time2) => ~(~timeouts.findIndex((t7) => t7.time > time2) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  onFinishQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {
  }
);
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn(
      "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
    );
  } else {
    update();
  }
};
var ts = -1;
var pendingCount = 0;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function stop() {
  ts = -1;
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  const prevTs = ts;
  ts = raf.now();
  const count2 = findTimeout(ts);
  if (count2) {
    eachSafely(timeouts.splice(0, count2), (t7) => t7.handler());
    pendingCount -= count2;
  }
  if (!pendingCount) {
    stop();
    return;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = /* @__PURE__ */ new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = /* @__PURE__ */ new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e7) {
      raf.catch(e7);
    }
  });
}
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, { value, writable: true, configurable: true });
var is = {
  arr: Array.isArray,
  obj: (a5) => !!a5 && a5.constructor.name === "Object",
  fun: (a5) => typeof a5 === "function",
  str: (a5) => typeof a5 === "string",
  num: (a5) => typeof a5 === "number",
  und: (a5) => a5 === void 0
};
function isEqual(a5, b4) {
  if (is.arr(a5)) {
    if (!is.arr(b4) || a5.length !== b4.length)
      return false;
    for (let i4 = 0; i4 < a5.length; i4++) {
      if (a5[i4] !== b4[i4])
        return false;
    }
    return true;
  }
  return a5 === b4;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i4 = 0; i4 < obj.length; i4++) {
      fn.call(ctx2, obj[i4], `${i4}`);
    }
    return;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a5) => is.und(a5) ? [] : is.arr(a5) ? a5 : [a5];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
var createStringInterpolator;
var to;
var colors = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals) => {
  if (globals.to)
    to = globals.to;
  if (globals.now)
    raf.now = globals.now;
  if (globals.colors !== void 0)
    colors = globals.colors;
  if (globals.skipAnimation != null)
    skipAnimation = globals.skipAnimation;
  if (globals.createStringInterpolator)
    createStringInterpolator = globals.createStringInterpolator;
  if (globals.requestAnimationFrame)
    raf.use(globals.requestAnimationFrame);
  if (globals.batchedUpdates)
    raf.batchedUpdates = globals.batchedUpdates;
  if (globals.willAdvance)
    willAdvance = globals.willAdvance;
  if (globals.frameLoop)
    raf.frameLoop = globals.frameLoop;
};
var startQueue = /* @__PURE__ */ new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  /** Advance the given animation on every frame until idle. */
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  /** Advance all animations by the given time. */
  advance,
  /** Call this when an animation's priority changes. */
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  /**
   * Clear all animations. For testing purposes.
   *
   * ☠️ Never call this from within the frameloop.
   */
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(
    findIndex(currentFrame, (other) => other.priority > animation.priority),
    0,
    animation
  );
}
function advance(dt2) {
  const nextFrame = prevFrame;
  for (let i4 = 0; i4 < currentFrame.length; i4++) {
    const animation = currentFrame[i4];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt2);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index2 = arr.findIndex(test);
  return index2 < 0 ? arr.length : index2;
}
var clamp = (min3, max3, v5) => Math.min(Math.max(v5, min3), max3);
var colors2 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp(
  "hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)
);
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color4) {
  let match;
  if (typeof color4 === "number") {
    return color4 >>> 0 === color4 && color4 >= 0 && color4 <= 4294967295 ? color4 : null;
  }
  if (match = hex6.exec(color4))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors && colors[color4] !== void 0) {
    return colors[color4];
  }
  if (match = rgb.exec(color4)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    255) >>> // a
    0;
  }
  if (match = rgba.exec(color4)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }
  if (match = hex3.exec(color4)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      "ff",
      // a
      16
    ) >>> 0;
  }
  if (match = hex8.exec(color4))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color4)) {
    return parseInt(
      match[1] + match[1] + // r
      match[2] + match[2] + // g
      match[3] + match[3] + // b
      match[4] + match[4],
      // a
      16
    ) >>> 0;
  }
  if (match = hsl.exec(color4)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | 255) >>> // a
    0;
  }
  if (match = hsla.exec(color4)) {
    return (hslToRgb(
      parse360(match[1]),
      // h
      parsePercentage(match[2]),
      // s
      parsePercentage(match[3])
      // l
    ) | parse1(match[4])) >>> // a
    0;
  }
  return null;
}
function hue2rgb(p4, q3, t7) {
  if (t7 < 0)
    t7 += 1;
  if (t7 > 1)
    t7 -= 1;
  if (t7 < 1 / 6)
    return p4 + (q3 - p4) * 6 * t7;
  if (t7 < 1 / 2)
    return q3;
  if (t7 < 2 / 3)
    return p4 + (q3 - p4) * (2 / 3 - t7) * 6;
  return p4;
}
function hslToRgb(h3, s4, l3) {
  const q3 = l3 < 0.5 ? l3 * (1 + s4) : l3 + s4 - l3 * s4;
  const p4 = 2 * l3 - q3;
  const r4 = hue2rgb(p4, q3, h3 + 1 / 3);
  const g3 = hue2rgb(p4, q3, h3);
  const b4 = hue2rgb(p4, q3, h3 - 1 / 3);
  return Math.round(r4 * 255) << 24 | Math.round(g3 * 255) << 16 | Math.round(b4 * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  const r4 = (int32Color & 4278190080) >>> 24;
  const g3 = (int32Color & 16711680) >>> 16;
  const b4 = (int32Color & 65280) >>> 8;
  const a5 = (int32Color & 255) / 255;
  return `rgba(${r4}, ${g3}, ${b4}, ${a5})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t7) => t7);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(
      input,
      inputRange[range2],
      inputRange[range2 + 1],
      outputRange[range2],
      outputRange[range2 + 1],
      easing,
      extrapolateLeft,
      extrapolateRight,
      config2.map
    );
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map4) {
  let result = map4 ? map4(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i4 = 1; i4 < inputRange.length - 1; ++i4)
    if (inputRange[i4] >= input)
      break;
  return i4 - 1;
}
var steps = (steps2, direction = "end") => (progress2) => {
  progress2 = direction === "end" ? Math.min(progress2, 0.999) : Math.max(progress2, 1e-3);
  const expanded = progress2 * steps2;
  const rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
  return clamp(0, 1, rounded / steps2);
};
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x6) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x6 < 1 / d1) {
    return n1 * x6 * x6;
  } else if (x6 < 2 / d1) {
    return n1 * (x6 -= 1.5 / d1) * x6 + 0.75;
  } else if (x6 < 2.5 / d1) {
    return n1 * (x6 -= 2.25 / d1) * x6 + 0.9375;
  } else {
    return n1 * (x6 -= 2.625 / d1) * x6 + 0.984375;
  }
};
var easings = {
  linear: (x6) => x6,
  easeInQuad: (x6) => x6 * x6,
  easeOutQuad: (x6) => 1 - (1 - x6) * (1 - x6),
  easeInOutQuad: (x6) => x6 < 0.5 ? 2 * x6 * x6 : 1 - Math.pow(-2 * x6 + 2, 2) / 2,
  easeInCubic: (x6) => x6 * x6 * x6,
  easeOutCubic: (x6) => 1 - Math.pow(1 - x6, 3),
  easeInOutCubic: (x6) => x6 < 0.5 ? 4 * x6 * x6 * x6 : 1 - Math.pow(-2 * x6 + 2, 3) / 2,
  easeInQuart: (x6) => x6 * x6 * x6 * x6,
  easeOutQuart: (x6) => 1 - Math.pow(1 - x6, 4),
  easeInOutQuart: (x6) => x6 < 0.5 ? 8 * x6 * x6 * x6 * x6 : 1 - Math.pow(-2 * x6 + 2, 4) / 2,
  easeInQuint: (x6) => x6 * x6 * x6 * x6 * x6,
  easeOutQuint: (x6) => 1 - Math.pow(1 - x6, 5),
  easeInOutQuint: (x6) => x6 < 0.5 ? 16 * x6 * x6 * x6 * x6 * x6 : 1 - Math.pow(-2 * x6 + 2, 5) / 2,
  easeInSine: (x6) => 1 - Math.cos(x6 * Math.PI / 2),
  easeOutSine: (x6) => Math.sin(x6 * Math.PI / 2),
  easeInOutSine: (x6) => -(Math.cos(Math.PI * x6) - 1) / 2,
  easeInExpo: (x6) => x6 === 0 ? 0 : Math.pow(2, 10 * x6 - 10),
  easeOutExpo: (x6) => x6 === 1 ? 1 : 1 - Math.pow(2, -10 * x6),
  easeInOutExpo: (x6) => x6 === 0 ? 0 : x6 === 1 ? 1 : x6 < 0.5 ? Math.pow(2, 20 * x6 - 10) / 2 : (2 - Math.pow(2, -20 * x6 + 10)) / 2,
  easeInCirc: (x6) => 1 - Math.sqrt(1 - Math.pow(x6, 2)),
  easeOutCirc: (x6) => Math.sqrt(1 - Math.pow(x6 - 1, 2)),
  easeInOutCirc: (x6) => x6 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x6, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x6 + 2, 2)) + 1) / 2,
  easeInBack: (x6) => c3 * x6 * x6 * x6 - c1 * x6 * x6,
  easeOutBack: (x6) => 1 + c3 * Math.pow(x6 - 1, 3) + c1 * Math.pow(x6 - 1, 2),
  easeInOutBack: (x6) => x6 < 0.5 ? Math.pow(2 * x6, 2) * ((c2 + 1) * 2 * x6 - c2) / 2 : (Math.pow(2 * x6 - 2, 2) * ((c2 + 1) * (x6 * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x6) => x6 === 0 ? 0 : x6 === 1 ? 1 : -Math.pow(2, 10 * x6 - 10) * Math.sin((x6 * 10 - 10.75) * c4),
  easeOutElastic: (x6) => x6 === 0 ? 0 : x6 === 1 ? 1 : Math.pow(2, -10 * x6) * Math.sin((x6 * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x6) => x6 === 0 ? 0 : x6 === 1 ? 1 : x6 < 0.5 ? -(Math.pow(2, 20 * x6 - 10) * Math.sin((20 * x6 - 11.125) * c5)) / 2 : Math.pow(2, -20 * x6 + 10) * Math.sin((20 * x6 - 11.125) * c5) / 2 + 1,
  easeInBounce: (x6) => 1 - bounceOut(1 - x6),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x6) => x6 < 0.5 ? (1 - bounceOut(1 - 2 * x6)) / 2 : (1 + bounceOut(2 * x6 - 1)) / 2,
  steps
};
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer2, event) {
  if (observer2.eventObserved) {
    observer2.eventObserved(event);
  } else {
    observer2(event);
  }
}
function callFluidObservers(target, event) {
  const observers = target[$observers];
  if (observers) {
    observers.forEach((observer2) => {
      callFluidObserver(observer2, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer2) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = /* @__PURE__ */ new Set());
    }
    if (!observers.has(observer2)) {
      observers.add(observer2);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer2);
      }
    }
  }
  return observer2;
}
function removeFluidObserver(target, observer2) {
  const observers = target[$observers];
  if (observers && observers.has(observer2)) {
    const count2 = observers.size - 1;
    if (count2) {
      observers.delete(observer2);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count2, observer2);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const value2 = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (value2) {
      return value2;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_2, p1, p22, p32, p4) => `rgba(${Math.round(p1)}, ${Math.round(p22)}, ${Math.round(p32)}, ${p4})`;
var createStringInterpolator2 = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors ? (
      // match color names, ignore partial matches
      new RegExp(`(${Object.keys(colors).join("|")})(?!\\w)`, "g")
    ) : (
      // never match
      /^\b$/
    );
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map(
    (_2, i4) => keyframes.map((values) => {
      if (!(i4 in values)) {
        throw Error('The arity of each "output" value must be equal');
      }
      return values[i4];
    })
  );
  const interpolators = outputRanges.map(
    (output2) => createInterpolator({ ...config2, output: output2 })
  );
  return (input) => {
    var _a;
    const missingUnit = !unitRegex.test(output[0]) && ((_a = output.find((value) => unitRegex.test(value))) == null ? void 0 : _a.replace(numberRegex, ""));
    let i4 = 0;
    return output[0].replace(
      numberRegex,
      () => `${interpolators[i4++](input)}${missingUnit || ""}`
    ).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(
    `${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`
  );
}
var warnDirectCall = once(console.warn);
function deprecateDirectCall() {
  warnDirectCall(
    `${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || // Do not identify a CSS variable as an AnimatedString if its SSR
  !isSSR() && cssVariableRegex.test(value) || value in (colors || {}));
}
var useIsomorphicLayoutEffect = isSSR() ? import_react4.useEffect : import_react4.useLayoutEffect;
var useIsMounted = () => {
  const isMounted = (0, import_react3.useRef)(false);
  useIsomorphicLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};
function useForceUpdate() {
  const update22 = (0, import_react2.useState)()[1];
  const isMounted = useIsMounted();
  return () => {
    if (isMounted.current) {
      update22(Math.random());
    }
  };
}
function useMemoOne(getResult, inputs) {
  const [initial] = (0, import_react5.useState)(
    () => ({
      inputs,
      result: getResult()
    })
  );
  const committed = (0, import_react5.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(
      inputs && cache.inputs && areInputsEqual(inputs, cache.inputs)
    );
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  (0, import_react5.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i4 = 0; i4 < next.length; i4++) {
    if (next[i4] !== prev[i4]) {
      return false;
    }
  }
  return true;
}
var useOnce = (effect) => (0, import_react6.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function usePrev(value) {
  const prevRef = (0, import_react7.useRef)();
  (0, import_react7.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-spring/animated/dist/react-spring_animated.modern.mjs
var React = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    setAnimated(this, this);
  }
  /** Get every `AnimatedValue` used by this node. */
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this._value = _value;
    this.done = true;
    this.durationProgress = 0;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  /** @internal */
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const { done } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  /** @internal */
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    const value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = { dependencies: null };
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
      }
    });
    return values;
  }
  /** Replace the raw object data */
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  /** Create a payload set. */
  _makePayload(source) {
    if (source) {
      const payload = /* @__PURE__ */ new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  /** Add to a payload set. */
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  /** @internal */
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i4) => node.setValue(source[i4])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
var withAnimated = (Component, host2) => {
  const hasInstance = (
    // Function components must use "forwardRef" to avoid being
    // re-rendered on every animation frame.
    !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent
  );
  return (0, import_react9.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react9.useRef)(null);
    const ref = hasInstance && // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, import_react9.useCallback)(
      (value) => {
        instanceRef.current = updateRef(givenRef, value);
      },
      [givenRef]
    );
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0, import_react9.useRef)();
    useIsomorphicLayoutEffect(() => {
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      return () => {
        if (observerRef.current) {
          each(
            observerRef.current.deps,
            (dep) => removeFluidObserver(dep, observerRef.current)
          );
          raf.cancel(observerRef.current.update);
        }
      };
    });
    (0, import_react9.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React.createElement(Component, { ...usedProps, ref });
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = /* @__PURE__ */ new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = {
      ...props,
      style: host2.createAnimatedStyle(props.style)
    };
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: applyAnimatedValues2 = () => false,
  createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: applyAnimatedValues2,
    createAnimatedStyle,
    getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component);
    }
    animated2[key] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// node_modules/@react-spring/core/dist/react-spring_core.modern.mjs
var React2 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_react12 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_react14 = __toESM(require_react(), 1);
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = [
  "config",
  "onProps",
  "onStart",
  "onChange",
  "onPause",
  "onResume",
  "onRest"
];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  // Transition props
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  // Internal props
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count2 = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count2++;
    }
  });
  if (count2) {
    return forward;
  }
}
function inferTo(props) {
  const to22 = getForwardProps(props);
  if (to22) {
    const out = { to: to22 };
    eachProp(props, (val, key) => key in to22 || (out[key] = val));
    return out;
  }
  return { ...props };
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals_exports.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _2 in props)
    return true;
  return false;
}
function isAsyncTo(to22) {
  return is.fun(to22) || is.arr(to22) && is.obj(to22[0]);
}
function detachRefs(ctrl, ref) {
  var _a;
  (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  var _a;
  if (ref && ctrl.ref !== ref) {
    (_a = ctrl.ref) == null ? void 0 : _a.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
}
var config = {
  default: { tension: 170, friction: 26 },
  gentle: { tension: 120, friction: 14 },
  wobbly: { tension: 180, friction: 12 },
  stiff: { tension: 210, friction: 20 },
  slow: { tension: 280, friction: 60 },
  molasses: { tension: 280, friction: 120 }
};
var defaults = {
  ...config.default,
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
};
var AnimationConfig = class {
  constructor() {
    this.velocity = 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = { ...defaultConfig };
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = { ...defaultConfig, ...newConfig };
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let { frequency, damping } = config2;
  const { mass } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, { key, props, defaultProps, state, actions }) {
  return new Promise((resolve, reject) => {
    let delay;
    let timeout;
    let cancel = matchProp(props.cancel ?? (defaultProps == null ? void 0 : defaultProps.cancel), key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals_exports.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start({ ...props, callId, cancel }, resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(
  target.get(),
  results.every((result) => result.finished)
);
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to22, props, state, target) {
  const { callId, parentId, onRest } = props;
  const { asyncTo: prevTo, promise: prevPromise } = state;
  if (!parentId && to22 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to22;
    const defaultProps = getDefaultProps(
      props,
      (value, key) => (
        // The `onRest` prop is only called when the `runAsync` promise is resolved.
        key === "onRest" ? void 0 : value
      )
    );
    let preventBail;
    let bail;
    const bailPromise = new Promise(
      (resolve, reject) => (preventBail = resolve, bail = reject)
    );
    const bailIfEnded = (bailSignal) => {
      const bailResult = (
        // The `cancel` prop or `stop` method was used.
        callId <= (state.cancelId || 0) && getCancelledResult(target) || // The async `to` prop was replaced.
        callId !== state.asyncId && getFinishedResult(target, false)
      );
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAnimationSignal();
      return (async () => {
        if (globals_exports.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? { ...arg1 } : { ...arg2, to: arg1 };
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals_exports.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to22)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to22);
      } else {
        animating = Promise.resolve(to22(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAnimationSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t7) => t7.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super(
      "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
    );
  }
};
var SkipAnimationSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
  }
};
var isFrameValue = (value) => value instanceof FrameValue;
var nextId = 1;
var FrameValue = class extends FluidValue {
  constructor() {
    super(...arguments);
    this.id = nextId++;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  /** Get the current value */
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  /** Create a spring that maps our value to another value */
  to(...args) {
    return globals_exports.to(this, args);
  }
  /** @deprecated Use the `to` method instead. */
  interpolate(...args) {
    deprecateInterpolate();
    return globals_exports.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count2) {
    if (count2 == 1)
      this._attach();
  }
  observerRemoved(count2) {
    if (count2 == 0)
      this._detach();
  }
  /** Called when the first child is added. */
  _attach() {
  }
  /** Called when the last child is removed. */
  _detach() {
  }
  /** Tell our children about our new value */
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  /** Tell our children about our new priority */
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.animation = new Animation();
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._pendingCalls = /* @__PURE__ */ new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? { ...arg1 } : { ...arg2, from: arg1 };
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  /** Equals true when not advancing on each frame. */
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  /**
   * When true, this value has been animated at least once.
   */
  get hasAnimated() {
    return hasAnimated(this);
  }
  /**
   * When true, this value has an unfinished animation,
   * which is either active or paused.
   */
  get isAnimating() {
    return isAnimating(this);
  }
  /**
   * When true, all current and future animations are paused.
   */
  get isPaused() {
    return isPaused(this);
  }
  /**
   *
   *
   */
  get isDelayed() {
    return this._state.delayed;
  }
  /** Advance the current animation by a number of milliseconds */
  advance(dt2) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let { toValues } = anim;
    const { config: config2 } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i4) => {
      if (node2.done)
        return;
      const to22 = (
        // Animated strings always go from 0 to 1.
        node2.constructor == AnimatedString ? 1 : payload ? payload[i4].lastPosition : toValues[i4]
      );
      let finished = anim.immediate;
      let position = to22;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt2;
        const from = anim.fromValues[i4];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i4] : config2.velocity;
        let velocity;
        const precision = config2.precision || (from == to22 ? 5e-3 : Math.min(1, Math.abs(to22 - from) * 1e-3));
        if (!is.und(config2.duration)) {
          let p4 = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt2;
              }
            }
            p4 = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p4 = p4 > 1 ? 1 : p4 < 0 ? 0 : p4;
            node2.durationProgress = p4;
          }
          position = from + config2.easing(p4) * (to22 - from);
          velocity = (position - node2.lastPosition) / dt2;
          finished = p4 == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e7 = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e7);
          finished = Math.abs(node2.lastPosition - position) <= precision;
          velocity = v0 * e7;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to22 ? node2.v0 > 0 : from < to22;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt2 / step);
          for (let n4 = 0; n4 < numSteps; ++n4) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to22 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to22 || position > to22 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to22;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to22);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i4].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  /** Set the current value, while stopping the current animation */
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  /**
   * Freeze the active animation in time, as well as any updates merged
   * before `resume` is called.
   */
  pause() {
    this._update({ pause: true });
  }
  /** Resume the animation if paused. */
  resume() {
    this._update({ pause: false });
  }
  /** Skip to the end of the current animation. */
  finish() {
    if (isAnimating(this)) {
      const { to: to22, config: config2 } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to22, false);
        }
        this._stop();
      });
    }
    return this;
  }
  /** Push props into the pending queue. */
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to22, arg2) {
    let queue;
    if (!is.und(to22)) {
      queue = [is.obj(to22) ? to22 : { ...arg2, to: to22 }];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(
      queue.map((props) => {
        const up = this._update(props);
        return up;
      })
    ).then((results) => getCombinedResult(this, results));
  }
  /**
   * Stop the current animation, and cancel any delayed updates.
   *
   * Pass `true` to call `onRest` with `cancelled: true`.
   */
  stop(cancel) {
    const { to: to22 } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to22, cancel));
    return this;
  }
  /** Restart the animation. */
  reset() {
    this._update({ reset: true });
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  /**
   * Parse the `to` and `from` range from the given `props` object.
   *
   * This also ensures the initial value is available to animated components
   * during the render phase.
   */
  _prepareNode(props) {
    const key = this.key || "";
    let { to: to22, from } = props;
    to22 = is.obj(to22) ? to22[key] : to22;
    if (to22 == null || isAsyncTo(to22)) {
      to22 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = { to: to22, from };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to22, from] = [from, to22];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to22);
      }
    }
    return range;
  }
  /** Every update is processed by this method before merging. */
  _update({ ...props }, isLoop) {
    const { key, defaultProps } = this;
    if (props.default)
      Object.assign(
        defaultProps,
        getDefaultProps(
          props,
          (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value
        )
      );
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error(
        "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
      );
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(
              this,
              "onPause",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(
              this,
              "onResume",
              getFinishedResult(this, checkFinished(this, this.animation.to)),
              this
            );
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  /** Merge props into the current animation */
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const { key, defaultProps, animation: anim } = this;
    const { to: prevTo, from: prevFrom } = anim;
    let { to: to22 = prevTo, from = prevFrom } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to22))) {
      to22 = from;
    }
    if (props.reverse)
      [to22, from] = [from, to22];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to22, prevTo);
    if (hasToChanged) {
      this._focus(to22);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const { config: config2 } = anim;
    const { decay, velocity } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(
        config2,
        callProp(props.config, key),
        // Avoid calling the same "config" prop twice.
        props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0
      );
    }
    let node = getAnimated(this);
    if (!node || is.und(to22)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = (
      // When `reset` is undefined, the `from` prop implies `reset: true`,
      // except for declarative updates. When `reset` is defined, there
      // must exist a value to animate from.
      is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key)
    );
    const value = reset ? from : this.get();
    const goal = computeGoal(to22);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to22);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(
            `Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`
          );
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to22);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to22) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const { onRest } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            var _a;
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              (_a = anim.onStart) == null ? void 0 : _a.call(anim, result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  /** Update the `animation.to` value, which might be a `FluidValue` */
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      addFluidObserver(to22, this);
      if (isFrameValue(to22)) {
        priority2 = to22.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const { to: to22 } = this.animation;
    if (hasFluidValue(to22)) {
      removeFluidObserver(to22, this);
    }
  }
  /**
   * Update the current value from outside the frameloop,
   * and return the `Animated` node.
   */
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(
        this,
        "onStart",
        getFinishedResult(this, checkFinished(this, anim.to)),
        this
      );
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  // This method resets the animation state (even if already animating) to
  // ensure the latest from/to range is used, and it also ensures this spring
  // is added to the frameloop.
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals_exports.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  /**
   * Exit the frameloop and notify `onRest` listeners.
   *
   * Always wrap `_stop` calls with `batchedUpdates`.
   */
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal ?? anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to22) {
  const goal = computeGoal(to22);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to22 = props.to) {
  const loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse2 = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate({
      ...props,
      loop: loop2,
      // Avoid updating default props when looping.
      default: false,
      // Never loop the `pause` prop.
      pause: void 0,
      // For the "reverse" prop to loop as expected, the "to" prop
      // must be undefined. The "reverse" prop is ignored when the
      // "to" prop is an array or function.
      to: !reverse2 || isAsyncTo(to22) ? to22 : void 0,
      // Ignore the "from" prop except on reset.
      from: reset ? props.from : void 0,
      reset,
      // The "loop" prop can return a "useSpring" props object to
      // override any of the original props.
      ...overrides
    });
  }
}
function createUpdate(props) {
  const { to: to22, from } = props = inferTo(props);
  const keys = /* @__PURE__ */ new Set();
  if (is.obj(to22))
    findDefined(to22, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update22 = createUpdate(props);
  if (is.und(update22.default)) {
    update22.default = getDefaultProps(update22);
  }
  return update22;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = [
  "onStart",
  "onRest",
  "onChange",
  "onPause",
  "onResume"
];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _a, _b, _c, _d;
  (_b = (_a = target.animation)[type]) == null ? void 0 : _b.call(_a, ...args);
  (_d = (_c = target.defaultProps)[type]) == null ? void 0 : _d.call(_c, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId2 = 1;
var Controller = class {
  constructor(props, flush3) {
    this.id = nextId2++;
    this.springs = {};
    this.queue = [];
    this._lastAsyncId = 0;
    this._active = /* @__PURE__ */ new Set();
    this._changed = /* @__PURE__ */ new Set();
    this._started = false;
    this._state = {
      paused: false,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    };
    this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush3) {
      this._flush = flush3;
    }
    if (props) {
      this.start({ default: true, ...props });
    }
  }
  /**
   * Equals `true` when no spring values are in the frameloop, and
   * no async animation is currently active.
   */
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  /** Get the current values of our springs */
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  /** Set the current values without animating. */
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  /** Push an update onto the queue of each value. */
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  /**
   * Start the queued animations for every spring, and resolve the returned
   * promise once all queued animations have finished or been cancelled.
   *
   * When you pass a queue (instead of nothing), that queue is used instead of
   * the queued animations added with the `update` method, which are left alone.
   */
  start(props) {
    let { queue } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  /** @internal */
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  /** Freeze the active animation in time */
  pause(keys) {
    if (is.und(keys)) {
      this.start({ pause: true });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  /** Resume the animation if paused. */
  resume(keys) {
    if (is.und(keys)) {
      this.start({ pause: false });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  /** Call a function once per spring value */
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  /** @internal Called at the end of every animation frame */
  _onFrame() {
    const { onStart, onChange, onRest } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then(
    (results) => getCombinedResult(ctrl, results)
  );
}
async function flushUpdate(ctrl, props, isLoop) {
  const { keys, to: to22, from, loop: loop2, onRest, onResolve } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to22 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to22) || is.fun(to22) ? to22 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({ finished, cancelled }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map(
    (key) => ctrl.springs[key].start(props)
  );
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(
      scheduleProps(++ctrl["_lastAsyncId"], {
        props,
        state,
        actions: {
          pause: noop,
          resume: noop,
          start(props2, resolve) {
            if (cancel) {
              stopAsync(state, ctrl["_lastAsyncId"]);
              resolve(getCancelledResult(ctrl));
            } else {
              props2.onRest = onRest;
              resolve(
                runAsync(
                  asyncTo,
                  props2,
                  state,
                  ctrl
                )
              );
            }
          }
        }
      })
    );
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to22);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = { ...ctrl.springs };
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = { ...props2, to: void 0 };
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
var SpringContext = ({
  children,
  ...props
}) => {
  const inherited = (0, import_react11.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({ pause, immediate }), [pause, immediate]);
  const { Provider } = ctx;
  return React2.createElement(Provider, { value: props }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React2.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i4) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = _getProps(props, ctrl, i4);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i4 = current.indexOf(ctrl);
    if (~i4)
      current.splice(i4, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl, i4) => {
      const update22 = is.fun(values) ? values(i4, ctrl) : values;
      if (update22) {
        ctrl.set(update22);
      }
    });
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i4) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update22 = this._getProps(props, ctrl, i4);
        if (update22) {
          results.push(ctrl.start(update22));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i4) => ctrl.update(this._getProps(props, ctrl, i4)));
    return this;
  };
  const _getProps = function(arg, ctrl, index2) {
    return is.fun(arg) ? arg(index2, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0, import_react10.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const layoutId = (0, import_react10.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0, import_react10.useMemo)(
    () => ({
      ctrls: [],
      queue: [],
      flush(ctrl, updates2) {
        const springs2 = getSprings(ctrl, updates2);
        const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
        return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
          setSprings(ctrl, springs2);
          state.queue.push(() => {
            resolve(flushUpdateQueue(ctrl, updates2));
          });
          forceUpdate();
        });
      }
    }),
    []
  );
  const ctrls = (0, import_react10.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0, import_react10.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, import_react10.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i4 = startIndex; i4 < endIndex; i4++) {
      const ctrl = ctrls.current[i4] || (ctrls.current[i4] = new Controller(null, state.flush));
      const update22 = propsFn ? propsFn(i4, ctrl) : props[i4];
      if (update22) {
        updates[i4] = declareUpdate(update22);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i4) => getSprings(ctrl, updates[i4]));
  const context = (0, import_react10.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const { queue } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i4) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({ default: context });
      }
      const update22 = updates[i4];
      if (update22) {
        replaceRef(ctrl, update22.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update22);
        } else {
          ctrl.start(update22);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x6) => ({ ...x6 }));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(
    1,
    isFn ? props : [props],
    isFn ? deps || [] : deps
  );
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort: sort2,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0, import_react13.useMemo)(
    () => propsFn || arguments.length == 3 ? SpringRef() : void 0,
    []
  );
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = (0, import_react13.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useIsomorphicLayoutEffect(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => {
    each(transitions, (t7) => {
      ref == null ? void 0 : ref.add(t7.ctrl);
      t7.ctrl.ref = ref;
    });
    return () => {
      each(usedTransitions.current, (t7) => {
        if (t7.expired) {
          clearTimeout(t7.expirationId);
        }
        detachRefs(t7.ctrl, ref);
        t7.ctrl.stop(true);
      });
    };
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useIsomorphicLayoutEffect(
    () => each(expired, ({ ctrl, item, key }) => {
      detachRefs(ctrl, ref);
      callProp(onDestroyed, item, key);
    })
  );
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t7, i4) => {
      if (t7.expired) {
        clearTimeout(t7.expirationId);
        expired.push(t7);
      } else {
        i4 = reused[i4] = keys.indexOf(t7.key);
        if (~i4)
          transitions[i4] = t7;
      }
    });
  each(items, (item, i4) => {
    if (!transitions[i4]) {
      transitions[i4] = {
        key: keys[i4],
        item,
        phase: "mount",
        ctrl: new Controller()
      };
      transitions[i4].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i4 = -1;
    const { leave } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t7 = prevTransitions[prevIndex];
      if (~keyIndex) {
        i4 = transitions.indexOf(t7);
        transitions[i4] = { ...t7, item: items[keyIndex] };
      } else if (leave) {
        transitions.splice(++i4, 0, t7);
      }
    });
  }
  if (is.fun(sort2)) {
    transitions.sort((a5, b4) => sort2(a5.item, b4.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = /* @__PURE__ */ new Map();
  const exitingTransitions = (0, import_react13.useRef)(/* @__PURE__ */ new Map());
  const forceChange = (0, import_react13.useRef)(false);
  each(transitions, (t7, i4) => {
    const key = t7.key;
    const prevPhase = t7.phase;
    const p4 = propsFn ? propsFn() : props;
    let to22;
    let phase;
    const propsDelay = callProp(p4.delay || 0, key);
    if (prevPhase == "mount") {
      to22 = p4.enter;
      phase = "enter";
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != "leave") {
        if (isLeave) {
          to22 = p4.leave;
          phase = "leave";
        } else if (to22 = p4.update) {
          phase = "update";
        } else
          return;
      } else if (!isLeave) {
        to22 = p4.enter;
        phase = "enter";
      } else
        return;
    }
    to22 = callProp(to22, t7.item, i4);
    to22 = is.obj(to22) ? inferTo(to22) : { to: to22 };
    if (!to22.config) {
      const config2 = propsConfig || defaultProps.config;
      to22.config = callProp(config2, t7.item, i4, phase);
    }
    delay += trail;
    const payload = {
      ...defaultProps,
      // we need to add our props.delay value you here.
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p4.immediate,
      // This prevents implied resets.
      reset: false,
      // Merge any phase-specific props.
      ...to22
    };
    if (phase == "enter" && is.und(payload.from)) {
      const p22 = propsFn ? propsFn() : props;
      const from = is.und(p22.initial) || prevTransitions ? p22.from : p22.initial;
      payload.from = callProp(from, t7.item, i4);
    }
    const { onResolve } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t24 = transitions2.find((t34) => t34.key === key);
      if (!t24)
        return;
      if (result.cancelled && t24.phase != "update") {
        return;
      }
      if (t24.ctrl.idle) {
        const idle = transitions2.every((t34) => t34.ctrl.idle);
        if (t24.phase == "leave") {
          const expiry = callProp(expires, t24.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t24.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t24.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t34) => t34.expired)) {
          exitingTransitions.current.delete(t24);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t7.ctrl, payload);
    if (phase === "leave" && exitBeforeEnter) {
      exitingTransitions.current.set(t7, { phase, springs, payload });
    } else {
      changes.set(t7, { phase, springs, payload });
    }
  });
  const context = (0, import_react13.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useIsomorphicLayoutEffect(() => {
    if (hasContext) {
      each(transitions, (t7) => {
        t7.ctrl.start({ default: context });
      });
    }
  }, [context]);
  each(changes, (_2, t7) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t7.key);
      transitions.splice(ind, 1);
    }
  });
  useIsomorphicLayoutEffect(
    () => {
      each(
        exitingTransitions.current.size ? exitingTransitions.current : changes,
        ({ phase, payload }, t7) => {
          const { ctrl } = t7;
          t7.phase = phase;
          ref == null ? void 0 : ref.add(ctrl);
          if (hasContext && phase == "enter") {
            ctrl.start({ default: context });
          }
          if (payload) {
            replaceRef(ctrl, payload.ref);
            if ((ctrl.ref || ref) && !forceChange.current) {
              ctrl.update(payload);
            } else {
              ctrl.start(payload);
              if (forceChange.current) {
                forceChange.current = false;
              }
            }
          }
        }
      );
    },
    reset ? void 0 : deps
  );
  const renderTransitions = (render) => React22.createElement(React22.Fragment, null, transitions.map((t7, i4) => {
    const { springs } = changes.get(t7) || t7.ctrl;
    const elem = render({ ...springs }, t7.item, t7, i4);
    return elem && elem.type ? React22.createElement(
      elem.type,
      {
        ...elem.props,
        key: is.str(t7.key) || is.num(t7.key) ? t7.key : t7.ctrl.id,
        ref: elem.ref
      }
    ) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, { key, keys = key }, prevTransitions) {
  if (keys === null) {
    const reused = /* @__PURE__ */ new Set();
    return items.map((item) => {
      const t7 = prevTransitions && prevTransitions.find(
        (t24) => t24.item === item && t24.phase !== "leave" && !reused.has(t24)
      );
      if (t7) {
        reused.add(t7);
        return t7.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.source = source;
    this.idle = true;
    this._active = /* @__PURE__ */ new Set();
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals_exports.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  // Observe our sources only when we're observed.
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  // Stop observing our sources once we have no observers.
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  /** @internal */
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce(
        (highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1),
        0
      );
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self2) {
  if (!self2.idle) {
    self2.idle = true;
    each(getPayload(self2), (node) => {
      node.done = true;
    });
    callFluidObservers(self2, {
      type: "idle",
      parent: self2
    });
  }
}
var to2 = (source, ...args) => new Interpolation(source, args);
globals_exports.assign({
  createStringInterpolator: createStringInterpolator2,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const { style, children, scrollTop, scrollLeft, viewBox, ...attributes } = props;
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map(
    (name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(
      /([A-Z])/g,
      // Attributes are written in dash case
      (n4) => "-" + n4.toLowerCase()
    ))
  );
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (const name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i4) => {
    instance.setAttribute(name, values[i4]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
  if (viewBox !== void 0) {
    instance.setAttribute("viewBox", viewBox);
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v5) => isValueIdentity(v5, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor({ x: x6, y: y4, z: z5, ...style }) {
    const inputs = [];
    const transforms = [];
    if (x6 || y4 || z5) {
      inputs.push([x6 || 0, y4 || 0, z5 || 0]);
      transforms.push((xyz) => [
        `translate3d(${xyz.map((v5) => addUnit(v5, "px")).join(",")})`,
        // prettier-ignore
        isValueIdentity(xyz, 0)
      ]);
    }
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(
          key === "rotate3d" ? ([x22, y22, z22, deg]) => [
            `rotate3d(${x22},${y22},${z22},${addUnit(deg, unit)})`,
            isValueIdentity(deg, 0)
          ] : (input) => [
            `${key}(${input.map((v5) => addUnit(v5, unit)).join(",")})`,
            isValueIdentity(input, key.startsWith("scale") ? 1 : 0)
          ]
        );
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this.inputs = inputs;
    this.transforms = transforms;
    this._value = null;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity6 = true;
    each(this.inputs, (input, i4) => {
      const arg1 = getFluidValue(input[0]);
      const [t7, id] = this.transforms[i4](
        is.arr(arg1) ? arg1 : input.map(getFluidValue)
      );
      transform += " " + t7;
      identity6 = identity6 && id;
    });
    return identity6 ? "none" : transform;
  }
  // Start observing our inputs once we have an observer.
  observerAdded(count2) {
    if (count2 == 1)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && addFluidObserver(value, this)
        )
      );
  }
  // Stop observing our inputs once we have no observers.
  observerRemoved(count2) {
    if (count2 == 0)
      each(
        this.inputs,
        (input) => each(
          input,
          (value) => hasFluidValue(value) && removeFluidObserver(value, this)
        )
      );
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
globals_exports.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator: createStringInterpolator2,
  colors: colors2
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props
});
var animated = host.animated;

// node_modules/@nivo/tooltip/dist/nivo-tooltip.es.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
function v() {
  return v = Object.assign ? Object.assign.bind() : function(t7) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var o4 = arguments[i4];
      for (var n4 in o4)
        Object.prototype.hasOwnProperty.call(o4, n4) && (t7[n4] = o4[n4]);
    }
    return t7;
  }, v.apply(this, arguments);
}
var x = { pointerEvents: "none", position: "absolute", zIndex: 10, top: 0, left: 0 };
var m = function(t7, i4) {
  return "translate(" + t7 + "px, " + i4 + "px)";
};
var b = (0, import_react15.memo)(function(t7) {
  var o4, n4 = t7.position, r4 = t7.anchor, e7 = t7.children, l3 = Et(), u3 = Zr(), p4 = u3.animate, f3 = u3.config, b4 = Gt(), g3 = b4[0], w4 = b4[1], T4 = (0, import_react15.useRef)(false), C8 = void 0, E7 = false, P3 = w4.width > 0 && w4.height > 0, j4 = Math.round(n4[0]), N4 = Math.round(n4[1]);
  P3 && ("top" === r4 ? (j4 -= w4.width / 2, N4 -= w4.height + 14) : "right" === r4 ? (j4 += 14, N4 -= w4.height / 2) : "bottom" === r4 ? (j4 -= w4.width / 2, N4 += 14) : "left" === r4 ? (j4 -= w4.width + 14, N4 -= w4.height / 2) : "center" === r4 && (j4 -= w4.width / 2, N4 -= w4.height / 2), C8 = { transform: m(j4, N4) }, T4.current || (E7 = true), T4.current = [j4, N4]);
  var O3 = useSpring({ to: C8, config: f3, immediate: !p4 || E7 }), V3 = v({}, x, l3.tooltip, { transform: null != (o4 = O3.transform) ? o4 : m(j4, N4) });
  return (0, import_jsx_runtime.jsx)(animated.div, { ref: g3, style: V3, children: e7 });
});
b.displayName = "TooltipWrapper";
var g = (0, import_react15.memo)(function(t7) {
  var i4 = t7.size, o4 = void 0 === i4 ? 12 : i4, n4 = t7.color, r4 = t7.style;
  return (0, import_jsx_runtime.jsx)("span", { style: v({ display: "block", width: o4, height: o4, background: n4 }, void 0 === r4 ? {} : r4) });
});
var w = (0, import_react15.memo)(function(t7) {
  var i4, o4 = t7.id, n4 = t7.value, r4 = t7.format, e7 = t7.enableChip, l3 = void 0 !== e7 && e7, a5 = t7.color, c11 = t7.renderContent, h3 = Et(), d3 = Dt(r4);
  if ("function" == typeof c11)
    i4 = c11();
  else {
    var f3 = n4;
    void 0 !== d3 && void 0 !== f3 && (f3 = d3(f3)), i4 = (0, import_jsx_runtime.jsxs)("div", { style: h3.tooltip.basic, children: [l3 && (0, import_jsx_runtime.jsx)(g, { color: a5, style: h3.tooltip.chip }), void 0 !== f3 ? (0, import_jsx_runtime.jsxs)("span", { children: [o4, ": ", (0, import_jsx_runtime.jsx)("strong", { children: "" + f3 })] }) : o4] });
  }
  return (0, import_jsx_runtime.jsx)("div", { style: h3.tooltip.container, children: i4 });
});
var T = { width: "100%", borderCollapse: "collapse" };
var C = (0, import_react15.memo)(function(t7) {
  var i4, o4 = t7.title, n4 = t7.rows, r4 = void 0 === n4 ? [] : n4, e7 = t7.renderContent, l3 = Et();
  return r4.length ? (i4 = "function" == typeof e7 ? e7() : (0, import_jsx_runtime.jsxs)("div", { children: [o4 && o4, (0, import_jsx_runtime.jsx)("table", { style: v({}, T, l3.tooltip.table), children: (0, import_jsx_runtime.jsx)("tbody", { children: r4.map(function(t8, i5) {
    return (0, import_jsx_runtime.jsx)("tr", { children: t8.map(function(t9, i6) {
      return (0, import_jsx_runtime.jsx)("td", { style: l3.tooltip.tableCell, children: t9 }, i6);
    }) }, i5);
  }) }) })] }), (0, import_jsx_runtime.jsx)("div", { style: l3.tooltip.container, children: i4 })) : null;
});
C.displayName = "TableTooltip";
var E = (0, import_react15.memo)(function(t7) {
  var i4 = t7.x0, n4 = t7.x1, r4 = t7.y0, e7 = t7.y1, l3 = Et(), d3 = Zr(), u3 = d3.animate, p4 = d3.config, f3 = (0, import_react15.useMemo)(function() {
    return v({}, l3.crosshair.line, { pointerEvents: "none" });
  }, [l3.crosshair.line]), x6 = useSpring({ x1: i4, x2: n4, y1: r4, y2: e7, config: p4, immediate: !u3 });
  return (0, import_jsx_runtime.jsx)(animated.line, v({}, x6, { fill: "none", style: f3 }));
});
E.displayName = "CrosshairLine";
var P = (0, import_react15.memo)(function(t7) {
  var i4, o4, n4 = t7.width, r4 = t7.height, e7 = t7.type, l3 = t7.x, a5 = t7.y;
  return "cross" === e7 ? (i4 = { x0: l3, x1: l3, y0: 0, y1: r4 }, o4 = { x0: 0, x1: n4, y0: a5, y1: a5 }) : "top-left" === e7 ? (i4 = { x0: l3, x1: l3, y0: 0, y1: a5 }, o4 = { x0: 0, x1: l3, y0: a5, y1: a5 }) : "top" === e7 ? i4 = { x0: l3, x1: l3, y0: 0, y1: a5 } : "top-right" === e7 ? (i4 = { x0: l3, x1: l3, y0: 0, y1: a5 }, o4 = { x0: l3, x1: n4, y0: a5, y1: a5 }) : "right" === e7 ? o4 = { x0: l3, x1: n4, y0: a5, y1: a5 } : "bottom-right" === e7 ? (i4 = { x0: l3, x1: l3, y0: a5, y1: r4 }, o4 = { x0: l3, x1: n4, y0: a5, y1: a5 }) : "bottom" === e7 ? i4 = { x0: l3, x1: l3, y0: a5, y1: r4 } : "bottom-left" === e7 ? (i4 = { x0: l3, x1: l3, y0: a5, y1: r4 }, o4 = { x0: 0, x1: l3, y0: a5, y1: a5 }) : "left" === e7 ? o4 = { x0: 0, x1: l3, y0: a5, y1: a5 } : "x" === e7 ? i4 = { x0: l3, x1: l3, y0: 0, y1: r4 } : "y" === e7 && (o4 = { x0: 0, x1: n4, y0: a5, y1: a5 }), (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [i4 && (0, import_jsx_runtime.jsx)(E, { x0: i4.x0, x1: i4.x1, y0: i4.y0, y1: i4.y1 }), o4 && (0, import_jsx_runtime.jsx)(E, { x0: o4.x0, x1: o4.x1, y0: o4.y0, y1: o4.y1 })] });
});
P.displayName = "Crosshair";
var j = (0, import_react15.createContext)({ showTooltipAt: function() {
}, showTooltipFromEvent: function() {
}, hideTooltip: function() {
} });
var N = { isVisible: false, position: [null, null], content: null, anchor: null };
var O = (0, import_react15.createContext)(N);
var V = function(t7) {
  var i4 = (0, import_react15.useState)(N), n4 = i4[0], l3 = i4[1], a5 = (0, import_react15.useCallback)(function(t8, i5, o4) {
    var n5 = i5[0], r4 = i5[1];
    void 0 === o4 && (o4 = "top"), l3({ isVisible: true, position: [n5, r4], anchor: o4, content: t8 });
  }, [l3]), c11 = (0, import_react15.useCallback)(function(i5, o4, n5) {
    void 0 === n5 && (n5 = "top");
    var r4 = t7.current.getBoundingClientRect(), e7 = t7.current.offsetWidth, a6 = e7 === r4.width ? 1 : e7 / r4.width, c12 = (o4.clientX - r4.left) * a6, s5 = (o4.clientY - r4.top) * a6;
    "left" !== n5 && "right" !== n5 || (n5 = c12 < r4.width / 2 ? "right" : "left"), l3({ isVisible: true, position: [c12, s5], anchor: n5, content: i5 });
  }, [t7, l3]), s4 = (0, import_react15.useCallback)(function() {
    l3(N);
  }, [l3]);
  return { actions: (0, import_react15.useMemo)(function() {
    return { showTooltipAt: a5, showTooltipFromEvent: c11, hideTooltip: s4 };
  }, [a5, c11, s4]), state: n4 };
};
var k = function() {
  var t7 = (0, import_react15.useContext)(j);
  if (void 0 === t7)
    throw new Error("useTooltip must be used within a TooltipProvider");
  return t7;
};
var z = function() {
  var t7 = (0, import_react15.useContext)(O);
  if (void 0 === t7)
    throw new Error("useTooltipState must be used within a TooltipProvider");
  return t7;
};
var A = function(t7) {
  return t7.isVisible;
};
var F = function() {
  var t7 = z();
  return A(t7) ? (0, import_jsx_runtime.jsx)(b, { position: t7.position, anchor: t7.anchor, children: t7.content }) : null;
};
var M = function(t7) {
  var i4 = t7.container, o4 = t7.children, n4 = V(i4), r4 = n4.actions, e7 = n4.state;
  return (0, import_jsx_runtime.jsx)(j.Provider, { value: r4, children: (0, import_jsx_runtime.jsx)(O.Provider, { value: e7, children: o4 }) });
};

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_merge2 = __toESM(require_merge());
var import_get = __toESM(require_get());
var import_set2 = __toESM(require_set());

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m4, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m4 = reHex.exec(format2)) ? (l3 = m4[1].length, m4 = parseInt(m4[1], 16), l3 === 6 ? rgbn(m4) : l3 === 3 ? new Rgb(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l3 === 8 ? rgba2(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l3 === 4 ? rgba2(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger.exec(format2)) ? new Rgb(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent.exec(format2)) ? new Rgb(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger.exec(format2)) ? rgba2(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent.exec(format2)) ? rgba2(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent.exec(format2)) ? hsla2(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent.exec(format2)) ? hsla2(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n4) {
  return new Rgb(n4 >> 16 & 255, n4 >> 8 & 255, n4 & 255, 1);
}
function rgba2(r4, g3, b4, a5) {
  if (a5 <= 0)
    r4 = g3 = b4 = NaN;
  return new Rgb(r4, g3, b4, a5);
}
function rgbConvert(o4) {
  if (!(o4 instanceof Color))
    o4 = color(o4);
  if (!o4)
    return new Rgb();
  o4 = o4.rgb();
  return new Rgb(o4.r, o4.g, o4.b, o4.opacity);
}
function rgb2(r4, g3, b4, opacity) {
  return arguments.length === 1 ? rgbConvert(r4) : new Rgb(r4, g3, b4, opacity == null ? 1 : opacity);
}
function Rgb(r4, g3, b4, opacity) {
  this.r = +r4;
  this.g = +g3;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default(Rgb, rgb2, extend(Color, {
  brighter(k5) {
    k5 = k5 == null ? brighter : Math.pow(brighter, k5);
    return new Rgb(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  darker(k5) {
    k5 = k5 == null ? darker : Math.pow(darker, k5);
    return new Rgb(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a5 = clampa(this.opacity);
  return `${a5 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a5 === 1 ? ")" : `, ${a5})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla2(h3, s4, l3, a5) {
  if (a5 <= 0)
    h3 = s4 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h3 = s4 = NaN;
  else if (s4 <= 0)
    h3 = NaN;
  return new Hsl(h3, s4, l3, a5);
}
function hslConvert(o4) {
  if (o4 instanceof Hsl)
    return new Hsl(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Color))
    o4 = color(o4);
  if (!o4)
    return new Hsl();
  if (o4 instanceof Hsl)
    return o4;
  o4 = o4.rgb();
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, min3 = Math.min(r4, g3, b4), max3 = Math.max(r4, g3, b4), h3 = NaN, s4 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s4) {
    if (r4 === max3)
      h3 = (g3 - b4) / s4 + (g3 < b4) * 6;
    else if (g3 === max3)
      h3 = (b4 - r4) / s4 + 2;
    else
      h3 = (r4 - g3) / s4 + 4;
    s4 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h3 *= 60;
  } else {
    s4 = l3 > 0 && l3 < 1 ? 0 : h3;
  }
  return new Hsl(h3, s4, l3, o4.opacity);
}
function hsl2(h3, s4, l3, opacity) {
  return arguments.length === 1 ? hslConvert(h3) : new Hsl(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Hsl(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Hsl, hsl2, extend(Color, {
  brighter(k5) {
    k5 = k5 == null ? brighter : Math.pow(brighter, k5);
    return new Hsl(this.h, this.s, this.l * k5, this.opacity);
  },
  darker(k5) {
    k5 = k5 == null ? darker : Math.pow(darker, k5);
    return new Hsl(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb() {
    var h3 = this.h % 360 + (this.h < 0) * 360, s4 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s4, m1 = 2 * l3 - m22;
    return new Rgb(
      hsl2rgb(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22),
      hsl2rgb(h3, m1, m22),
      hsl2rgb(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a5 = clampa(this.opacity);
    return `${a5 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a5 === 1 ? ")" : `, ${a5})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h3, m1, m22) {
  return (h3 < 60 ? m1 + (m22 - m1) * h3 / 60 : h3 < 180 ? m22 : h3 < 240 ? m1 + (m22 - m1) * (240 - h3) / 60 : m1) * 255;
}

// node_modules/d3-color/src/math.js
var radians = Math.PI / 180;
var degrees = 180 / Math.PI;

// node_modules/d3-color/src/lab.js
var K = 18;
var Xn = 0.96422;
var Yn = 1;
var Zn = 0.82521;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;
function labConvert(o4) {
  if (o4 instanceof Lab)
    return new Lab(o4.l, o4.a, o4.b, o4.opacity);
  if (o4 instanceof Hcl)
    return hcl2lab(o4);
  if (!(o4 instanceof Rgb))
    o4 = rgbConvert(o4);
  var r4 = rgb2lrgb(o4.r), g3 = rgb2lrgb(o4.g), b4 = rgb2lrgb(o4.b), y4 = xyz2lab((0.2225045 * r4 + 0.7168786 * g3 + 0.0606169 * b4) / Yn), x6, z5;
  if (r4 === g3 && g3 === b4)
    x6 = z5 = y4;
  else {
    x6 = xyz2lab((0.4360747 * r4 + 0.3850649 * g3 + 0.1430804 * b4) / Xn);
    z5 = xyz2lab((0.0139322 * r4 + 0.0971045 * g3 + 0.7141733 * b4) / Zn);
  }
  return new Lab(116 * y4 - 16, 500 * (x6 - y4), 200 * (y4 - z5), o4.opacity);
}
function lab(l3, a5, b4, opacity) {
  return arguments.length === 1 ? labConvert(l3) : new Lab(l3, a5, b4, opacity == null ? 1 : opacity);
}
function Lab(l3, a5, b4, opacity) {
  this.l = +l3;
  this.a = +a5;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default(Lab, lab, extend(Color, {
  brighter(k5) {
    return new Lab(this.l + K * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  darker(k5) {
    return new Lab(this.l - K * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  rgb() {
    var y4 = (this.l + 16) / 116, x6 = isNaN(this.a) ? y4 : y4 + this.a / 500, z5 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x6 = Xn * lab2xyz(x6);
    y4 = Yn * lab2xyz(y4);
    z5 = Zn * lab2xyz(z5);
    return new Rgb(
      lrgb2rgb(3.1338561 * x6 - 1.6168667 * y4 - 0.4906146 * z5),
      lrgb2rgb(-0.9787684 * x6 + 1.9161415 * y4 + 0.033454 * z5),
      lrgb2rgb(0.0719453 * x6 - 0.2289914 * y4 + 1.4052427 * z5),
      this.opacity
    );
  }
}));
function xyz2lab(t7) {
  return t7 > t3 ? Math.pow(t7, 1 / 3) : t7 / t2 + t0;
}
function lab2xyz(t7) {
  return t7 > t1 ? t7 * t7 * t7 : t2 * (t7 - t0);
}
function lrgb2rgb(x6) {
  return 255 * (x6 <= 31308e-7 ? 12.92 * x6 : 1.055 * Math.pow(x6, 1 / 2.4) - 0.055);
}
function rgb2lrgb(x6) {
  return (x6 /= 255) <= 0.04045 ? x6 / 12.92 : Math.pow((x6 + 0.055) / 1.055, 2.4);
}
function hclConvert(o4) {
  if (o4 instanceof Hcl)
    return new Hcl(o4.h, o4.c, o4.l, o4.opacity);
  if (!(o4 instanceof Lab))
    o4 = labConvert(o4);
  if (o4.a === 0 && o4.b === 0)
    return new Hcl(NaN, 0 < o4.l && o4.l < 100 ? 0 : NaN, o4.l, o4.opacity);
  var h3 = Math.atan2(o4.b, o4.a) * degrees;
  return new Hcl(h3 < 0 ? h3 + 360 : h3, Math.sqrt(o4.a * o4.a + o4.b * o4.b), o4.l, o4.opacity);
}
function hcl(h3, c11, l3, opacity) {
  return arguments.length === 1 ? hclConvert(h3) : new Hcl(h3, c11, l3, opacity == null ? 1 : opacity);
}
function Hcl(h3, c11, l3, opacity) {
  this.h = +h3;
  this.c = +c11;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab(o4) {
  if (isNaN(o4.h))
    return new Lab(o4.l, 0, 0, o4.opacity);
  var h3 = o4.h * radians;
  return new Lab(o4.l, Math.cos(h3) * o4.c, Math.sin(h3) * o4.c, o4.opacity);
}
define_default(Hcl, hcl, extend(Color, {
  brighter(k5) {
    return new Hcl(this.h, this.c, this.l + K * (k5 == null ? 1 : k5), this.opacity);
  },
  darker(k5) {
    return new Hcl(this.h, this.c, this.l - K * (k5 == null ? 1 : k5), this.opacity);
  },
  rgb() {
    return hcl2lab(this).rgb();
  }
}));

// node_modules/d3-color/src/cubehelix.js
var A2 = -0.14861;
var B = 1.78277;
var C2 = -0.29227;
var D = -0.90649;
var E2 = 1.97294;
var ED = E2 * D;
var EB = E2 * B;
var BC_DA = B * C2 - D * A2;
function cubehelixConvert(o4) {
  if (o4 instanceof Cubehelix)
    return new Cubehelix(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Rgb))
    o4 = rgbConvert(o4);
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, l3 = (BC_DA * b4 + ED * r4 - EB * g3) / (BC_DA + ED - EB), bl = b4 - l3, k5 = (E2 * (g3 - l3) - C2 * bl) / D, s4 = Math.sqrt(k5 * k5 + bl * bl) / (E2 * l3 * (1 - l3)), h3 = s4 ? Math.atan2(k5, bl) * degrees - 120 : NaN;
  return new Cubehelix(h3 < 0 ? h3 + 360 : h3, s4, l3, o4.opacity);
}
function cubehelix(h3, s4, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h3) : new Cubehelix(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Cubehelix(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default(Cubehelix, cubehelix, extend(Color, {
  brighter(k5) {
    k5 = k5 == null ? brighter : Math.pow(brighter, k5);
    return new Cubehelix(this.h, this.s, this.l * k5, this.opacity);
  },
  darker(k5) {
    k5 = k5 == null ? darker : Math.pow(darker, k5);
    return new Cubehelix(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb() {
    var h3 = isNaN(this.h) ? 0 : (this.h + 120) * radians, l3 = +this.l, a5 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h3), sinh4 = Math.sin(h3);
    return new Rgb(
      255 * (l3 + a5 * (A2 * cosh4 + B * sinh4)),
      255 * (l3 + a5 * (C2 * cosh4 + D * sinh4)),
      255 * (l3 + a5 * (E2 * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-interpolate/src/basis.js
function basis(t16, v0, v1, v22, v32) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v32) / 6;
}
function basis_default(values) {
  var n4 = values.length - 1;
  return function(t7) {
    var i4 = t7 <= 0 ? t7 = 0 : t7 >= 1 ? (t7 = 1, n4 - 1) : Math.floor(t7 * n4), v1 = values[i4], v22 = values[i4 + 1], v0 = i4 > 0 ? values[i4 - 1] : 2 * v1 - v22, v32 = i4 < n4 - 1 ? values[i4 + 2] : 2 * v22 - v1;
    return basis((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n4 = values.length;
  return function(t7) {
    var i4 = Math.floor(((t7 %= 1) < 0 ? ++t7 : t7) * n4), v0 = values[(i4 + n4 - 1) % n4], v1 = values[i4 % n4], v22 = values[(i4 + 1) % n4], v32 = values[(i4 + 2) % n4];
    return basis((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default = (x6) => () => x6;

// node_modules/d3-interpolate/src/color.js
function linear(a5, d3) {
  return function(t7) {
    return a5 + t7 * d3;
  };
}
function exponential(a5, b4, y4) {
  return a5 = Math.pow(a5, y4), b4 = Math.pow(b4, y4) - a5, y4 = 1 / y4, function(t7) {
    return Math.pow(a5 + t7 * b4, y4);
  };
}
function hue(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear(a5, d3 > 180 || d3 < -180 ? d3 - 360 * Math.round(d3 / 360) : d3) : constant_default(isNaN(a5) ? b4 : a5);
}
function gamma(y4) {
  return (y4 = +y4) === 1 ? nogamma : function(a5, b4) {
    return b4 - a5 ? exponential(a5, b4, y4) : constant_default(isNaN(a5) ? b4 : a5);
  };
}
function nogamma(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear(a5, d3) : constant_default(isNaN(a5) ? b4 : a5);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y4) {
  var color4 = gamma(y4);
  function rgb5(start2, end) {
    var r4 = color4((start2 = rgb2(start2)).r, (end = rgb2(end)).r), g3 = color4(start2.g, end.g), b4 = color4(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
    return function(t7) {
      start2.r = r4(t7);
      start2.g = g3(t7);
      start2.b = b4(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma;
  return rgb5;
}(1);
function rgbSpline(spline) {
  return function(colors3) {
    var n4 = colors3.length, r4 = new Array(n4), g3 = new Array(n4), b4 = new Array(n4), i4, color4;
    for (i4 = 0; i4 < n4; ++i4) {
      color4 = rgb2(colors3[i4]);
      r4[i4] = color4.r || 0;
      g3[i4] = color4.g || 0;
      b4[i4] = color4.b || 0;
    }
    r4 = spline(r4);
    g3 = spline(g3);
    b4 = spline(b4);
    color4.opacity = 1;
    return function(t7) {
      color4.r = r4(t7);
      color4.g = g3(t7);
      color4.b = b4(t7);
      return color4 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/number.js
function number_default(a5, b4) {
  return a5 = +a5, b4 = +b4, function(t7) {
    return a5 * (1 - t7) + b4 * t7;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");

// node_modules/d3-interpolate/src/transform/decompose.js
var degrees2 = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a5, b4, c11, d3, e7, f3) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a5 * a5 + b4 * b4))
    a5 /= scaleX, b4 /= scaleX;
  if (skewX = a5 * c11 + b4 * d3)
    c11 -= a5 * skewX, d3 -= b4 * skewX;
  if (scaleY = Math.sqrt(c11 * c11 + d3 * d3))
    c11 /= scaleY, d3 /= scaleY, skewX /= scaleY;
  if (a5 * d3 < b4 * c11)
    a5 = -a5, b4 = -b4, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e7,
    translateY: f3,
    rotate: Math.atan2(b4, a5) * degrees2,
    skewX: Math.atan(skewX) * degrees2,
    scaleX,
    scaleY
  };
}

// node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity : decompose_default(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg(value) {
  if (value == null)
    return identity;
  if (!svgNode)
    svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate()))
    return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s4) {
    return s4.length ? s4.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push("translate(", null, pxComma, null, pxParen);
      q3.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
    } else if (xb || yb) {
      s4.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a5, b4, s4, q3) {
    if (a5 !== b4) {
      if (a5 - b4 > 180)
        b4 += 360;
      else if (b4 - a5 > 180)
        a5 += 360;
      q3.push({ i: s4.push(pop(s4) + "rotate(", null, degParen) - 2, x: number_default(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "rotate(" + b4 + degParen);
    }
  }
  function skewX(a5, b4, s4, q3) {
    if (a5 !== b4) {
      q3.push({ i: s4.push(pop(s4) + "skewX(", null, degParen) - 2, x: number_default(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "skewX(" + b4 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push(pop(s4) + "scale(", null, ",", null, ")");
      q3.push({ i: i4 - 4, x: number_default(xa, xb) }, { i: i4 - 2, x: number_default(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s4.push(pop(s4) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a5, b4) {
    var s4 = [], q3 = [];
    a5 = parse(a5), b4 = parse(b4);
    translate(a5.translateX, a5.translateY, b4.translateX, b4.translateY, s4, q3);
    rotate(a5.rotate, b4.rotate, s4, q3);
    skewX(a5.skewX, b4.skewX, s4, q3);
    scale(a5.scaleX, a5.scaleY, b4.scaleX, b4.scaleY, s4, q3);
    a5 = b4 = null;
    return function(t7) {
      var i4 = -1, n4 = q3.length, o4;
      while (++i4 < n4)
        s4[(o4 = q3[i4]).i] = o4.x(t7);
      return s4.join("");
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

// node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x6) {
  return ((x6 = Math.exp(x6)) + 1 / x6) / 2;
}
function sinh(x6) {
  return ((x6 = Math.exp(x6)) - 1 / x6) / 2;
}
function tanh(x6) {
  return ((x6 = Math.exp(2 * x6)) - 1) / (x6 + 1);
}
var zoom_default = function zoomRho(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d22 = dx * dx + dy * dy, i4, S4;
    if (d22 < epsilon2) {
      S4 = Math.log(w1 / w0) / rho;
      i4 = function(t7) {
        return [
          ux0 + t7 * dx,
          uy0 + t7 * dy,
          w0 * Math.exp(rho * t7 * S4)
        ];
      };
    } else {
      var d1 = Math.sqrt(d22), b0 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S4 = (r1 - r0) / rho;
      i4 = function(t7) {
        var s4 = t7 * S4, coshr0 = cosh(r0), u3 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s4 + r0) - sinh(r0));
        return [
          ux0 + u3 * dx,
          uy0 + u3 * dy,
          w0 * coshr0 / cosh(rho * s4 + r0)
        ];
      };
    }
    i4.duration = S4 * 1e3 * rho / Math.SQRT2;
    return i4;
  }
  zoom.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho(_1, _22, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-interpolate/src/hsl.js
function hsl3(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hsl2(start2)).h, (end = hsl2(end)).h), s4 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.s = s4(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hsl_default = hsl3(hue);
var hslLong = hsl3(nogamma);

// node_modules/d3-interpolate/src/hcl.js
function hcl2(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hcl(start2)).h, (end = hcl(end)).h), c11 = nogamma(start2.c, end.c), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.c = c11(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hcl_default = hcl2(hue);
var hclLong = hcl2(nogamma);

// node_modules/d3-interpolate/src/cubehelix.js
function cubehelix2(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h3 = hue4((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s4 = nogamma(start2.s, end.s), l3 = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t7) {
        start2.h = h3(t7);
        start2.s = s4(t7);
        start2.l = l3(Math.pow(t7, y4));
        start2.opacity = opacity(t7);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default = cubehelix2(hue);
var cubehelixLong = cubehelix2(nogamma);

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isString = __toESM(require_isString());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_last = __toESM(require_last());
var import_isArray = __toESM(require_isArray());

// node_modules/d3-scale/node_modules/d3-array/src/ascending.js
function ascending_default(a5, b4) {
  return a5 < b4 ? -1 : a5 > b4 ? 1 : a5 >= b4 ? 0 : NaN;
}

// node_modules/d3-scale/node_modules/d3-array/src/bisector.js
function bisector_default(f3) {
  let delta = f3;
  let compare = f3;
  if (f3.length === 1) {
    delta = (d3, x6) => f3(d3) - x6;
    compare = ascendingComparator(f3);
  }
  function left(a5, x6, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a5.length;
    while (lo < hi2) {
      const mid = lo + hi2 >>> 1;
      if (compare(a5[mid], x6) < 0)
        lo = mid + 1;
      else
        hi2 = mid;
    }
    return lo;
  }
  function right(a5, x6, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a5.length;
    while (lo < hi2) {
      const mid = lo + hi2 >>> 1;
      if (compare(a5[mid], x6) > 0)
        hi2 = mid;
      else
        lo = mid + 1;
    }
    return lo;
  }
  function center(a5, x6, lo, hi2) {
    if (lo == null)
      lo = 0;
    if (hi2 == null)
      hi2 = a5.length;
    const i4 = left(a5, x6, lo, hi2 - 1);
    return i4 > lo && delta(a5[i4 - 1], x6) > -delta(a5[i4], x6) ? i4 - 1 : i4;
  }
  return { left, center, right };
}
function ascendingComparator(f3) {
  return (d3, x6) => ascending_default(f3(d3), x6);
}

// node_modules/d3-scale/node_modules/d3-array/src/number.js
function number_default2(x6) {
  return x6 === null ? NaN : +x6;
}

// node_modules/d3-scale/node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector_default(ascending_default);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector_default(number_default2).center;

// node_modules/d3-scale/node_modules/d3-array/src/array.js
var array = Array.prototype;
var slice = array.slice;
var map = array.map;

// node_modules/d3-scale/node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickStep(start2, stop2, count2) {
  var step0 = Math.abs(stop2 - start2) / Math.max(0, count2), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop2 < start2 ? -step1 : step1;
}

// node_modules/d3-scale/node_modules/d3-array/src/shuffle.js
var shuffle_default = shuffler(Math.random);
function shuffler(random) {
  return function shuffle(array2, i0 = 0, i1 = array2.length) {
    let m4 = i1 - (i0 = +i0);
    while (m4) {
      const i4 = random() * m4-- | 0, t7 = array2[m4 + i0];
      array2[m4 + i0] = array2[i4 + i0];
      array2[i4 + i0] = t7;
    }
    return array2;
  };
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index2 = /* @__PURE__ */ new Map(), domain = [], range = [], unknown = implicit;
  function scale(d3) {
    var key = d3 + "", i4 = index2.get(key);
    if (!i4) {
      if (unknown !== implicit)
        return unknown;
      index2.set(key, i4 = domain.push(d3));
    }
    return range[(i4 - 1) % range.length];
  }
  scale.domain = function(_2) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index2 = /* @__PURE__ */ new Map();
    for (const value of _2) {
      const key = value + "";
      if (index2.has(key))
        continue;
      index2.set(key, domain.push(value));
    }
    return scale;
  };
  scale.range = function(_2) {
    return arguments.length ? (range = Array.from(_2), scale) : range.slice();
  };
  scale.unknown = function(_2) {
    return arguments.length ? (unknown = _2, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/node_modules/d3-color/src/define.js
function define_default2(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend2(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-scale/node_modules/d3-color/src/color.js
function Color2() {
}
var darker2 = 0.7;
var brighter2 = 1 / darker2;
var reI2 = "\\s*([+-]?\\d+)\\s*";
var reN2 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP2 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex2 = /^#([0-9a-f]{3,8})$/;
var reRgbInteger2 = new RegExp("^rgb\\(" + [reI2, reI2, reI2] + "\\)$");
var reRgbPercent2 = new RegExp("^rgb\\(" + [reP2, reP2, reP2] + "\\)$");
var reRgbaInteger2 = new RegExp("^rgba\\(" + [reI2, reI2, reI2, reN2] + "\\)$");
var reRgbaPercent2 = new RegExp("^rgba\\(" + [reP2, reP2, reP2, reN2] + "\\)$");
var reHslPercent2 = new RegExp("^hsl\\(" + [reN2, reP2, reP2] + "\\)$");
var reHslaPercent2 = new RegExp("^hsla\\(" + [reN2, reP2, reP2, reN2] + "\\)$");
var named2 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default2(Color2, color2, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex2,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex2,
  formatHsl: color_formatHsl2,
  formatRgb: color_formatRgb2,
  toString: color_formatRgb2
});
function color_formatHex2() {
  return this.rgb().formatHex();
}
function color_formatHsl2() {
  return hslConvert2(this).formatHsl();
}
function color_formatRgb2() {
  return this.rgb().formatRgb();
}
function color2(format2) {
  var m4, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m4 = reHex2.exec(format2)) ? (l3 = m4[1].length, m4 = parseInt(m4[1], 16), l3 === 6 ? rgbn2(m4) : l3 === 3 ? new Rgb2(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l3 === 8 ? rgba3(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l3 === 4 ? rgba3(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger2.exec(format2)) ? new Rgb2(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent2.exec(format2)) ? new Rgb2(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger2.exec(format2)) ? rgba3(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent2.exec(format2)) ? rgba3(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent2.exec(format2)) ? hsla3(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent2.exec(format2)) ? hsla3(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named2.hasOwnProperty(format2) ? rgbn2(named2[format2]) : format2 === "transparent" ? new Rgb2(NaN, NaN, NaN, 0) : null;
}
function rgbn2(n4) {
  return new Rgb2(n4 >> 16 & 255, n4 >> 8 & 255, n4 & 255, 1);
}
function rgba3(r4, g3, b4, a5) {
  if (a5 <= 0)
    r4 = g3 = b4 = NaN;
  return new Rgb2(r4, g3, b4, a5);
}
function rgbConvert2(o4) {
  if (!(o4 instanceof Color2))
    o4 = color2(o4);
  if (!o4)
    return new Rgb2();
  o4 = o4.rgb();
  return new Rgb2(o4.r, o4.g, o4.b, o4.opacity);
}
function rgb3(r4, g3, b4, opacity) {
  return arguments.length === 1 ? rgbConvert2(r4) : new Rgb2(r4, g3, b4, opacity == null ? 1 : opacity);
}
function Rgb2(r4, g3, b4, opacity) {
  this.r = +r4;
  this.g = +g3;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default2(Rgb2, rgb3, extend2(Color2, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter2 : Math.pow(brighter2, k5);
    return new Rgb2(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker2 : Math.pow(darker2, k5);
    return new Rgb2(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex2,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex2,
  formatRgb: rgb_formatRgb2,
  toString: rgb_formatRgb2
}));
function rgb_formatHex2() {
  return "#" + hex2(this.r) + hex2(this.g) + hex2(this.b);
}
function rgb_formatRgb2() {
  var a5 = this.opacity;
  a5 = isNaN(a5) ? 1 : Math.max(0, Math.min(1, a5));
  return (a5 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a5 === 1 ? ")" : ", " + a5 + ")");
}
function hex2(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla3(h3, s4, l3, a5) {
  if (a5 <= 0)
    h3 = s4 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h3 = s4 = NaN;
  else if (s4 <= 0)
    h3 = NaN;
  return new Hsl2(h3, s4, l3, a5);
}
function hslConvert2(o4) {
  if (o4 instanceof Hsl2)
    return new Hsl2(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Color2))
    o4 = color2(o4);
  if (!o4)
    return new Hsl2();
  if (o4 instanceof Hsl2)
    return o4;
  o4 = o4.rgb();
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, min3 = Math.min(r4, g3, b4), max3 = Math.max(r4, g3, b4), h3 = NaN, s4 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s4) {
    if (r4 === max3)
      h3 = (g3 - b4) / s4 + (g3 < b4) * 6;
    else if (g3 === max3)
      h3 = (b4 - r4) / s4 + 2;
    else
      h3 = (r4 - g3) / s4 + 4;
    s4 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h3 *= 60;
  } else {
    s4 = l3 > 0 && l3 < 1 ? 0 : h3;
  }
  return new Hsl2(h3, s4, l3, o4.opacity);
}
function hsl4(h3, s4, l3, opacity) {
  return arguments.length === 1 ? hslConvert2(h3) : new Hsl2(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Hsl2(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default2(Hsl2, hsl4, extend2(Color2, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter2 : Math.pow(brighter2, k5);
    return new Hsl2(this.h, this.s, this.l * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker2 : Math.pow(darker2, k5);
    return new Hsl2(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb: function() {
    var h3 = this.h % 360 + (this.h < 0) * 360, s4 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s4, m1 = 2 * l3 - m22;
    return new Rgb2(
      hsl2rgb2(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22),
      hsl2rgb2(h3, m1, m22),
      hsl2rgb2(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a5 = this.opacity;
    a5 = isNaN(a5) ? 1 : Math.max(0, Math.min(1, a5));
    return (a5 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a5 === 1 ? ")" : ", " + a5 + ")");
  }
}));
function hsl2rgb2(h3, m1, m22) {
  return (h3 < 60 ? m1 + (m22 - m1) * h3 / 60 : h3 < 180 ? m22 : h3 < 240 ? m1 + (m22 - m1) * (240 - h3) / 60 : m1) * 255;
}

// node_modules/d3-scale/node_modules/d3-color/src/math.js
var radians2 = Math.PI / 180;
var degrees3 = 180 / Math.PI;

// node_modules/d3-scale/node_modules/d3-color/src/lab.js
var K2 = 18;
var Xn2 = 0.96422;
var Yn2 = 1;
var Zn2 = 0.82521;
var t02 = 4 / 29;
var t12 = 6 / 29;
var t22 = 3 * t12 * t12;
var t32 = t12 * t12 * t12;
function labConvert2(o4) {
  if (o4 instanceof Lab2)
    return new Lab2(o4.l, o4.a, o4.b, o4.opacity);
  if (o4 instanceof Hcl2)
    return hcl2lab2(o4);
  if (!(o4 instanceof Rgb2))
    o4 = rgbConvert2(o4);
  var r4 = rgb2lrgb2(o4.r), g3 = rgb2lrgb2(o4.g), b4 = rgb2lrgb2(o4.b), y4 = xyz2lab2((0.2225045 * r4 + 0.7168786 * g3 + 0.0606169 * b4) / Yn2), x6, z5;
  if (r4 === g3 && g3 === b4)
    x6 = z5 = y4;
  else {
    x6 = xyz2lab2((0.4360747 * r4 + 0.3850649 * g3 + 0.1430804 * b4) / Xn2);
    z5 = xyz2lab2((0.0139322 * r4 + 0.0971045 * g3 + 0.7141733 * b4) / Zn2);
  }
  return new Lab2(116 * y4 - 16, 500 * (x6 - y4), 200 * (y4 - z5), o4.opacity);
}
function lab3(l3, a5, b4, opacity) {
  return arguments.length === 1 ? labConvert2(l3) : new Lab2(l3, a5, b4, opacity == null ? 1 : opacity);
}
function Lab2(l3, a5, b4, opacity) {
  this.l = +l3;
  this.a = +a5;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default2(Lab2, lab3, extend2(Color2, {
  brighter: function(k5) {
    return new Lab2(this.l + K2 * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  darker: function(k5) {
    return new Lab2(this.l - K2 * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y4 = (this.l + 16) / 116, x6 = isNaN(this.a) ? y4 : y4 + this.a / 500, z5 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x6 = Xn2 * lab2xyz2(x6);
    y4 = Yn2 * lab2xyz2(y4);
    z5 = Zn2 * lab2xyz2(z5);
    return new Rgb2(
      lrgb2rgb2(3.1338561 * x6 - 1.6168667 * y4 - 0.4906146 * z5),
      lrgb2rgb2(-0.9787684 * x6 + 1.9161415 * y4 + 0.033454 * z5),
      lrgb2rgb2(0.0719453 * x6 - 0.2289914 * y4 + 1.4052427 * z5),
      this.opacity
    );
  }
}));
function xyz2lab2(t7) {
  return t7 > t32 ? Math.pow(t7, 1 / 3) : t7 / t22 + t02;
}
function lab2xyz2(t7) {
  return t7 > t12 ? t7 * t7 * t7 : t22 * (t7 - t02);
}
function lrgb2rgb2(x6) {
  return 255 * (x6 <= 31308e-7 ? 12.92 * x6 : 1.055 * Math.pow(x6, 1 / 2.4) - 0.055);
}
function rgb2lrgb2(x6) {
  return (x6 /= 255) <= 0.04045 ? x6 / 12.92 : Math.pow((x6 + 0.055) / 1.055, 2.4);
}
function hclConvert2(o4) {
  if (o4 instanceof Hcl2)
    return new Hcl2(o4.h, o4.c, o4.l, o4.opacity);
  if (!(o4 instanceof Lab2))
    o4 = labConvert2(o4);
  if (o4.a === 0 && o4.b === 0)
    return new Hcl2(NaN, 0 < o4.l && o4.l < 100 ? 0 : NaN, o4.l, o4.opacity);
  var h3 = Math.atan2(o4.b, o4.a) * degrees3;
  return new Hcl2(h3 < 0 ? h3 + 360 : h3, Math.sqrt(o4.a * o4.a + o4.b * o4.b), o4.l, o4.opacity);
}
function hcl3(h3, c11, l3, opacity) {
  return arguments.length === 1 ? hclConvert2(h3) : new Hcl2(h3, c11, l3, opacity == null ? 1 : opacity);
}
function Hcl2(h3, c11, l3, opacity) {
  this.h = +h3;
  this.c = +c11;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab2(o4) {
  if (isNaN(o4.h))
    return new Lab2(o4.l, 0, 0, o4.opacity);
  var h3 = o4.h * radians2;
  return new Lab2(o4.l, Math.cos(h3) * o4.c, Math.sin(h3) * o4.c, o4.opacity);
}
define_default2(Hcl2, hcl3, extend2(Color2, {
  brighter: function(k5) {
    return new Hcl2(this.h, this.c, this.l + K2 * (k5 == null ? 1 : k5), this.opacity);
  },
  darker: function(k5) {
    return new Hcl2(this.h, this.c, this.l - K2 * (k5 == null ? 1 : k5), this.opacity);
  },
  rgb: function() {
    return hcl2lab2(this).rgb();
  }
}));

// node_modules/d3-scale/node_modules/d3-color/src/cubehelix.js
var A3 = -0.14861;
var B2 = 1.78277;
var C3 = -0.29227;
var D2 = -0.90649;
var E3 = 1.97294;
var ED2 = E3 * D2;
var EB2 = E3 * B2;
var BC_DA2 = B2 * C3 - D2 * A3;
function cubehelixConvert2(o4) {
  if (o4 instanceof Cubehelix2)
    return new Cubehelix2(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Rgb2))
    o4 = rgbConvert2(o4);
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, l3 = (BC_DA2 * b4 + ED2 * r4 - EB2 * g3) / (BC_DA2 + ED2 - EB2), bl = b4 - l3, k5 = (E3 * (g3 - l3) - C3 * bl) / D2, s4 = Math.sqrt(k5 * k5 + bl * bl) / (E3 * l3 * (1 - l3)), h3 = s4 ? Math.atan2(k5, bl) * degrees3 - 120 : NaN;
  return new Cubehelix2(h3 < 0 ? h3 + 360 : h3, s4, l3, o4.opacity);
}
function cubehelix3(h3, s4, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert2(h3) : new Cubehelix2(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Cubehelix2(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default2(Cubehelix2, cubehelix3, extend2(Color2, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter2 : Math.pow(brighter2, k5);
    return new Cubehelix2(this.h, this.s, this.l * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker2 : Math.pow(darker2, k5);
    return new Cubehelix2(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb: function() {
    var h3 = isNaN(this.h) ? 0 : (this.h + 120) * radians2, l3 = +this.l, a5 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h3), sinh4 = Math.sin(h3);
    return new Rgb2(
      255 * (l3 + a5 * (A3 * cosh4 + B2 * sinh4)),
      255 * (l3 + a5 * (C3 * cosh4 + D2 * sinh4)),
      255 * (l3 + a5 * (E3 * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-scale/node_modules/d3-interpolate/src/basis.js
function basis2(t16, v0, v1, v22, v32) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v32) / 6;
}
function basis_default2(values) {
  var n4 = values.length - 1;
  return function(t7) {
    var i4 = t7 <= 0 ? t7 = 0 : t7 >= 1 ? (t7 = 1, n4 - 1) : Math.floor(t7 * n4), v1 = values[i4], v22 = values[i4 + 1], v0 = i4 > 0 ? values[i4 - 1] : 2 * v1 - v22, v32 = i4 < n4 - 1 ? values[i4 + 2] : 2 * v22 - v1;
    return basis2((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default2(values) {
  var n4 = values.length;
  return function(t7) {
    var i4 = Math.floor(((t7 %= 1) < 0 ? ++t7 : t7) * n4), v0 = values[(i4 + n4 - 1) % n4], v1 = values[i4 % n4], v22 = values[(i4 + 1) % n4], v32 = values[(i4 + 2) % n4];
    return basis2((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/constant.js
var constant_default3 = (x6) => () => x6;

// node_modules/d3-scale/node_modules/d3-interpolate/src/color.js
function linear2(a5, d3) {
  return function(t7) {
    return a5 + t7 * d3;
  };
}
function exponential2(a5, b4, y4) {
  return a5 = Math.pow(a5, y4), b4 = Math.pow(b4, y4) - a5, y4 = 1 / y4, function(t7) {
    return Math.pow(a5 + t7 * b4, y4);
  };
}
function hue2(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear2(a5, d3 > 180 || d3 < -180 ? d3 - 360 * Math.round(d3 / 360) : d3) : constant_default3(isNaN(a5) ? b4 : a5);
}
function gamma2(y4) {
  return (y4 = +y4) === 1 ? nogamma2 : function(a5, b4) {
    return b4 - a5 ? exponential2(a5, b4, y4) : constant_default3(isNaN(a5) ? b4 : a5);
  };
}
function nogamma2(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear2(a5, d3) : constant_default3(isNaN(a5) ? b4 : a5);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/rgb.js
var rgb_default2 = function rgbGamma2(y4) {
  var color4 = gamma2(y4);
  function rgb5(start2, end) {
    var r4 = color4((start2 = rgb3(start2)).r, (end = rgb3(end)).r), g3 = color4(start2.g, end.g), b4 = color4(start2.b, end.b), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t7) {
      start2.r = r4(t7);
      start2.g = g3(t7);
      start2.b = b4(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma2;
  return rgb5;
}(1);
function rgbSpline2(spline) {
  return function(colors3) {
    var n4 = colors3.length, r4 = new Array(n4), g3 = new Array(n4), b4 = new Array(n4), i4, color4;
    for (i4 = 0; i4 < n4; ++i4) {
      color4 = rgb3(colors3[i4]);
      r4[i4] = color4.r || 0;
      g3[i4] = color4.g || 0;
      b4[i4] = color4.b || 0;
    }
    r4 = spline(r4);
    g3 = spline(g3);
    b4 = spline(b4);
    color4.opacity = 1;
    return function(t7) {
      color4.r = r4(t7);
      color4.g = g3(t7);
      color4.b = b4(t7);
      return color4 + "";
    };
  };
}
var rgbBasis2 = rgbSpline2(basis_default2);
var rgbBasisClosed2 = rgbSpline2(basisClosed_default2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/number.js
function number_default3(a5, b4) {
  return a5 = +a5, b4 = +b4, function(t7) {
    return a5 * (1 - t7) + b4 * t7;
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/string.js
var reA2 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB2 = new RegExp(reA2.source, "g");

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/decompose.js
var degrees4 = 180 / Math.PI;
var identity2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default2(a5, b4, c11, d3, e7, f3) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a5 * a5 + b4 * b4))
    a5 /= scaleX, b4 /= scaleX;
  if (skewX = a5 * c11 + b4 * d3)
    c11 -= a5 * skewX, d3 -= b4 * skewX;
  if (scaleY = Math.sqrt(c11 * c11 + d3 * d3))
    c11 /= scaleY, d3 /= scaleY, skewX /= scaleY;
  if (a5 * d3 < b4 * c11)
    a5 = -a5, b4 = -b4, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e7,
    translateY: f3,
    rotate: Math.atan2(b4, a5) * degrees4,
    skewX: Math.atan(skewX) * degrees4,
    scaleX,
    scaleY
  };
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/parse.js
var svgNode2;
function parseCss2(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity2 : decompose_default2(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg2(value) {
  if (value == null)
    return identity2;
  if (!svgNode2)
    svgNode2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode2.setAttribute("transform", value);
  if (!(value = svgNode2.transform.baseVal.consolidate()))
    return identity2;
  value = value.matrix;
  return decompose_default2(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-scale/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform2(parse, pxComma, pxParen, degParen) {
  function pop(s4) {
    return s4.length ? s4.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push("translate(", null, pxComma, null, pxParen);
      q3.push({ i: i4 - 4, x: number_default3(xa, xb) }, { i: i4 - 2, x: number_default3(ya, yb) });
    } else if (xb || yb) {
      s4.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a5, b4, s4, q3) {
    if (a5 !== b4) {
      if (a5 - b4 > 180)
        b4 += 360;
      else if (b4 - a5 > 180)
        a5 += 360;
      q3.push({ i: s4.push(pop(s4) + "rotate(", null, degParen) - 2, x: number_default3(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "rotate(" + b4 + degParen);
    }
  }
  function skewX(a5, b4, s4, q3) {
    if (a5 !== b4) {
      q3.push({ i: s4.push(pop(s4) + "skewX(", null, degParen) - 2, x: number_default3(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "skewX(" + b4 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push(pop(s4) + "scale(", null, ",", null, ")");
      q3.push({ i: i4 - 4, x: number_default3(xa, xb) }, { i: i4 - 2, x: number_default3(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s4.push(pop(s4) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a5, b4) {
    var s4 = [], q3 = [];
    a5 = parse(a5), b4 = parse(b4);
    translate(a5.translateX, a5.translateY, b4.translateX, b4.translateY, s4, q3);
    rotate(a5.rotate, b4.rotate, s4, q3);
    skewX(a5.skewX, b4.skewX, s4, q3);
    scale(a5.scaleX, a5.scaleY, b4.scaleX, b4.scaleY, s4, q3);
    a5 = b4 = null;
    return function(t7) {
      var i4 = -1, n4 = q3.length, o4;
      while (++i4 < n4)
        s4[(o4 = q3[i4]).i] = o4.x(t7);
      return s4.join("");
    };
  };
}
var interpolateTransformCss2 = interpolateTransform2(parseCss2, "px, ", "px)", "deg)");
var interpolateTransformSvg2 = interpolateTransform2(parseSvg2, ", ", ")", ")");

// node_modules/d3-scale/node_modules/d3-interpolate/src/zoom.js
var epsilon22 = 1e-12;
function cosh2(x6) {
  return ((x6 = Math.exp(x6)) + 1 / x6) / 2;
}
function sinh2(x6) {
  return ((x6 = Math.exp(x6)) - 1 / x6) / 2;
}
function tanh2(x6) {
  return ((x6 = Math.exp(2 * x6)) - 1) / (x6 + 1);
}
var zoom_default2 = function zoomRho2(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d22 = dx * dx + dy * dy, i4, S4;
    if (d22 < epsilon22) {
      S4 = Math.log(w1 / w0) / rho;
      i4 = function(t7) {
        return [
          ux0 + t7 * dx,
          uy0 + t7 * dy,
          w0 * Math.exp(rho * t7 * S4)
        ];
      };
    } else {
      var d1 = Math.sqrt(d22), b0 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S4 = (r1 - r0) / rho;
      i4 = function(t7) {
        var s4 = t7 * S4, coshr0 = cosh2(r0), u3 = w0 / (rho2 * d1) * (coshr0 * tanh2(rho * s4 + r0) - sinh2(r0));
        return [
          ux0 + u3 * dx,
          uy0 + u3 * dy,
          w0 * coshr0 / cosh2(rho * s4 + r0)
        ];
      };
    }
    i4.duration = S4 * 1e3 * rho / Math.SQRT2;
    return i4;
  }
  zoom.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho2(_1, _22, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-scale/node_modules/d3-interpolate/src/hsl.js
function hsl5(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hsl4(start2)).h, (end = hsl4(end)).h), s4 = nogamma2(start2.s, end.s), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.s = s4(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hsl_default2 = hsl5(hue2);
var hslLong2 = hsl5(nogamma2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/hcl.js
function hcl4(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hcl3(start2)).h, (end = hcl3(end)).h), c11 = nogamma2(start2.c, end.c), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.c = c11(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hcl_default2 = hcl4(hue2);
var hclLong2 = hcl4(nogamma2);

// node_modules/d3-scale/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix4(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h3 = hue4((start2 = cubehelix3(start2)).h, (end = cubehelix3(end)).h), s4 = nogamma2(start2.s, end.s), l3 = nogamma2(start2.l, end.l), opacity = nogamma2(start2.opacity, end.opacity);
      return function(t7) {
        start2.h = h3(t7);
        start2.s = s4(t7);
        start2.l = l3(Math.pow(t7, y4));
        start2.opacity = opacity(t7);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default2 = cubehelix4(hue2);
var cubehelixLong2 = cubehelix4(nogamma2);

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x6) {
  return Math.abs(x6 = Math.round(x6)) >= 1e21 ? x6.toLocaleString("en").replace(/,/g, "") : x6.toString(10);
}
function formatDecimalParts(x6, p4) {
  if ((i4 = (x6 = p4 ? x6.toExponential(p4 - 1) : x6.toExponential()).indexOf("e")) < 0)
    return null;
  var i4, coefficient = x6.slice(0, i4);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x6.slice(i4 + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x6) {
  return x6 = formatDecimalParts(Math.abs(x6)), x6 ? x6[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i4 = value.length, t7 = [], j4 = 0, g3 = grouping[0], length = 0;
    while (i4 > 0 && g3 > 0) {
      if (length + g3 + 1 > width)
        g3 = Math.max(1, width - length);
      t7.push(value.substring(i4 -= g3, i4 + g3));
      if ((length += g3 + 1) > width)
        break;
      g3 = grouping[j4 = (j4 + 1) % grouping.length];
    }
    return t7.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i4) {
      return numerals[+i4];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s4) {
  out:
    for (var n4 = s4.length, i4 = 1, i0 = -1, i1; i4 < n4; ++i4) {
      switch (s4[i4]) {
        case ".":
          i0 = i1 = i4;
          break;
        case "0":
          if (i0 === 0)
            i0 = i4;
          i1 = i4;
          break;
        default:
          if (!+s4[i4])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s4.slice(0, i0) + s4.slice(i1 + 1) : s4;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x6, p4) {
  var d3 = formatDecimalParts(x6, p4);
  if (!d3)
    return x6 + "";
  var coefficient = d3[0], exponent = d3[1], i4 = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n4 = coefficient.length;
  return i4 === n4 ? coefficient : i4 > n4 ? coefficient + new Array(i4 - n4 + 1).join("0") : i4 > 0 ? coefficient.slice(0, i4) + "." + coefficient.slice(i4) : "0." + new Array(1 - i4).join("0") + formatDecimalParts(x6, Math.max(0, p4 + i4 - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x6, p4) {
  var d3 = formatDecimalParts(x6, p4);
  if (!d3)
    return x6 + "";
  var coefficient = d3[0], exponent = d3[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": function(x6, p4) {
    return (x6 * 100).toFixed(p4);
  },
  "b": function(x6) {
    return Math.round(x6).toString(2);
  },
  "c": function(x6) {
    return x6 + "";
  },
  "d": formatDecimal_default,
  "e": function(x6, p4) {
    return x6.toExponential(p4);
  },
  "f": function(x6, p4) {
    return x6.toFixed(p4);
  },
  "g": function(x6, p4) {
    return x6.toPrecision(p4);
  },
  "o": function(x6) {
    return Math.round(x6).toString(8);
  },
  "p": function(x6, p4) {
    return formatRounded_default(x6 * 100, p4);
  },
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": function(x6) {
    return Math.round(x6).toString(16).toUpperCase();
  },
  "x": function(x6) {
    return Math.round(x6).toString(16);
  }
};

// node_modules/d3-format/src/identity.js
function identity_default2(x6) {
  return x6;
}

// node_modules/d3-format/src/locale.js
var map3 = Array.prototype.map;
var prefixes2 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group2 = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default2 : formatGroup_default(map3.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default2 : formatNumerals_default(map3.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "-" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes_default[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero || fill === "0" && align === "=")
      zero = true, fill = "0", align = "=";
    var prefix2 = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix2, valueSuffix = suffix, i4, n4, c11;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes2[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i4 = -1, n4 = value.length;
          while (++i4 < n4) {
            if (c11 = value.charCodeAt(i4), 48 > c11 || c11 > 57) {
              valueSuffix = (c11 === 46 ? decimal + value.slice(i4 + 1) : value.slice(i4)) + valueSuffix;
              value = value.slice(0, i4);
              break;
            }
          }
        }
      }
      if (comma && !zero)
        value = group2(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero)
        value = group2(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f3 = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e7 = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k5 = Math.pow(10, -e7), prefix2 = prefixes2[8 + e7 / 3];
    return function(value2) {
      return f3(k5 * value2) + prefix2;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-scale/node_modules/d3-time/src/interval.js
var t03 = /* @__PURE__ */ new Date();
var t13 = /* @__PURE__ */ new Date();
function newInterval(floori, offseti, count2, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = function(date) {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = function(date) {
    var d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = function(date, step) {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date)
        while (floori(date), !test(date))
          date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date, -1), !test(date)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date, 1), !test(date)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval.count = function(start2, end) {
      t03.setTime(+start2), t13.setTime(+end);
      floori(t03), floori(t13);
      return Math.floor(count2(t03, t13));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d3) {
        return field(d3) % step === 0;
      } : function(d3) {
        return interval.count(0, d3) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-scale/node_modules/d3-time/src/millisecond.js
var millisecond = newInterval(function() {
}, function(date, step) {
  date.setTime(+date + step);
}, function(start2, end) {
  return end - start2;
});
millisecond.every = function(k5) {
  k5 = Math.floor(k5);
  if (!isFinite(k5) || !(k5 > 0))
    return null;
  if (!(k5 > 1))
    return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k5) * k5);
  }, function(date, step) {
    date.setTime(+date + step * k5);
  }, function(start2, end) {
    return (end - start2) / k5;
  });
};
var millisecond_default = millisecond;
var milliseconds = millisecond.range;

// node_modules/d3-scale/node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-scale/node_modules/d3-time/src/second.js
var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start2, end) {
  return (end - start2) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});
var second_default = second;
var seconds = second.range;

// node_modules/d3-scale/node_modules/d3-time/src/minute.js
var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date) {
  return date.getMinutes();
});
var minute_default = minute;
var minutes = minute.range;

// node_modules/d3-scale/node_modules/d3-time/src/hour.js
var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date) {
  return date.getHours();
});
var hour_default = hour;
var hours = hour.range;

// node_modules/d3-scale/node_modules/d3-time/src/day.js
var day = newInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start2, end) => (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay,
  (date) => date.getDate() - 1
);
var day_default = day;
var days = day.range;

// node_modules/d3-scale/node_modules/d3-time/src/week.js
function weekday(i4) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i4) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);
var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

// node_modules/d3-scale/node_modules/d3-time/src/month.js
var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});
var month_default = month;
var months = month.range;

// node_modules/d3-scale/node_modules/d3-time/src/year.js
var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date) {
  return date.getFullYear();
});
year.every = function(k5) {
  return !isFinite(k5 = Math.floor(k5)) || !(k5 > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k5) * k5);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k5);
  });
};
var year_default = year;
var years = year.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcMinute.js
var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start2, end) {
  return (end - start2) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});
var utcMinute_default = utcMinute;
var utcMinutes = utcMinute.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcHour.js
var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start2, end) {
  return (end - start2) / durationHour;
}, function(date) {
  return date.getUTCHours();
});
var utcHour_default = utcHour;
var utcHours = utcHour.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcDay.js
var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});
var utcDay_default = utcDay;
var utcDays = utcDay.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcWeek.js
function utcWeekday(i4) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i4) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcMonth.js
var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});
var utcMonth_default = utcMonth;
var utcMonths = utcMonth.range;

// node_modules/d3-scale/node_modules/d3-time/src/utcYear.js
var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});
utcYear.every = function(k5) {
  return !isFinite(k5 = Math.floor(k5)) || !(k5 > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k5) * k5);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k5);
  });
};
var utcYear_default = utcYear;
var utcYears = utcYear.range;

// node_modules/d3-scale/node_modules/d3-time/src/ticks.js
function ticker(year3, month3, week, day3, hour3, minute3) {
  const tickIntervals = [
    [second_default, 1, durationSecond],
    [second_default, 5, 5 * durationSecond],
    [second_default, 15, 15 * durationSecond],
    [second_default, 30, 30 * durationSecond],
    [minute3, 1, durationMinute],
    [minute3, 5, 5 * durationMinute],
    [minute3, 15, 15 * durationMinute],
    [minute3, 30, 30 * durationMinute],
    [hour3, 1, durationHour],
    [hour3, 3, 3 * durationHour],
    [hour3, 6, 6 * durationHour],
    [hour3, 12, 12 * durationHour],
    [day3, 1, durationDay],
    [day3, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month3, 1, durationMonth],
    [month3, 3, 3 * durationMonth],
    [year3, 1, durationYear]
  ];
  function ticks(start2, stop2, count2) {
    const reverse2 = stop2 < start2;
    if (reverse2)
      [start2, stop2] = [stop2, start2];
    const interval = count2 && typeof count2.range === "function" ? count2 : tickInterval(start2, stop2, count2);
    const ticks2 = interval ? interval.range(start2, +stop2 + 1) : [];
    return reverse2 ? ticks2.reverse() : ticks2;
  }
  function tickInterval(start2, stop2, count2) {
    const target = Math.abs(stop2 - start2) / count2;
    const i4 = bisector_default(([, , step2]) => step2).right(tickIntervals, target);
    if (i4 === tickIntervals.length)
      return year3.every(tickStep(start2 / durationYear, stop2 / durationYear, count2));
    if (i4 === 0)
      return millisecond_default.every(Math.max(tickStep(start2, stop2, count2), 1));
    const [t7, step] = tickIntervals[target / tickIntervals[i4 - 1][2] < tickIntervals[i4][2] / target ? i4 - 1 : i4];
    return t7.every(step);
  }
  return [ticks, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear_default, utcMonth_default, utcSunday, utcDay_default, utcHour_default, utcMinute_default);
var [timeTicks, timeTickInterval] = ticker(year_default, month_default, sunday, day_default, hour_default, minute_default);

// node_modules/d3-time/src/interval.js
var t04 = /* @__PURE__ */ new Date();
var t14 = /* @__PURE__ */ new Date();
function newInterval2(floori, offseti, count2, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date)), date;
  }
  interval.floor = function(date) {
    return floori(date = /* @__PURE__ */ new Date(+date)), date;
  };
  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = function(date) {
    var d0 = interval(date), d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = function(date, step) {
    return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = function(start2, stop2, step) {
    var range = [], previous;
    start2 = interval.ceil(start2);
    step = step == null ? 1 : Math.floor(step);
    if (!(start2 < stop2) || !(step > 0))
      return range;
    do
      range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
    while (previous < start2 && start2 < stop2);
    return range;
  };
  interval.filter = function(test) {
    return newInterval2(function(date) {
      if (date >= date)
        while (floori(date), !test(date))
          date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date, -1), !test(date)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date, 1), !test(date)) {
            }
          }
      }
    });
  };
  if (count2) {
    interval.count = function(start2, end) {
      t04.setTime(+start2), t14.setTime(+end);
      floori(t04), floori(t14);
      return Math.floor(count2(t04, t14));
    };
    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d3) {
        return field(d3) % step === 0;
      } : function(d3) {
        return interval.count(0, d3) % step === 0;
      });
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond2 = newInterval2(function() {
}, function(date, step) {
  date.setTime(+date + step);
}, function(start2, end) {
  return end - start2;
});
millisecond2.every = function(k5) {
  k5 = Math.floor(k5);
  if (!isFinite(k5) || !(k5 > 0))
    return null;
  if (!(k5 > 1))
    return millisecond2;
  return newInterval2(function(date) {
    date.setTime(Math.floor(date / k5) * k5);
  }, function(date, step) {
    date.setTime(+date + step * k5);
  }, function(start2, end) {
    return (end - start2) / k5;
  });
};
var milliseconds2 = millisecond2.range;

// node_modules/d3-time/src/duration.js
var durationSecond2 = 1e3;
var durationMinute2 = 6e4;
var durationHour2 = 36e5;
var durationDay2 = 864e5;
var durationWeek2 = 6048e5;

// node_modules/d3-time/src/second.js
var second2 = newInterval2(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond2);
}, function(start2, end) {
  return (end - start2) / durationSecond2;
}, function(date) {
  return date.getUTCSeconds();
});
var seconds2 = second2.range;

// node_modules/d3-time/src/minute.js
var minute2 = newInterval2(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond2);
}, function(date, step) {
  date.setTime(+date + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date) {
  return date.getMinutes();
});
var minutes2 = minute2.range;

// node_modules/d3-time/src/hour.js
var hour2 = newInterval2(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond2 - date.getMinutes() * durationMinute2);
}, function(date, step) {
  date.setTime(+date + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date) {
  return date.getHours();
});
var hours2 = hour2.range;

// node_modules/d3-time/src/day.js
var day2 = newInterval2(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start2, end) {
  return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationDay2;
}, function(date) {
  return date.getDate() - 1;
});
var day_default2 = day2;
var days2 = day2.range;

// node_modules/d3-time/src/week.js
function weekday2(i4) {
  return newInterval2(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i4) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute2) / durationWeek2;
  });
}
var sunday2 = weekday2(0);
var monday2 = weekday2(1);
var tuesday2 = weekday2(2);
var wednesday2 = weekday2(3);
var thursday2 = weekday2(4);
var friday2 = weekday2(5);
var saturday2 = weekday2(6);
var sundays2 = sunday2.range;
var mondays2 = monday2.range;
var tuesdays2 = tuesday2.range;
var wednesdays2 = wednesday2.range;
var thursdays2 = thursday2.range;
var fridays2 = friday2.range;
var saturdays2 = saturday2.range;

// node_modules/d3-time/src/month.js
var month2 = newInterval2(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start2, end) {
  return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});
var months2 = month2.range;

// node_modules/d3-time/src/year.js
var year2 = newInterval2(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start2, end) {
  return end.getFullYear() - start2.getFullYear();
}, function(date) {
  return date.getFullYear();
});
year2.every = function(k5) {
  return !isFinite(k5 = Math.floor(k5)) || !(k5 > 0) ? null : newInterval2(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k5) * k5);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k5);
  });
};
var year_default2 = year2;
var years2 = year2.range;

// node_modules/d3-time/src/utcMinute.js
var utcMinute2 = newInterval2(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute2);
}, function(start2, end) {
  return (end - start2) / durationMinute2;
}, function(date) {
  return date.getUTCMinutes();
});
var utcMinutes2 = utcMinute2.range;

// node_modules/d3-time/src/utcHour.js
var utcHour2 = newInterval2(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour2);
}, function(start2, end) {
  return (end - start2) / durationHour2;
}, function(date) {
  return date.getUTCHours();
});
var utcHours2 = utcHour2.range;

// node_modules/d3-time/src/utcDay.js
var utcDay2 = newInterval2(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start2, end) {
  return (end - start2) / durationDay2;
}, function(date) {
  return date.getUTCDate() - 1;
});
var utcDay_default2 = utcDay2;
var utcDays2 = utcDay2.range;

// node_modules/d3-time/src/utcWeek.js
function utcWeekday2(i4) {
  return newInterval2(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i4) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start2, end) {
    return (end - start2) / durationWeek2;
  });
}
var utcSunday2 = utcWeekday2(0);
var utcMonday2 = utcWeekday2(1);
var utcTuesday2 = utcWeekday2(2);
var utcWednesday2 = utcWeekday2(3);
var utcThursday2 = utcWeekday2(4);
var utcFriday2 = utcWeekday2(5);
var utcSaturday2 = utcWeekday2(6);
var utcSundays2 = utcSunday2.range;
var utcMondays2 = utcMonday2.range;
var utcTuesdays2 = utcTuesday2.range;
var utcWednesdays2 = utcWednesday2.range;
var utcThursdays2 = utcThursday2.range;
var utcFridays2 = utcFriday2.range;
var utcSaturdays2 = utcSaturday2.range;

// node_modules/d3-time/src/utcMonth.js
var utcMonth2 = newInterval2(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start2, end) {
  return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});
var utcMonths2 = utcMonth2.range;

// node_modules/d3-time/src/utcYear.js
var utcYear2 = newInterval2(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start2, end) {
  return end.getUTCFullYear() - start2.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});
utcYear2.every = function(k5) {
  return !isFinite(k5 = Math.floor(k5)) || !(k5 > 0) ? null : newInterval2(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k5) * k5);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k5);
  });
};
var utcYear_default2 = utcYear2;
var utcYears2 = utcYear2.range;

// node_modules/d3-time-format/src/locale.js
function localDate(d3) {
  if (0 <= d3.y && d3.y < 100) {
    var date = new Date(-1, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L);
    date.setFullYear(d3.y);
    return date;
  }
  return new Date(d3.y, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L);
}
function utcDate(d3) {
  if (0 <= d3.y && d3.y < 100) {
    var date = new Date(Date.UTC(-1, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L));
    date.setUTCFullYear(d3.y);
    return date;
  }
  return new Date(Date.UTC(d3.y, d3.m, d3.d, d3.H, d3.M, d3.S, d3.L));
}
function newDate(y4, m4, d3) {
  return { y: y4, m: m4, d: d3, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date) {
      var string = [], i4 = -1, j4 = 0, n4 = specifier.length, c11, pad2, format2;
      if (!(date instanceof Date))
        date = /* @__PURE__ */ new Date(+date);
      while (++i4 < n4) {
        if (specifier.charCodeAt(i4) === 37) {
          string.push(specifier.slice(j4, i4));
          if ((pad2 = pads[c11 = specifier.charAt(++i4)]) != null)
            c11 = specifier.charAt(++i4);
          else
            pad2 = c11 === "e" ? " " : "0";
          if (format2 = formats2[c11])
            c11 = format2(date, pad2);
          string.push(c11);
          j4 = i4 + 1;
        }
      }
      string.push(specifier.slice(j4, i4));
      return string.join("");
    };
  }
  function newParse(specifier, Z2) {
    return function(string) {
      var d3 = newDate(1900, void 0, 1), i4 = parseSpecifier(d3, specifier, string += "", 0), week, day3;
      if (i4 != string.length)
        return null;
      if ("Q" in d3)
        return new Date(d3.Q);
      if ("s" in d3)
        return new Date(d3.s * 1e3 + ("L" in d3 ? d3.L : 0));
      if (Z2 && !("Z" in d3))
        d3.Z = 0;
      if ("p" in d3)
        d3.H = d3.H % 12 + d3.p * 12;
      if (d3.m === void 0)
        d3.m = "q" in d3 ? d3.q : 0;
      if ("V" in d3) {
        if (d3.V < 1 || d3.V > 53)
          return null;
        if (!("w" in d3))
          d3.w = 1;
        if ("Z" in d3) {
          week = utcDate(newDate(d3.y, 0, 1)), day3 = week.getUTCDay();
          week = day3 > 4 || day3 === 0 ? utcMonday2.ceil(week) : utcMonday2(week);
          week = utcDay_default2.offset(week, (d3.V - 1) * 7);
          d3.y = week.getUTCFullYear();
          d3.m = week.getUTCMonth();
          d3.d = week.getUTCDate() + (d3.w + 6) % 7;
        } else {
          week = localDate(newDate(d3.y, 0, 1)), day3 = week.getDay();
          week = day3 > 4 || day3 === 0 ? monday2.ceil(week) : monday2(week);
          week = day_default2.offset(week, (d3.V - 1) * 7);
          d3.y = week.getFullYear();
          d3.m = week.getMonth();
          d3.d = week.getDate() + (d3.w + 6) % 7;
        }
      } else if ("W" in d3 || "U" in d3) {
        if (!("w" in d3))
          d3.w = "u" in d3 ? d3.u % 7 : "W" in d3 ? 1 : 0;
        day3 = "Z" in d3 ? utcDate(newDate(d3.y, 0, 1)).getUTCDay() : localDate(newDate(d3.y, 0, 1)).getDay();
        d3.m = 0;
        d3.d = "W" in d3 ? (d3.w + 6) % 7 + d3.W * 7 - (day3 + 5) % 7 : d3.w + d3.U * 7 - (day3 + 6) % 7;
      }
      if ("Z" in d3) {
        d3.H += d3.Z / 100 | 0;
        d3.M += d3.Z % 100;
        return utcDate(d3);
      }
      return localDate(d3);
    };
  }
  function parseSpecifier(d3, specifier, string, j4) {
    var i4 = 0, n4 = specifier.length, m4 = string.length, c11, parse;
    while (i4 < n4) {
      if (j4 >= m4)
        return -1;
      c11 = specifier.charCodeAt(i4++);
      if (c11 === 37) {
        c11 = specifier.charAt(i4++);
        parse = parses[c11 in pads ? specifier.charAt(i4++) : c11];
        if (!parse || (j4 = parse(d3, string, j4)) < 0)
          return -1;
      } else if (c11 != string.charCodeAt(j4++)) {
        return -1;
      }
    }
    return j4;
  }
  function parsePeriod(d3, string, i4) {
    var n4 = periodRe.exec(string.slice(i4));
    return n4 ? (d3.p = periodLookup.get(n4[0].toLowerCase()), i4 + n4[0].length) : -1;
  }
  function parseShortWeekday(d3, string, i4) {
    var n4 = shortWeekdayRe.exec(string.slice(i4));
    return n4 ? (d3.w = shortWeekdayLookup.get(n4[0].toLowerCase()), i4 + n4[0].length) : -1;
  }
  function parseWeekday(d3, string, i4) {
    var n4 = weekdayRe.exec(string.slice(i4));
    return n4 ? (d3.w = weekdayLookup.get(n4[0].toLowerCase()), i4 + n4[0].length) : -1;
  }
  function parseShortMonth(d3, string, i4) {
    var n4 = shortMonthRe.exec(string.slice(i4));
    return n4 ? (d3.m = shortMonthLookup.get(n4[0].toLowerCase()), i4 + n4[0].length) : -1;
  }
  function parseMonth(d3, string, i4) {
    var n4 = monthRe.exec(string.slice(i4));
    return n4 ? (d3.m = monthLookup.get(n4[0].toLowerCase()), i4 + n4[0].length) : -1;
  }
  function parseLocaleDateTime(d3, string, i4) {
    return parseSpecifier(d3, locale_dateTime, string, i4);
  }
  function parseLocaleDate(d3, string, i4) {
    return parseSpecifier(d3, locale_date, string, i4);
  }
  function parseLocaleTime(d3, string, i4) {
    return parseSpecifier(d3, locale_time, string, i4);
  }
  function formatShortWeekday(d3) {
    return locale_shortWeekdays[d3.getDay()];
  }
  function formatWeekday(d3) {
    return locale_weekdays[d3.getDay()];
  }
  function formatShortMonth(d3) {
    return locale_shortMonths[d3.getMonth()];
  }
  function formatMonth(d3) {
    return locale_months[d3.getMonth()];
  }
  function formatPeriod(d3) {
    return locale_periods[+(d3.getHours() >= 12)];
  }
  function formatQuarter(d3) {
    return 1 + ~~(d3.getMonth() / 3);
  }
  function formatUTCShortWeekday(d3) {
    return locale_shortWeekdays[d3.getUTCDay()];
  }
  function formatUTCWeekday(d3) {
    return locale_weekdays[d3.getUTCDay()];
  }
  function formatUTCShortMonth(d3) {
    return locale_shortMonths[d3.getUTCMonth()];
  }
  function formatUTCMonth(d3) {
    return locale_months[d3.getUTCMonth()];
  }
  function formatUTCPeriod(d3) {
    return locale_periods[+(d3.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d3) {
    return 1 + ~~(d3.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f3 = newFormat(specifier += "", formats);
      f3.toString = function() {
        return specifier;
      };
      return f3;
    },
    parse: function(specifier) {
      var p4 = newParse(specifier += "", false);
      p4.toString = function() {
        return specifier;
      };
      return p4;
    },
    utcFormat: function(specifier) {
      var f3 = newFormat(specifier += "", utcFormats);
      f3.toString = function() {
        return specifier;
      };
      return f3;
    },
    utcParse: function(specifier) {
      var p4 = newParse(specifier += "", true);
      p4.toString = function() {
        return specifier;
      };
      return p4;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s4) {
  return s4.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i4) => [name.toLowerCase(), i4]));
}
function parseWeekdayNumberSunday(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 1));
  return n4 ? (d3.w = +n4[0], i4 + n4[0].length) : -1;
}
function parseWeekdayNumberMonday(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 1));
  return n4 ? (d3.u = +n4[0], i4 + n4[0].length) : -1;
}
function parseWeekNumberSunday(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.U = +n4[0], i4 + n4[0].length) : -1;
}
function parseWeekNumberISO(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.V = +n4[0], i4 + n4[0].length) : -1;
}
function parseWeekNumberMonday(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.W = +n4[0], i4 + n4[0].length) : -1;
}
function parseFullYear(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 4));
  return n4 ? (d3.y = +n4[0], i4 + n4[0].length) : -1;
}
function parseYear(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.y = +n4[0] + (+n4[0] > 68 ? 1900 : 2e3), i4 + n4[0].length) : -1;
}
function parseZone(d3, string, i4) {
  var n4 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i4, i4 + 6));
  return n4 ? (d3.Z = n4[1] ? 0 : -(n4[2] + (n4[3] || "00")), i4 + n4[0].length) : -1;
}
function parseQuarter(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 1));
  return n4 ? (d3.q = n4[0] * 3 - 3, i4 + n4[0].length) : -1;
}
function parseMonthNumber(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.m = n4[0] - 1, i4 + n4[0].length) : -1;
}
function parseDayOfMonth(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.d = +n4[0], i4 + n4[0].length) : -1;
}
function parseDayOfYear(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 3));
  return n4 ? (d3.m = 0, d3.d = +n4[0], i4 + n4[0].length) : -1;
}
function parseHour24(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.H = +n4[0], i4 + n4[0].length) : -1;
}
function parseMinutes(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.M = +n4[0], i4 + n4[0].length) : -1;
}
function parseSeconds(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 2));
  return n4 ? (d3.S = +n4[0], i4 + n4[0].length) : -1;
}
function parseMilliseconds(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 3));
  return n4 ? (d3.L = +n4[0], i4 + n4[0].length) : -1;
}
function parseMicroseconds(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4, i4 + 6));
  return n4 ? (d3.L = Math.floor(n4[0] / 1e3), i4 + n4[0].length) : -1;
}
function parseLiteralPercent(d3, string, i4) {
  var n4 = percentRe.exec(string.slice(i4, i4 + 1));
  return n4 ? i4 + n4[0].length : -1;
}
function parseUnixTimestamp(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4));
  return n4 ? (d3.Q = +n4[0], i4 + n4[0].length) : -1;
}
function parseUnixTimestampSeconds(d3, string, i4) {
  var n4 = numberRe.exec(string.slice(i4));
  return n4 ? (d3.s = +n4[0], i4 + n4[0].length) : -1;
}
function formatDayOfMonth(d3, p4) {
  return pad(d3.getDate(), p4, 2);
}
function formatHour24(d3, p4) {
  return pad(d3.getHours(), p4, 2);
}
function formatHour12(d3, p4) {
  return pad(d3.getHours() % 12 || 12, p4, 2);
}
function formatDayOfYear(d3, p4) {
  return pad(1 + day_default2.count(year_default2(d3), d3), p4, 3);
}
function formatMilliseconds(d3, p4) {
  return pad(d3.getMilliseconds(), p4, 3);
}
function formatMicroseconds(d3, p4) {
  return formatMilliseconds(d3, p4) + "000";
}
function formatMonthNumber(d3, p4) {
  return pad(d3.getMonth() + 1, p4, 2);
}
function formatMinutes(d3, p4) {
  return pad(d3.getMinutes(), p4, 2);
}
function formatSeconds(d3, p4) {
  return pad(d3.getSeconds(), p4, 2);
}
function formatWeekdayNumberMonday(d3) {
  var day3 = d3.getDay();
  return day3 === 0 ? 7 : day3;
}
function formatWeekNumberSunday(d3, p4) {
  return pad(sunday2.count(year_default2(d3) - 1, d3), p4, 2);
}
function dISO(d3) {
  var day3 = d3.getDay();
  return day3 >= 4 || day3 === 0 ? thursday2(d3) : thursday2.ceil(d3);
}
function formatWeekNumberISO(d3, p4) {
  d3 = dISO(d3);
  return pad(thursday2.count(year_default2(d3), d3) + (year_default2(d3).getDay() === 4), p4, 2);
}
function formatWeekdayNumberSunday(d3) {
  return d3.getDay();
}
function formatWeekNumberMonday(d3, p4) {
  return pad(monday2.count(year_default2(d3) - 1, d3), p4, 2);
}
function formatYear(d3, p4) {
  return pad(d3.getFullYear() % 100, p4, 2);
}
function formatYearISO(d3, p4) {
  d3 = dISO(d3);
  return pad(d3.getFullYear() % 100, p4, 2);
}
function formatFullYear(d3, p4) {
  return pad(d3.getFullYear() % 1e4, p4, 4);
}
function formatFullYearISO(d3, p4) {
  var day3 = d3.getDay();
  d3 = day3 >= 4 || day3 === 0 ? thursday2(d3) : thursday2.ceil(d3);
  return pad(d3.getFullYear() % 1e4, p4, 4);
}
function formatZone(d3) {
  var z5 = d3.getTimezoneOffset();
  return (z5 > 0 ? "-" : (z5 *= -1, "+")) + pad(z5 / 60 | 0, "0", 2) + pad(z5 % 60, "0", 2);
}
function formatUTCDayOfMonth(d3, p4) {
  return pad(d3.getUTCDate(), p4, 2);
}
function formatUTCHour24(d3, p4) {
  return pad(d3.getUTCHours(), p4, 2);
}
function formatUTCHour12(d3, p4) {
  return pad(d3.getUTCHours() % 12 || 12, p4, 2);
}
function formatUTCDayOfYear(d3, p4) {
  return pad(1 + utcDay_default2.count(utcYear_default2(d3), d3), p4, 3);
}
function formatUTCMilliseconds(d3, p4) {
  return pad(d3.getUTCMilliseconds(), p4, 3);
}
function formatUTCMicroseconds(d3, p4) {
  return formatUTCMilliseconds(d3, p4) + "000";
}
function formatUTCMonthNumber(d3, p4) {
  return pad(d3.getUTCMonth() + 1, p4, 2);
}
function formatUTCMinutes(d3, p4) {
  return pad(d3.getUTCMinutes(), p4, 2);
}
function formatUTCSeconds(d3, p4) {
  return pad(d3.getUTCSeconds(), p4, 2);
}
function formatUTCWeekdayNumberMonday(d3) {
  var dow = d3.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d3, p4) {
  return pad(utcSunday2.count(utcYear_default2(d3) - 1, d3), p4, 2);
}
function UTCdISO(d3) {
  var day3 = d3.getUTCDay();
  return day3 >= 4 || day3 === 0 ? utcThursday2(d3) : utcThursday2.ceil(d3);
}
function formatUTCWeekNumberISO(d3, p4) {
  d3 = UTCdISO(d3);
  return pad(utcThursday2.count(utcYear_default2(d3), d3) + (utcYear_default2(d3).getUTCDay() === 4), p4, 2);
}
function formatUTCWeekdayNumberSunday(d3) {
  return d3.getUTCDay();
}
function formatUTCWeekNumberMonday(d3, p4) {
  return pad(utcMonday2.count(utcYear_default2(d3) - 1, d3), p4, 2);
}
function formatUTCYear(d3, p4) {
  return pad(d3.getUTCFullYear() % 100, p4, 2);
}
function formatUTCYearISO(d3, p4) {
  d3 = UTCdISO(d3);
  return pad(d3.getUTCFullYear() % 100, p4, 2);
}
function formatUTCFullYear(d3, p4) {
  return pad(d3.getUTCFullYear() % 1e4, p4, 4);
}
function formatUTCFullYearISO(d3, p4) {
  var day3 = d3.getUTCDay();
  d3 = day3 >= 4 || day3 === 0 ? utcThursday2(d3) : utcThursday2.ceil(d3);
  return pad(d3.getUTCFullYear() % 1e4, p4, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d3) {
  return +d3;
}
function formatUnixTimestampSeconds(d3) {
  return Math.floor(+d3 / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-time-format/src/isoFormat.js
var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
function formatIsoNative(date) {
  return date.toISOString();
}
var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

// node_modules/d3-time-format/src/isoParse.js
function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}
var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/colors.js
function colors_default(specifier) {
  var n4 = specifier.length / 6 | 0, colors3 = new Array(n4), i4 = 0;
  while (i4 < n4)
    colors3[i4] = "#" + specifier.slice(i4 * 6, ++i4 * 6);
  return colors3;
}

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default = colors_default("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default = (scheme55) => rgbBasis(scheme55[scheme55.length - 1]);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default);
var BrBG_default = ramp_default(scheme);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme2 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default);
var PRGn_default = ramp_default(scheme2);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme3 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default);
var PiYG_default = ramp_default(scheme3);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme4 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default);
var PuOr_default = ramp_default(scheme4);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme5 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default);
var RdBu_default = ramp_default(scheme5);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme6 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default);
var RdGy_default = ramp_default(scheme6);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme7 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default);
var RdYlBu_default = ramp_default(scheme7);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme8 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default);
var RdYlGn_default = ramp_default(scheme8);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme9 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default);
var Spectral_default = ramp_default(scheme9);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme10 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default);
var BuGn_default = ramp_default(scheme10);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme11 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default);
var BuPu_default = ramp_default(scheme11);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme12 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default);
var GnBu_default = ramp_default(scheme12);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme13 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default);
var OrRd_default = ramp_default(scheme13);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme14 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default);
var PuBuGn_default = ramp_default(scheme14);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme15 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default);
var PuBu_default = ramp_default(scheme15);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme16 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default);
var PuRd_default = ramp_default(scheme16);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme17 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default);
var RdPu_default = ramp_default(scheme17);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme18 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default);
var YlGnBu_default = ramp_default(scheme18);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme19 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default);
var YlGn_default = ramp_default(scheme19);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme20 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default);
var YlOrBr_default = ramp_default(scheme20);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme21 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default);
var YlOrRd_default = ramp_default(scheme21);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme22 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default);
var Blues_default = ramp_default(scheme22);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme23 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default);
var Greens_default = ramp_default(scheme23);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme24 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default);
var Greys_default = ramp_default(scheme24);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme25 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default);
var Purples_default = ramp_default(scheme25);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme26 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default);
var Reds_default = ramp_default(scheme26);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme27 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default);
var Oranges_default = ramp_default(scheme27);

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default3 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
var c = cubehelix();

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c6 = rgb2();
var pi_1_3 = Math.PI / 3;
var pi_2_3 = Math.PI * 2 / 3;

// node_modules/@nivo/core/node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp(range) {
  var n4 = range.length;
  return function(t7) {
    return range[Math.max(0, Math.min(n4 - 1, Math.floor(t7 * n4)))];
  };
}
var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isFunction = __toESM(require_isFunction());
var import_without = __toESM(require_without());

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null;
  this._ = "";
}
function path() {
  return new Path();
}
Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x6, y4) {
    this._ += "M" + (this._x0 = this._x1 = +x6) + "," + (this._y0 = this._y1 = +y4);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x6, y4) {
    this._ += "L" + (this._x1 = +x6) + "," + (this._y1 = +y4);
  },
  quadraticCurveTo: function(x1, y1, x6, y4) {
    this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x6) + "," + (this._y1 = +y4);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x6, y4) {
    this._ += "C" + +x1 + "," + +y1 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x6) + "," + (this._y1 = +y4);
  },
  arcTo: function(x1, y1, x22, y22, r4) {
    x1 = +x1, y1 = +y1, x22 = +x22, y22 = +y22, r4 = +r4;
    var x0 = this._x1, y0 = this._y1, x21 = x22 - x1, y21 = y22 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (r4 < 0)
      throw new Error("negative radius: " + r4);
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r4) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    } else {
      var x20 = x22 - x0, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l3 = r4 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l3 / l01, t21 = l3 / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }
      this._ += "A" + r4 + "," + r4 + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x6, y4, r4, a0, a1, ccw) {
    x6 = +x6, y4 = +y4, r4 = +r4, ccw = !!ccw;
    var dx = r4 * Math.cos(a0), dy = r4 * Math.sin(a0), x0 = x6 + dx, y0 = y4 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (r4 < 0)
      throw new Error("negative radius: " + r4);
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }
    if (!r4)
      return;
    if (da < 0)
      da = da % tau + tau;
    if (da > tauEpsilon) {
      this._ += "A" + r4 + "," + r4 + ",0,1," + cw + "," + (x6 - dx) + "," + (y4 - dy) + "A" + r4 + "," + r4 + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    } else if (da > epsilon) {
      this._ += "A" + r4 + "," + r4 + ",0," + +(da >= pi) + "," + cw + "," + (this._x1 = x6 + r4 * Math.cos(a1)) + "," + (this._y1 = y4 + r4 * Math.sin(a1));
    }
  },
  rect: function(x6, y4, w4, h3) {
    this._ += "M" + (this._x0 = this._x1 = +x6) + "," + (this._y0 = this._y1 = +y4) + "h" + +w4 + "v" + +h3 + "h" + -w4 + "Z";
  },
  toString: function() {
    return this._;
  }
};
var path_default = path;

// node_modules/d3-shape/src/constant.js
function constant_default4(x6) {
  return function constant() {
    return x6;
  };
}

// node_modules/d3-shape/src/math.js
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max2 = Math.max;
var min2 = Math.min;
var sin = Math.sin;
var sqrt2 = Math.sqrt;
var epsilon3 = 1e-12;
var pi2 = Math.PI;
var halfPi = pi2 / 2;
var tau2 = 2 * pi2;
function acos(x6) {
  return x6 > 1 ? 0 : x6 < -1 ? pi2 : Math.acos(x6);
}
function asin(x6) {
  return x6 >= 1 ? halfPi : x6 <= -1 ? -halfPi : Math.asin(x6);
}

// node_modules/d3-shape/src/arc.js
function arcInnerRadius(d3) {
  return d3.innerRadius;
}
function arcOuterRadius(d3) {
  return d3.outerRadius;
}
function arcStartAngle(d3) {
  return d3.startAngle;
}
function arcEndAngle(d3) {
  return d3.endAngle;
}
function arcPadAngle(d3) {
  return d3 && d3.padAngle;
}
function intersect(x0, y0, x1, y1, x22, y22, x32, y32) {
  var x10 = x1 - x0, y10 = y1 - y0, x322 = x32 - x22, y322 = y32 - y22, t7 = y322 * x10 - x322 * y10;
  if (t7 * t7 < epsilon3)
    return;
  t7 = (x322 * (y0 - y22) - y322 * (x0 - x22)) / t7;
  return [x0 + t7 * x10, y0 + t7 * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt2(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d22 = dx * dx + dy * dy, r4 = r1 - rc, D5 = x11 * y10 - x10 * y11, d3 = (dy < 0 ? -1 : 1) * sqrt2(max2(0, r4 * r4 * d22 - D5 * D5)), cx0 = (D5 * dy - dx * d3) / d22, cy0 = (-D5 * dx - dy * d3) / d22, cx1 = (D5 * dy + dx * d3) / d22, cy1 = (-D5 * dx + dy * d3) / d22, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
    cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r4 - 1),
    y11: cy0 * (r1 / r4 - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default4(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
  function arc() {
    var buffer, r4, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context)
      context = buffer = path_default();
    if (r1 < r0)
      r4 = r1, r1 = r0, r0 = r4;
    if (!(r1 > epsilon3))
      context.moveTo(0, 0);
    else if (da > tau2 - epsilon3) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon3) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt2(r0 * r0 + r1 * r1)), rc = min2(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t06, t16;
      if (rp > epsilon3) {
        var p0 = asin(rp / r0 * sin(ap)), p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon3)
          p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
        else
          da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon3)
          p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else
          da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos(a01), y01 = r1 * sin(a01), x10 = r0 * cos(a10), y10 = r0 * sin(a10);
      if (rc > epsilon3) {
        var x11 = r1 * cos(a11), y11 = r1 * sin(a11), x00 = r0 * cos(a00), y00 = r0 * sin(a00), oc;
        if (da < pi2 && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt2(ax * ax + ay * ay) * sqrt2(bx * bx + by * by))) / 2), lc = sqrt2(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min2(rc, (r0 - lc) / (kc - 1));
          rc1 = min2(rc, (r1 - lc) / (kc + 1));
        }
      }
      if (!(da1 > epsilon3))
        context.moveTo(x01, y01);
      else if (rc1 > epsilon3) {
        t06 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t16 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t06.cx + t06.x01, t06.cy + t06.y01);
        if (rc1 < rc)
          context.arc(t06.cx, t06.cy, rc1, atan2(t06.y01, t06.x01), atan2(t16.y01, t16.x01), !cw);
        else {
          context.arc(t06.cx, t06.cy, rc1, atan2(t06.y01, t06.x01), atan2(t06.y11, t06.x11), !cw);
          context.arc(0, 0, r1, atan2(t06.cy + t06.y11, t06.cx + t06.x11), atan2(t16.cy + t16.y11, t16.cx + t16.x11), !cw);
          context.arc(t16.cx, t16.cy, rc1, atan2(t16.y11, t16.x11), atan2(t16.y01, t16.x01), !cw);
        }
      } else
        context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon3) || !(da0 > epsilon3))
        context.lineTo(x10, y10);
      else if (rc0 > epsilon3) {
        t06 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t16 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t06.cx + t06.x01, t06.cy + t06.y01);
        if (rc0 < rc)
          context.arc(t06.cx, t06.cy, rc0, atan2(t06.y01, t06.x01), atan2(t16.y01, t16.x01), !cw);
        else {
          context.arc(t06.cx, t06.cy, rc0, atan2(t06.y01, t06.x01), atan2(t06.y11, t06.x11), !cw);
          context.arc(0, 0, r0, atan2(t06.cy + t06.y11, t06.cx + t06.x11), atan2(t16.cy + t16.y11, t16.cx + t16.x11), cw);
          context.arc(t16.cx, t16.cy, rc0, atan2(t16.y11, t16.x11), atan2(t16.y01, t16.x01), !cw);
        }
      } else
        context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer)
      return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r4 = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a5 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi2 / 2;
    return [cos(a5) * r4, sin(a5) * r4];
  };
  arc.innerRadius = function(_2) {
    return arguments.length ? (innerRadius = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : innerRadius;
  };
  arc.outerRadius = function(_2) {
    return arguments.length ? (outerRadius = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : outerRadius;
  };
  arc.cornerRadius = function(_2) {
    return arguments.length ? (cornerRadius = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : cornerRadius;
  };
  arc.padRadius = function(_2) {
    return arguments.length ? (padRadius = _2 == null ? null : typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : padRadius;
  };
  arc.startAngle = function(_2) {
    return arguments.length ? (startAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : startAngle;
  };
  arc.endAngle = function(_2) {
    return arguments.length ? (endAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : endAngle;
  };
  arc.padAngle = function(_2) {
    return arguments.length ? (padAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), arc) : padAngle;
  };
  arc.context = function(_2) {
    return arguments.length ? (context = _2 == null ? null : _2, arc) : context;
  };
  return arc;
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x6, y4);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x2(p4) {
  return p4[0];
}
function y2(p4) {
  return p4[1];
}

// node_modules/d3-shape/src/line.js
function line_default() {
  var x6 = x2, y4 = y2, defined = constant_default4(true), context = null, curve = linear_default, output = null;
  function line(data) {
    var i4, n4 = data.length, d3, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path_default());
    for (i4 = 0; i4 <= n4; ++i4) {
      if (!(i4 < n4 && defined(d3 = data[i4], i4, data)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x6(d3, i4, data), +y4(d3, i4, data));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_2) {
    return arguments.length ? (x6 = typeof _2 === "function" ? _2 : constant_default4(+_2), line) : x6;
  };
  line.y = function(_2) {
    return arguments.length ? (y4 = typeof _2 === "function" ? _2 : constant_default4(+_2), line) : y4;
  };
  line.defined = function(_2) {
    return arguments.length ? (defined = typeof _2 === "function" ? _2 : constant_default4(!!_2), line) : defined;
  };
  line.curve = function(_2) {
    return arguments.length ? (curve = _2, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_2) {
    return arguments.length ? (_2 == null ? context = output = null : output = curve(context = _2), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/descending.js
function descending_default2(a5, b4) {
  return b4 < a5 ? -1 : b4 > a5 ? 1 : b4 >= a5 ? 0 : NaN;
}

// node_modules/d3-shape/src/identity.js
function identity_default3(d3) {
  return d3;
}

// node_modules/d3-shape/src/pie.js
function pie_default() {
  var value = identity_default3, sortValues = descending_default2, sort2 = null, startAngle = constant_default4(0), endAngle = constant_default4(tau2), padAngle = constant_default4(0);
  function pie(data) {
    var i4, n4 = data.length, j4, k5, sum3 = 0, index2 = new Array(n4), arcs = new Array(n4), a0 = +startAngle.apply(this, arguments), da = Math.min(tau2, Math.max(-tau2, endAngle.apply(this, arguments) - a0)), a1, p4 = Math.min(Math.abs(da) / n4, padAngle.apply(this, arguments)), pa = p4 * (da < 0 ? -1 : 1), v5;
    for (i4 = 0; i4 < n4; ++i4) {
      if ((v5 = arcs[index2[i4] = i4] = +value(data[i4], i4, data)) > 0) {
        sum3 += v5;
      }
    }
    if (sortValues != null)
      index2.sort(function(i5, j5) {
        return sortValues(arcs[i5], arcs[j5]);
      });
    else if (sort2 != null)
      index2.sort(function(i5, j5) {
        return sort2(data[i5], data[j5]);
      });
    for (i4 = 0, k5 = sum3 ? (da - n4 * pa) / sum3 : 0; i4 < n4; ++i4, a0 = a1) {
      j4 = index2[i4], v5 = arcs[j4], a1 = a0 + (v5 > 0 ? v5 * k5 : 0) + pa, arcs[j4] = {
        data: data[j4],
        index: i4,
        value: v5,
        startAngle: a0,
        endAngle: a1,
        padAngle: p4
      };
    }
    return arcs;
  }
  pie.value = function(_2) {
    return arguments.length ? (value = typeof _2 === "function" ? _2 : constant_default4(+_2), pie) : value;
  };
  pie.sortValues = function(_2) {
    return arguments.length ? (sortValues = _2, sort2 = null, pie) : sortValues;
  };
  pie.sort = function(_2) {
    return arguments.length ? (sort2 = _2, sortValues = null, pie) : sort2;
  };
  pie.startAngle = function(_2) {
    return arguments.length ? (startAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), pie) : startAngle;
  };
  pie.endAngle = function(_2) {
    return arguments.length ? (endAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), pie) : endAngle;
  };
  pie.padAngle = function(_2) {
    return arguments.length ? (padAngle = typeof _2 === "function" ? _2 : constant_default4(+_2), pie) : padAngle;
  };
  return pie;
}

// node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a5, r4) {
    this._curve.point(r4 * Math.sin(a5), r4 * -Math.cos(a5));
  }
};
function curveRadial(curve) {
  function radial2(context) {
    return new Radial(curve(context));
  }
  radial2._curve = curve;
  return radial2;
}

// node_modules/d3-shape/src/array.js
var slice2 = Array.prototype.slice;

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// node_modules/d3-shape/src/symbol/star.js
var kr = Math.sin(pi2 / 10) / Math.sin(7 * pi2 / 10);
var kx = Math.sin(tau2 / 10) * kr;
var ky = -Math.cos(tau2 / 10) * kr;

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = Math.sqrt(3);

// node_modules/d3-shape/src/symbol/wye.js
var s = Math.sqrt(3) / 2;
var k2 = 1 / Math.sqrt(12);
var a = (k2 / 2 + 1) * 3;

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point2(that, x6, y4) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x6) / 6,
    (that._y0 + 4 * that._y1 + y4) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point2(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basis_default3(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x6, this._y2 = y4;
        break;
      case 1:
        this._point = 2;
        this._x3 = x6, this._y3 = y4;
        break;
      case 2:
        this._point = 3;
        this._x4 = x6, this._y4 = y4;
        this._context.moveTo((this._x0 + 4 * this._x1 + x6) / 6, (this._y0 + 4 * this._y1 + y4) / 6);
        break;
      default:
        point2(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisClosed_default3(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x6) / 6, y0 = (this._y0 + 4 * this._y1 + y4) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point2(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y4;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x6 = this._x, y4 = this._y, j4 = x6.length - 1;
    if (j4 > 0) {
      var x0 = x6[0], y0 = y4[0], dx = x6[j4] - x0, dy = y4[j4] - y0, i4 = -1, t7;
      while (++i4 <= j4) {
        t7 = i4 / j4;
        this._basis.point(
          this._beta * x6[i4] + (1 - this._beta) * (x0 + t7 * dx),
          this._beta * y4[i4] + (1 - this._beta) * (y0 + t7 * dy)
        );
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x6, y4) {
    this._x.push(+x6);
    this._y.push(+y4);
  }
};
var bundle_default = function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom(+beta2);
  };
  return bundle;
}(0.85);

// node_modules/d3-shape/src/curve/cardinal.js
function point3(that, x6, y4) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x6),
    that._y2 + that._k * (that._y1 - y4),
    that._x2,
    that._y2
  );
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point3(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
        this._x1 = x6, this._y1 = y4;
        break;
      case 2:
        this._point = 3;
      default:
        point3(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinal_default = function custom2(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom2(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x6, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x6, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x6, this._y5 = y4;
        break;
      default:
        point3(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point3(this, x6, y4);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// node_modules/d3-shape/src/curve/catmullRom.js
function point4(that, x6, y4) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon3) {
    var a5 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n4 = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a5 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n4;
    y1 = (y1 * a5 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n4;
  }
  if (that._l23_a > epsilon3) {
    var b4 = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m4 = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b4 + that._x1 * that._l23_2a - x6 * that._l12_2a) / m4;
    y22 = (y22 * b4 + that._y1 * that._l23_2a - y4 * that._l12_2a) / m4;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        point4(this, x6, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x6, this._y3 = y4;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x6, this._y4 = y4);
        break;
      case 2:
        this._point = 3;
        this._x5 = x6, this._y5 = y4;
        break;
      default:
        point4(this, x6, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    if (this._point) {
      var x23 = this._x2 - x6, y23 = this._y2 - y4;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        point4(this, x6, y4);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x6;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    if (this._point)
      this._context.lineTo(x6, y4);
    else
      this._point = 1, this._context.moveTo(x6, y4);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x6) {
  return x6 < 0 ? -1 : 1;
}
function slope3(that, x22, y22) {
  var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p4 = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p4)) || 0;
}
function slope2(that, t7) {
  var h3 = that._x1 - that._x0;
  return h3 ? (3 * (that._y1 - that._y0) / h3 - t7) / 2 : t7;
}
function point5(that, t06, t16) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t06, x1 - dx, y1 - dx * t16, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point5(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    var t16 = NaN;
    x6 = +x6, y4 = +y4;
    if (x6 === this._x1 && y4 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point5(this, slope2(this, t16 = slope3(this, x6, y4)), t16);
        break;
      default:
        point5(this, this._t0, t16 = slope3(this, x6, y4));
        break;
    }
    this._x0 = this._x1, this._x1 = x6;
    this._y0 = this._y1, this._y1 = y4;
    this._t0 = t16;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x6, y4) {
  MonotoneX.prototype.point.call(this, y4, x6);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x6, y4) {
    this._context.moveTo(y4, x6);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x6, y4) {
    this._context.lineTo(y4, x6);
  },
  bezierCurveTo: function(x1, y1, x22, y22, x6, y4) {
    this._context.bezierCurveTo(y1, x1, y22, x22, y4, x6);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x6 = this._x, y4 = this._y, n4 = x6.length;
    if (n4) {
      this._line ? this._context.lineTo(x6[0], y4[0]) : this._context.moveTo(x6[0], y4[0]);
      if (n4 === 2) {
        this._context.lineTo(x6[1], y4[1]);
      } else {
        var px = controlPoints(x6), py = controlPoints(y4);
        for (var i0 = 0, i1 = 1; i1 < n4; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x6[i1], y4[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n4 === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x6, y4) {
    this._x.push(+x6);
    this._y.push(+y4);
  }
};
function controlPoints(x6) {
  var i4, n4 = x6.length - 1, m4, a5 = new Array(n4), b4 = new Array(n4), r4 = new Array(n4);
  a5[0] = 0, b4[0] = 2, r4[0] = x6[0] + 2 * x6[1];
  for (i4 = 1; i4 < n4 - 1; ++i4)
    a5[i4] = 1, b4[i4] = 4, r4[i4] = 4 * x6[i4] + 2 * x6[i4 + 1];
  a5[n4 - 1] = 2, b4[n4 - 1] = 7, r4[n4 - 1] = 8 * x6[n4 - 1] + x6[n4];
  for (i4 = 1; i4 < n4; ++i4)
    m4 = a5[i4] / b4[i4 - 1], b4[i4] -= m4, r4[i4] -= m4 * r4[i4 - 1];
  a5[n4 - 1] = r4[n4 - 1] / b4[n4 - 1];
  for (i4 = n4 - 2; i4 >= 0; --i4)
    a5[i4] = (r4[i4] - a5[i4 + 1]) / b4[i4];
  b4[n4 - 1] = (x6[n4] + a5[n4 - 1]) / 2;
  for (i4 = 0; i4 < n4 - 1; ++i4)
    b4[i4] = 2 * x6[i4 + 1] - a5[i4 + 1];
  return [a5, b4];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t7) {
  this._context = context;
  this._t = t7;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x6, y4) {
    x6 = +x6, y4 = +y4;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x6, y4) : this._context.moveTo(x6, y4);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y4);
          this._context.lineTo(x6, y4);
        } else {
          var x1 = this._x * (1 - this._t) + x6 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y4);
        }
        break;
      }
    }
    this._x = x6, this._y = y4;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n4 = series.length) > 1))
    return;
  for (var i4 = 1, j4, s0, s1 = series[order[0]], n4, m4 = s1.length; i4 < n4; ++i4) {
    s0 = s1, s1 = series[order[i4]];
    for (j4 = 0; j4 < m4; ++j4) {
      s1[j4][1] += s1[j4][0] = isNaN(s0[j4][1]) ? s0[j4][0] : s0[j4][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n4 = series.length, o4 = new Array(n4);
  while (--n4 >= 0)
    o4[n4] = n4;
  return o4;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n4 = series.length) > 0))
    return;
  for (var i4, n4, j4 = 0, m4 = series[0].length, y4; j4 < m4; ++j4) {
    for (y4 = i4 = 0; i4 < n4; ++i4)
      y4 += series[i4][j4][1] || 0;
    if (y4)
      for (i4 = 0; i4 < n4; ++i4)
        series[i4][j4][1] /= y4;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/diverging.js
function diverging_default(series, order) {
  if (!((n4 = series.length) > 0))
    return;
  for (var i4, j4 = 0, d3, dy, yp, yn, n4, m4 = series[order[0]].length; j4 < m4; ++j4) {
    for (yp = yn = 0, i4 = 0; i4 < n4; ++i4) {
      if ((dy = (d3 = series[order[i4]][j4])[1] - d3[0]) > 0) {
        d3[0] = yp, d3[1] = yp += dy;
      } else if (dy < 0) {
        d3[1] = yn, d3[0] = yn += dy;
      } else {
        d3[0] = 0, d3[1] = dy;
      }
    }
  }
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n4 = series.length) > 0))
    return;
  for (var j4 = 0, s0 = series[order[0]], n4, m4 = s0.length; j4 < m4; ++j4) {
    for (var i4 = 0, y4 = 0; i4 < n4; ++i4)
      y4 += series[i4][j4][1] || 0;
    s0[j4][1] += s0[j4][0] = -y4 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n4 = series.length) > 0) || !((m4 = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y4 = 0, j4 = 1, s0, m4, n4; j4 < m4; ++j4) {
    for (var i4 = 0, s1 = 0, s22 = 0; i4 < n4; ++i4) {
      var si = series[order[i4]], sij0 = si[j4][1] || 0, sij1 = si[j4 - 1][1] || 0, s32 = (sij0 - sij1) / 2;
      for (var k5 = 0; k5 < i4; ++k5) {
        var sk = series[order[k5]], skj0 = sk[j4][1] || 0, skj1 = sk[j4 - 1][1] || 0;
        s32 += skj0 - skj1;
      }
      s1 += sij0, s22 += s32 * sij0;
    }
    s0[j4 - 1][1] += s0[j4 - 1][0] = y4;
    if (s1)
      y4 -= s22 / s1;
  }
  s0[j4 - 1][1] += s0[j4 - 1][0] = y4;
  none_default(series, order);
}

// node_modules/d3-shape/src/order/appearance.js
function appearance_default(series) {
  var peaks = series.map(peak);
  return none_default2(series).sort(function(a5, b4) {
    return peaks[a5] - peaks[b4];
  });
}
function peak(series) {
  var i4 = -1, j4 = 0, n4 = series.length, vi2, vj = -Infinity;
  while (++i4 < n4)
    if ((vi2 = +series[i4][1]) > vj)
      vj = vi2, j4 = i4;
  return j4;
}

// node_modules/d3-shape/src/order/ascending.js
function ascending_default2(series) {
  var sums = series.map(sum2);
  return none_default2(series).sort(function(a5, b4) {
    return sums[a5] - sums[b4];
  });
}
function sum2(series) {
  var s4 = 0, i4 = -1, n4 = series.length, v5;
  while (++i4 < n4)
    if (v5 = +series[i4][1])
      s4 += v5;
  return s4;
}

// node_modules/d3-shape/src/order/descending.js
function descending_default3(series) {
  return ascending_default2(series).reverse();
}

// node_modules/d3-shape/src/order/insideOut.js
function insideOut_default(series) {
  var n4 = series.length, i4, j4, sums = series.map(sum2), order = appearance_default(series), top = 0, bottom = 0, tops = [], bottoms = [];
  for (i4 = 0; i4 < n4; ++i4) {
    j4 = order[i4];
    if (top < bottom) {
      top += sums[j4];
      tops.push(j4);
    } else {
      bottom += sums[j4];
      bottoms.push(j4);
    }
  }
  return bottoms.reverse().concat(tops);
}

// node_modules/d3-shape/src/order/reverse.js
function reverse_default(series) {
  return none_default2(series).reverse();
}

// node_modules/@nivo/core/dist/nivo-core.es.js
var import_isPlainObject = __toESM(require_isPlainObject());
var import_pick = __toESM(require_pick());
var import_isEqual = __toESM(require_isEqual());
function Sr() {
  return Sr = Object.assign ? Object.assign.bind() : function(e7) {
    for (var r4 = 1; r4 < arguments.length; r4++) {
      var t7 = arguments[r4];
      for (var i4 in t7)
        Object.prototype.hasOwnProperty.call(t7, i4) && (e7[i4] = t7[i4]);
    }
    return e7;
  }, Sr.apply(this, arguments);
}
function jr(e7, r4) {
  if (null == e7)
    return {};
  var t7, i4, n4 = {}, o4 = Object.keys(e7);
  for (i4 = 0; i4 < o4.length; i4++)
    t7 = o4[i4], r4.indexOf(t7) >= 0 || (n4[t7] = e7[t7]);
  return n4;
}
var Br = { fill: import_prop_types.default.string, fontSize: import_prop_types.default.number, fontFamily: import_prop_types.default.string };
var Gr = import_prop_types.default.shape({ domain: import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired }).isRequired, ticks: import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired, text: import_prop_types.default.shape(Sr({}, Br)).isRequired }).isRequired, legend: import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired }).isRequired });
var Lr = import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired });
var Ir = import_prop_types.default.shape({ hidden: import_prop_types.default.shape({ symbol: import_prop_types.default.shape({ fill: import_prop_types.default.string.isRequired, opacity: import_prop_types.default.number }).isRequired, text: import_prop_types.default.shape(Sr({}, Br, { opacity: import_prop_types.default.number })).isRequired }).isRequired, text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Dr = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Yr = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Ar = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br)).isRequired });
var Fr = import_prop_types.default.shape({ line: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, strokeDasharray: import_prop_types.default.string }).isRequired });
var Er = import_prop_types.default.shape({ text: import_prop_types.default.shape(Sr({}, Br, { outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired })).isRequired, link: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired, outline: import_prop_types.default.shape({ stroke: import_prop_types.default.string.isRequired, strokeWidth: import_prop_types.default.number.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired, symbol: import_prop_types.default.shape({ fill: import_prop_types.default.string.isRequired, outlineWidth: import_prop_types.default.number.isRequired, outlineColor: import_prop_types.default.string.isRequired }).isRequired });
var Ur = import_prop_types.default.shape({ background: import_prop_types.default.string.isRequired, fontFamily: import_prop_types.default.string.isRequired, fontSize: import_prop_types.default.number.isRequired, textColor: import_prop_types.default.string.isRequired, axis: Gr.isRequired, grid: Lr.isRequired, legends: Ir.isRequired, labels: Dr.isRequired, dots: Yr.isRequired, markers: Ar, crosshair: Fr.isRequired, annotations: Er.isRequired });
var Xr = { background: "transparent", text: { fontFamily: "sans-serif", fontSize: 11, fill: "#333333", outlineWidth: 0, outlineColor: "transparent" }, axis: { domain: { line: { stroke: "transparent", strokeWidth: 1 } }, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: {} }, legend: { text: { fontSize: 12 } } }, grid: { line: { stroke: "#dddddd", strokeWidth: 1 } }, legends: { hidden: { symbol: { fill: "#333333", opacity: 0.6 }, text: { fill: "#333333", opacity: 0.6 } }, text: {}, ticks: { line: { stroke: "#777777", strokeWidth: 1 }, text: { fontSize: 10 } }, title: { text: {} } }, labels: { text: {} }, markers: { lineColor: "#000000", lineStrokeWidth: 1, text: {} }, dots: { text: {} }, tooltip: { container: { background: "white", color: "inherit", fontSize: "inherit", borderRadius: "2px", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", padding: "5px 9px" }, basic: { whiteSpace: "pre", display: "flex", alignItems: "center" }, chip: { marginRight: 7 }, table: {}, tableCell: { padding: "3px 5px" }, tableCellValue: { fontWeight: "bold" } }, crosshair: { line: { stroke: "#000000", strokeWidth: 1, strokeOpacity: 0.75, strokeDasharray: "6 6" } }, annotations: { text: { fontSize: 13, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, link: { stroke: "#000000", strokeWidth: 1, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, outline: { fill: "none", stroke: "#000000", strokeWidth: 2, outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 }, symbol: { fill: "#000000", outlineWidth: 2, outlineColor: "#ffffff", outlineOpacity: 1 } } };
var Hr = ["axis.ticks.text", "axis.legend.text", "legends.title.text", "legends.text", "legends.ticks.text", "legends.title.text", "labels.text", "dots.text", "markers.text", "annotations.text"];
var Kr = function(e7, r4) {
  var t7 = (0, import_merge2.default)({}, e7, r4);
  return Hr.forEach(function(e8) {
    void 0 === (0, import_get.default)(t7, e8 + ".fontFamily") && (0, import_set2.default)(t7, e8 + ".fontFamily", t7.text.fontFamily), void 0 === (0, import_get.default)(t7, e8 + ".fontSize") && (0, import_set2.default)(t7, e8 + ".fontSize", t7.text.fontSize), void 0 === (0, import_get.default)(t7, e8 + ".fill") && (0, import_set2.default)(t7, e8 + ".fill", t7.text.fill), void 0 === (0, import_get.default)(t7, e8 + ".outlineWidth") && (0, import_set2.default)(t7, e8 + ".outlineWidth", t7.text.outlineWidth), void 0 === (0, import_get.default)(t7, e8 + ".outlineColor") && (0, import_set2.default)(t7, e8 + ".outlineColor", t7.text.outlineColor);
  }), t7;
};
var Nr = (0, import_react16.createContext)();
var Vr = function(e7) {
  var t7 = e7.children, i4 = e7.animate, n4 = e7.config, o4 = (0, import_react16.useMemo)(function() {
    var e8 = (0, import_isString.default)(n4) ? config[n4] : n4;
    return { animate: i4, config: e8 };
  }, [i4, n4]);
  return (0, import_jsx_runtime2.jsx)(Nr.Provider, { value: o4, children: t7 });
};
var Jr = { animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(Object.keys(config)), import_prop_types.default.shape({ mass: import_prop_types.default.number, tension: import_prop_types.default.number, friction: import_prop_types.default.number, clamp: import_prop_types.default.bool, precision: import_prop_types.default.number, velocity: import_prop_types.default.number, duration: import_prop_types.default.number, easing: import_prop_types.default.func })]) };
Vr.propTypes = { children: import_prop_types.default.node.isRequired, animate: Jr.animate, config: Jr.motionConfig };
var Qr = { animate: true, config: "default" };
Vr.defaultProps = Qr;
var Zr = function() {
  return (0, import_react16.useContext)(Nr);
};
var et = { nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"], BrBG: (0, import_last.default)(scheme), PRGn: (0, import_last.default)(scheme2), PiYG: (0, import_last.default)(scheme3), PuOr: (0, import_last.default)(scheme4), RdBu: (0, import_last.default)(scheme5), RdGy: (0, import_last.default)(scheme6), RdYlBu: (0, import_last.default)(scheme7), RdYlGn: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), BuGn: (0, import_last.default)(scheme10), BuPu: (0, import_last.default)(scheme11), GnBu: (0, import_last.default)(scheme12), OrRd: (0, import_last.default)(scheme13), PuBuGn: (0, import_last.default)(scheme14), PuBu: (0, import_last.default)(scheme15), PuRd: (0, import_last.default)(scheme16), RdPu: (0, import_last.default)(scheme17), YlGnBu: (0, import_last.default)(scheme18), YlGn: (0, import_last.default)(scheme19), YlOrBr: (0, import_last.default)(scheme20), YlOrRd: (0, import_last.default)(scheme21) };
var rt = Object.keys(et);
var it = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default, accent: Accent_default, dark2: Dark2_default, paired: Paired_default, pastel1: Pastel1_default, pastel2: Pastel2_default, set1: Set1_default, set2: Set2_default, set3: Set3_default, brown_blueGreen: (0, import_last.default)(scheme), purpleRed_green: (0, import_last.default)(scheme2), pink_yellowGreen: (0, import_last.default)(scheme3), purple_orange: (0, import_last.default)(scheme4), red_blue: (0, import_last.default)(scheme5), red_grey: (0, import_last.default)(scheme6), red_yellow_blue: (0, import_last.default)(scheme7), red_yellow_green: (0, import_last.default)(scheme8), spectral: (0, import_last.default)(scheme9), blues: (0, import_last.default)(scheme22), greens: (0, import_last.default)(scheme23), greys: (0, import_last.default)(scheme24), oranges: (0, import_last.default)(scheme27), purples: (0, import_last.default)(scheme25), reds: (0, import_last.default)(scheme26), blue_green: (0, import_last.default)(scheme10), blue_purple: (0, import_last.default)(scheme11), green_blue: (0, import_last.default)(scheme12), orange_red: (0, import_last.default)(scheme13), purple_blue_green: (0, import_last.default)(scheme14), purple_blue: (0, import_last.default)(scheme15), purple_red: (0, import_last.default)(scheme16), red_purple: (0, import_last.default)(scheme17), yellow_green_blue: (0, import_last.default)(scheme18), yellow_green: (0, import_last.default)(scheme19), yellow_orange_brown: (0, import_last.default)(scheme20), yellow_orange_red: (0, import_last.default)(scheme21) };
var dt = import_prop_types.default.oneOfType([import_prop_types.default.oneOf(rt), import_prop_types.default.func, import_prop_types.default.arrayOf(import_prop_types.default.string)]);
var ut = { basis: basis_default3, basisClosed: basisClosed_default3, basisOpen: basisOpen_default, bundle: bundle_default, cardinal: cardinal_default, cardinalClosed: cardinalClosed_default, cardinalOpen: cardinalOpen_default, catmullRom: catmullRom_default, catmullRomClosed: catmullRomClosed_default, catmullRomOpen: catmullRomOpen_default, linear: linear_default, linearClosed: linearClosed_default, monotoneX, monotoneY, natural: natural_default, step: step_default, stepAfter, stepBefore };
var ct = Object.keys(ut);
var ft = import_prop_types.default.oneOf(ct);
var pt = ct.filter(function(e7) {
  return e7.endsWith("Closed");
});
var ht = (0, import_without.default)(ct, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var gt = (0, import_without.default)(ct, "bundle", "basisClosed", "basisOpen", "cardinalClosed", "cardinalOpen", "catmullRomClosed", "catmullRomOpen", "linearClosed");
var bt = import_prop_types.default.oneOf(gt);
var yt = { defs: import_prop_types.default.arrayOf(import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired })).isRequired, fill: import_prop_types.default.arrayOf(import_prop_types.default.shape({ id: import_prop_types.default.string.isRequired, match: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["*"]), import_prop_types.default.object, import_prop_types.default.func]).isRequired })).isRequired };
var vt = { ascending: ascending_default2, descending: descending_default3, insideOut: insideOut_default, none: none_default2, reverse: reverse_default };
var Rt = Object.keys(vt);
var qt = import_prop_types.default.oneOf(Rt);
var _t = { expand: expand_default, diverging: diverging_default, none: none_default, silhouette: silhouette_default, wiggle: wiggle_default };
var wt = Object.keys(_t);
var xt = import_prop_types.default.oneOf(wt);
var Wt = import_prop_types.default.shape({ top: import_prop_types.default.number, right: import_prop_types.default.number, bottom: import_prop_types.default.number, left: import_prop_types.default.number }).isRequired;
var Ct = ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
var zt = import_prop_types.default.oneOf(Ct);
var Mt = ordinal(Set3_default);
var jt = { top: 0, right: 0, bottom: 0, left: 0 };
var Bt = function(e7, t7, i4) {
  return void 0 === i4 && (i4 = {}), (0, import_react16.useMemo)(function() {
    var r4 = Sr({}, jt, i4);
    return { margin: r4, innerWidth: e7 - r4.left - r4.right, innerHeight: t7 - r4.top - r4.bottom, outerWidth: e7, outerHeight: t7 };
  }, [e7, t7, i4.top, i4.right, i4.bottom, i4.left]);
};
var Gt = function() {
  var e7 = (0, import_react16.useRef)(null), r4 = (0, import_react16.useState)({ left: 0, top: 0, width: 0, height: 0 }), t7 = r4[0], a5 = r4[1], l3 = (0, import_react16.useState)(function() {
    return "undefined" == typeof ResizeObserver ? null : new ResizeObserver(function(e8) {
      var r5 = e8[0];
      return a5(r5.contentRect);
    });
  })[0];
  return (0, import_react16.useEffect)(function() {
    return e7.current && null !== l3 && l3.observe(e7.current), function() {
      null !== l3 && l3.disconnect();
    };
  }, []), [e7, t7];
};
var Lt = function(e7) {
  return (0, import_react16.useMemo)(function() {
    return Kr(Xr, e7);
  }, [e7]);
};
var It = function(e7) {
  return "function" == typeof e7 ? e7 : "string" == typeof e7 ? 0 === e7.indexOf("time:") ? timeFormat(e7.slice("5")) : format(e7) : function(e8) {
    return "" + e8;
  };
};
var Dt = function(e7) {
  return (0, import_react16.useMemo)(function() {
    return It(e7);
  }, [e7]);
};
var Yt = (0, import_react16.createContext)();
var At = {};
var Ft = function(e7) {
  var r4 = e7.theme, t7 = void 0 === r4 ? At : r4, i4 = e7.children, n4 = Lt(t7);
  return (0, import_jsx_runtime2.jsx)(Yt.Provider, { value: n4, children: i4 });
};
Ft.propTypes = { children: import_prop_types.default.node.isRequired, theme: import_prop_types.default.object };
var Et = function() {
  return (0, import_react16.useContext)(Yt);
};
var Ut = function(e7) {
  var r4 = e7.children, t7 = e7.condition, i4 = e7.wrapper;
  return t7 ? (0, import_react16.cloneElement)(i4, {}, r4) : r4;
};
Ut.propTypes = { children: import_prop_types.default.node.isRequired, condition: import_prop_types.default.bool.isRequired, wrapper: import_prop_types.default.element.isRequired };
var Xt = { position: "relative" };
var Ht = function(e7) {
  var r4 = e7.children, t7 = e7.theme, n4 = e7.renderWrapper, o4 = void 0 === n4 || n4, a5 = e7.isInteractive, l3 = void 0 === a5 || a5, s4 = e7.animate, d3 = e7.motionConfig, u3 = (0, import_react16.useRef)(null);
  return (0, import_jsx_runtime2.jsx)(Ft, { theme: t7, children: (0, import_jsx_runtime2.jsx)(Vr, { animate: s4, config: d3, children: (0, import_jsx_runtime2.jsx)(M, { container: u3, children: (0, import_jsx_runtime2.jsxs)(Ut, { condition: o4, wrapper: (0, import_jsx_runtime2.jsx)("div", { style: Xt, ref: u3 }), children: [r4, l3 && (0, import_jsx_runtime2.jsx)(F, {})] }) }) }) });
};
Ht.propTypes = { children: import_prop_types.default.element.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object, animate: import_prop_types.default.bool, motionConfig: import_prop_types.default.string };
var Kt = function() {
};
var Nt = { position: "relative" };
var Vt = function(e7) {
  var t7 = e7.children, n4 = e7.theme, o4 = e7.isInteractive, a5 = void 0 === o4 || o4, s4 = e7.renderWrapper, d3 = void 0 === s4 || s4, u3 = e7.animate, c11 = e7.motionConfig, f3 = (0, import_react16.useRef)(null), m4 = V(f3), y4 = m4.actions, v5 = m4.state, R = (0, import_react16.useCallback)(function(e8, r4) {
    return y4.showTooltipFromEvent(e8, r4);
  }, [y4.showTooltipFromEvent]), q3 = (0, import_react16.useMemo)(function() {
    return { showTooltip: a5 ? R : Kt, hideTooltip: a5 ? y4.hideTooltip : Kt };
  }, [y4.hideTooltip, a5, R]);
  return (0, import_jsx_runtime2.jsx)(Ft, { theme: n4, children: (0, import_jsx_runtime2.jsx)(Vr, { animate: u3, config: c11, children: (0, import_jsx_runtime2.jsx)(j.Provider, { value: y4, children: (0, import_jsx_runtime2.jsx)(O.Provider, { value: v5, children: (0, import_jsx_runtime2.jsxs)(Ut, { condition: d3, wrapper: (0, import_jsx_runtime2.jsx)("div", { style: Nt, ref: f3 }), children: [t7(q3), a5 && (0, import_jsx_runtime2.jsx)(F, {})] }) }) }) }) });
};
Vt.propTypes = { children: import_prop_types.default.func.isRequired, isInteractive: import_prop_types.default.bool, renderWrapper: import_prop_types.default.bool, theme: import_prop_types.default.object.isRequired, animate: import_prop_types.default.bool.isRequired, motionConfig: import_prop_types.default.string };
var Jt = function(e7) {
  var r4 = e7.children, t7 = Gt(), i4 = t7[0], n4 = t7[1], o4 = n4.width > 0 && n4.height > 0;
  return (0, import_jsx_runtime2.jsx)("div", { ref: i4, style: { width: "100%", height: "100%" }, children: o4 && r4({ width: n4.width, height: n4.height }) });
};
Jt.propTypes = { children: import_prop_types.default.func.isRequired };
var Qt = ["id", "colors"];
var Zt = function(e7) {
  var r4 = e7.id, t7 = e7.colors, i4 = jr(e7, Qt);
  return (0, import_jsx_runtime2.jsx)("linearGradient", Sr({ id: r4, x1: 0, x2: 0, y1: 0, y2: 1 }, i4, { children: t7.map(function(e8) {
    var r5 = e8.offset, t8 = e8.color, i5 = e8.opacity;
    return (0, import_jsx_runtime2.jsx)("stop", { offset: r5 + "%", stopColor: t8, stopOpacity: void 0 !== i5 ? i5 : 1 }, r5);
  }) }));
};
Zt.propTypes = { id: import_prop_types.default.string.isRequired, colors: import_prop_types.default.arrayOf(import_prop_types.default.shape({ offset: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, opacity: import_prop_types.default.number })).isRequired, gradientTransform: import_prop_types.default.string };
var ei = { linearGradient: Zt };
var ri = (0, import_react16.memo)(function(e7) {
  var r4 = e7.id, t7 = e7.background, i4 = e7.color, n4 = e7.size, o4 = e7.padding, a5 = e7.stagger, l3 = n4 + o4, s4 = n4 / 2, d3 = o4 / 2;
  return true === a5 && (l3 = 2 * n4 + 2 * o4), (0, import_jsx_runtime2.jsxs)("pattern", { id: r4, width: l3, height: l3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime2.jsx)("rect", { width: l3, height: l3, fill: t7 }), (0, import_jsx_runtime2.jsx)("circle", { cx: d3 + s4, cy: d3 + s4, r: s4, fill: i4 }), a5 && (0, import_jsx_runtime2.jsx)("circle", { cx: 1.5 * o4 + n4 + s4, cy: 1.5 * o4 + n4 + s4, r: s4, fill: i4 })] });
});
ri.displayName = "PatternDots", ri.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired }, ri.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var ii = 2 * Math.PI;
var ni = function(e7) {
  return e7 * Math.PI / 180;
};
var oi = function(e7) {
  return 180 * e7 / Math.PI;
};
var ai = function(e7) {
  return e7.startAngle + (e7.endAngle - e7.startAngle) / 2;
};
var li = function(e7, r4) {
  return { x: Math.cos(e7) * r4, y: Math.sin(e7) * r4 };
};
var fi = { svg: { align: { left: "start", center: "middle", right: "end", start: "start", middle: "middle", end: "end" }, baseline: { top: "text-before-edge", center: "central", bottom: "alphabetic" } }, canvas: { align: { left: "left", center: "center", right: "right", start: "left", middle: "center", end: "right" }, baseline: { top: "top", center: "middle", bottom: "bottom" } } };
var hi = (0, import_react16.memo)(function(e7) {
  var r4 = e7.id, t7 = e7.spacing, i4 = e7.rotation, n4 = e7.background, o4 = e7.color, a5 = e7.lineWidth, l3 = Math.round(i4) % 360, s4 = Math.abs(t7);
  l3 > 180 ? l3 -= 360 : l3 > 90 ? l3 -= 180 : l3 < -180 ? l3 += 360 : l3 < -90 && (l3 += 180);
  var d3, u3 = s4, c11 = s4;
  return 0 === l3 ? d3 = "\n                M 0 0 L " + u3 + " 0\n                M 0 " + c11 + " L " + u3 + " " + c11 + "\n            " : 90 === l3 ? d3 = "\n                M 0 0 L 0 " + c11 + "\n                M " + u3 + " 0 L " + u3 + " " + c11 + "\n            " : (u3 = Math.abs(s4 / Math.sin(ni(l3))), c11 = s4 / Math.sin(ni(90 - l3)), d3 = l3 > 0 ? "\n                    M 0 " + -c11 + " L " + 2 * u3 + " " + c11 + "\n                    M " + -u3 + " " + -c11 + " L " + u3 + " " + c11 + "\n                    M " + -u3 + " 0 L " + u3 + " " + 2 * c11 + "\n                " : "\n                    M " + -u3 + " " + c11 + " L " + u3 + " " + -c11 + "\n                    M " + -u3 + " " + 2 * c11 + " L " + 2 * u3 + " " + -c11 + "\n                    M 0 " + 2 * c11 + " L " + 2 * u3 + " 0\n                "), (0, import_jsx_runtime2.jsxs)("pattern", { id: r4, width: u3, height: c11, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime2.jsx)("rect", { width: u3, height: c11, fill: n4, stroke: "rgba(255, 0, 0, 0.1)", strokeWidth: 0 }), (0, import_jsx_runtime2.jsx)("path", { d: d3, strokeWidth: a5, stroke: o4, strokeLinecap: "square" })] });
});
hi.displayName = "PatternLines", hi.propTypes = { id: import_prop_types.default.string.isRequired, spacing: import_prop_types.default.number.isRequired, rotation: import_prop_types.default.number.isRequired, background: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, lineWidth: import_prop_types.default.number.isRequired }, hi.defaultProps = { spacing: 5, rotation: 0, color: "#000000", background: "#ffffff", lineWidth: 2 };
var bi = (0, import_react16.memo)(function(e7) {
  var r4 = e7.id, t7 = e7.background, i4 = e7.color, n4 = e7.size, o4 = e7.padding, a5 = e7.stagger, l3 = n4 + o4, s4 = o4 / 2;
  return true === a5 && (l3 = 2 * n4 + 2 * o4), (0, import_jsx_runtime2.jsxs)("pattern", { id: r4, width: l3, height: l3, patternUnits: "userSpaceOnUse", children: [(0, import_jsx_runtime2.jsx)("rect", { width: l3, height: l3, fill: t7 }), (0, import_jsx_runtime2.jsx)("rect", { x: s4, y: s4, width: n4, height: n4, fill: i4 }), a5 && (0, import_jsx_runtime2.jsx)("rect", { x: 1.5 * o4 + n4, y: 1.5 * o4 + n4, width: n4, height: n4, fill: i4 })] });
});
bi.displayName = "PatternSquares", bi.propTypes = { id: import_prop_types.default.string.isRequired, color: import_prop_types.default.string.isRequired, background: import_prop_types.default.string.isRequired, size: import_prop_types.default.number.isRequired, padding: import_prop_types.default.number.isRequired, stagger: import_prop_types.default.bool.isRequired }, bi.defaultProps = { color: "#000000", background: "#ffffff", size: 4, padding: 4, stagger: false };
var yi = { patternDots: ri, patternLines: hi, patternSquares: bi };
var vi = ["type"];
var Ri = Sr({}, ei, yi);
var qi = function(e7) {
  var r4 = e7.defs;
  return !r4 || r4.length < 1 ? null : (0, import_jsx_runtime2.jsx)("defs", { "aria-hidden": true, children: r4.map(function(e8) {
    var r5 = e8.type, t7 = jr(e8, vi);
    return Ri[r5] ? (0, import_react16.createElement)(Ri[r5], Sr({ key: t7.id }, t7)) : null;
  }) });
};
qi.propTypes = { defs: import_prop_types.default.arrayOf(import_prop_types.default.shape({ type: import_prop_types.default.oneOf(Object.keys(Ri)).isRequired, id: import_prop_types.default.string.isRequired })) };
var ki = (0, import_react16.memo)(qi);
var _i = function(e7) {
  var r4 = e7.width, t7 = e7.height, i4 = e7.margin, n4 = e7.defs, o4 = e7.children, a5 = e7.role, l3 = e7.ariaLabel, s4 = e7.ariaLabelledBy, d3 = e7.ariaDescribedBy, u3 = e7.isFocusable, c11 = Et();
  return (0, import_jsx_runtime2.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: r4, height: t7, role: a5, "aria-label": l3, "aria-labelledby": s4, "aria-describedby": d3, focusable: u3, tabIndex: u3 ? 0 : void 0, children: [(0, import_jsx_runtime2.jsx)(ki, { defs: n4 }), (0, import_jsx_runtime2.jsx)("rect", { width: r4, height: t7, fill: c11.background }), (0, import_jsx_runtime2.jsx)("g", { transform: "translate(" + i4.left + "," + i4.top + ")", children: o4 })] });
};
_i.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, margin: import_prop_types.default.shape({ top: import_prop_types.default.number.isRequired, left: import_prop_types.default.number.isRequired }).isRequired, defs: import_prop_types.default.array, children: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.node), import_prop_types.default.node]).isRequired, role: import_prop_types.default.string, isFocusable: import_prop_types.default.bool, ariaLabel: import_prop_types.default.string, ariaLabelledBy: import_prop_types.default.string, ariaDescribedBy: import_prop_types.default.string };
var wi = function(e7) {
  var r4 = e7.size, t7 = e7.color, i4 = e7.borderWidth, n4 = e7.borderColor;
  return (0, import_jsx_runtime2.jsx)("circle", { r: r4 / 2, fill: t7, stroke: n4, strokeWidth: i4, style: { pointerEvents: "none" } });
};
wi.propTypes = { size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired };
var xi = (0, import_react16.memo)(wi);
var Oi = function(e7) {
  var r4 = e7.x, t7 = e7.y, i4 = e7.symbol, n4 = void 0 === i4 ? xi : i4, o4 = e7.size, a5 = e7.datum, l3 = e7.color, s4 = e7.borderWidth, u3 = e7.borderColor, c11 = e7.label, f3 = e7.labelTextAnchor, p4 = void 0 === f3 ? "middle" : f3, h3 = e7.labelYOffset, g3 = void 0 === h3 ? -12 : h3, b4 = Et(), m4 = Zr(), y4 = m4.animate, v5 = m4.config, R = useSpring({ transform: "translate(" + r4 + ", " + t7 + ")", config: v5, immediate: !y4 });
  return (0, import_jsx_runtime2.jsxs)(animated.g, { transform: R.transform, style: { pointerEvents: "none" }, children: [(0, import_react16.createElement)(n4, { size: o4, color: l3, datum: a5, borderWidth: s4, borderColor: u3 }), c11 && (0, import_jsx_runtime2.jsx)("text", { textAnchor: p4, y: g3, style: b4.dots.text, children: c11 })] });
};
Oi.propTypes = { x: import_prop_types.default.number.isRequired, y: import_prop_types.default.number.isRequired, datum: import_prop_types.default.object.isRequired, size: import_prop_types.default.number.isRequired, color: import_prop_types.default.string.isRequired, borderWidth: import_prop_types.default.number.isRequired, borderColor: import_prop_types.default.string.isRequired, symbol: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]), label: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]), labelTextAnchor: import_prop_types.default.oneOf(["start", "middle", "end"]), labelYOffset: import_prop_types.default.number };
var Wi = (0, import_react16.memo)(Oi);
var Ci = function(e7) {
  var r4 = e7.width, t7 = e7.height, i4 = e7.axis, n4 = e7.scale, o4 = e7.value, a5 = e7.lineStyle, l3 = e7.textStyle, s4 = e7.legend, d3 = e7.legendPosition, u3 = e7.legendOffsetX, c11 = e7.legendOffsetY, f3 = e7.legendOrientation, p4 = Et(), h3 = 0, g3 = 0, b4 = 0, m4 = 0;
  "y" === i4 ? (b4 = n4(o4), g3 = r4) : (h3 = n4(o4), m4 = t7);
  var y4 = null;
  if (s4) {
    var v5 = function(e8) {
      var r5 = e8.axis, t8 = e8.width, i5 = e8.height, n5 = e8.position, o5 = e8.offsetX, a6 = e8.offsetY, l4 = e8.orientation, s5 = 0, d4 = 0, u4 = "vertical" === l4 ? -90 : 0, c12 = "start";
      if ("x" === r5)
        switch (n5) {
          case "top-left":
            s5 = -o5, d4 = a6, c12 = "end";
            break;
          case "top":
            d4 = -a6, c12 = "horizontal" === l4 ? "middle" : "start";
            break;
          case "top-right":
            s5 = o5, d4 = a6, c12 = "horizontal" === l4 ? "start" : "end";
            break;
          case "right":
            s5 = o5, d4 = i5 / 2, c12 = "horizontal" === l4 ? "start" : "middle";
            break;
          case "bottom-right":
            s5 = o5, d4 = i5 - a6, c12 = "start";
            break;
          case "bottom":
            d4 = i5 + a6, c12 = "horizontal" === l4 ? "middle" : "end";
            break;
          case "bottom-left":
            d4 = i5 - a6, s5 = -o5, c12 = "horizontal" === l4 ? "end" : "start";
            break;
          case "left":
            s5 = -o5, d4 = i5 / 2, c12 = "horizontal" === l4 ? "end" : "middle";
        }
      else
        switch (n5) {
          case "top-left":
            s5 = o5, d4 = -a6, c12 = "start";
            break;
          case "top":
            s5 = t8 / 2, d4 = -a6, c12 = "horizontal" === l4 ? "middle" : "start";
            break;
          case "top-right":
            s5 = t8 - o5, d4 = -a6, c12 = "horizontal" === l4 ? "end" : "start";
            break;
          case "right":
            s5 = t8 + o5, c12 = "horizontal" === l4 ? "start" : "middle";
            break;
          case "bottom-right":
            s5 = t8 - o5, d4 = a6, c12 = "end";
            break;
          case "bottom":
            s5 = t8 / 2, d4 = a6, c12 = "horizontal" === l4 ? "middle" : "end";
            break;
          case "bottom-left":
            s5 = o5, d4 = a6, c12 = "horizontal" === l4 ? "start" : "end";
            break;
          case "left":
            s5 = -o5, c12 = "horizontal" === l4 ? "end" : "middle";
        }
      return { x: s5, y: d4, rotation: u4, textAnchor: c12 };
    }({ axis: i4, width: r4, height: t7, position: d3, offsetX: u3, offsetY: c11, orientation: f3 });
    y4 = (0, import_jsx_runtime2.jsx)("text", { transform: "translate(" + v5.x + ", " + v5.y + ") rotate(" + v5.rotation + ")", textAnchor: v5.textAnchor, dominantBaseline: "central", style: l3, children: s4 });
  }
  return (0, import_jsx_runtime2.jsxs)("g", { transform: "translate(" + h3 + ", " + b4 + ")", children: [(0, import_jsx_runtime2.jsx)("line", { x1: 0, x2: g3, y1: 0, y2: m4, stroke: p4.markers.lineColor, strokeWidth: p4.markers.lineStrokeWidth, style: a5 }), y4] });
};
Ci.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, scale: import_prop_types.default.func.isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object, legend: import_prop_types.default.string, legendPosition: import_prop_types.default.oneOf(["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"]), legendOffsetX: import_prop_types.default.number.isRequired, legendOffsetY: import_prop_types.default.number.isRequired, legendOrientation: import_prop_types.default.oneOf(["horizontal", "vertical"]).isRequired }, Ci.defaultProps = { legendPosition: "top-right", legendOffsetX: 14, legendOffsetY: 14, legendOrientation: "horizontal" };
var zi = (0, import_react16.memo)(Ci);
var Pi = function(e7) {
  var r4 = e7.markers, t7 = e7.width, i4 = e7.height, n4 = e7.xScale, o4 = e7.yScale;
  return r4 && 0 !== r4.length ? r4.map(function(e8, r5) {
    return (0, import_jsx_runtime2.jsx)(zi, Sr({}, e8, { width: t7, height: i4, scale: "y" === e8.axis ? o4 : n4 }), r5);
  }) : null;
};
Pi.propTypes = { width: import_prop_types.default.number.isRequired, height: import_prop_types.default.number.isRequired, xScale: import_prop_types.default.func.isRequired, yScale: import_prop_types.default.func.isRequired, markers: import_prop_types.default.arrayOf(import_prop_types.default.shape({ axis: import_prop_types.default.oneOf(["x", "y"]).isRequired, value: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string, import_prop_types.default.instanceOf(Date)]).isRequired, lineStyle: import_prop_types.default.object, textStyle: import_prop_types.default.object })) };
var Ti = (0, import_react16.memo)(Pi);
var Bi = function(e7) {
  return (0, import_isFunction.default)(e7) ? e7 : function(r4) {
    return (0, import_get.default)(r4, e7);
  };
};
var Gi = function(e7) {
  return (0, import_react16.useMemo)(function() {
    return Bi(e7);
  }, [e7]);
};
var Di = function(e7, r4, t7, i4) {
  var n4 = t7 - e7, o4 = i4 - r4;
  return n4 *= n4, o4 *= o4, Math.sqrt(n4 + o4);
};
var Yi = function(e7, r4, t7, i4) {
  var n4 = Math.atan2(i4 - r4, t7 - e7) - Math.PI / 2;
  return n4 > 0 ? n4 : 2 * Math.PI + n4;
};
var Fi = function(e7, r4) {
  var t7, i4 = r4.clientX, n4 = r4.clientY, o4 = e7.getBoundingClientRect(), a5 = (t7 = void 0 !== e7.getBBox ? e7.getBBox() : { width: e7.offsetWidth, height: e7.offsetHeight }).width === o4.width ? 1 : t7.width / o4.width;
  return [(i4 - o4.left) * a5, (n4 - o4.top) * a5];
};
var Ei = Object.keys(ei);
var Ui = Object.keys(yi);
var Xi = function(e7, r4, t7) {
  if ("*" === e7)
    return true;
  if ((0, import_isFunction.default)(e7))
    return e7(r4);
  if ((0, import_isPlainObject.default)(e7)) {
    var i4 = t7 ? (0, import_get.default)(r4, t7) : r4;
    return (0, import_isEqual.default)((0, import_pick.default)(i4, Object.keys(e7)), e7);
  }
  return false;
};
var Hi = function(e7, r4, t7, i4) {
  var n4 = void 0 === i4 ? {} : i4, o4 = n4.dataKey, a5 = n4.colorKey, l3 = void 0 === a5 ? "color" : a5, s4 = n4.targetKey, d3 = void 0 === s4 ? "fill" : s4, u3 = [], c11 = {};
  return e7.length && r4.length && (u3 = [].concat(e7), r4.forEach(function(r5) {
    for (var i5 = function() {
      var i6 = t7[n5], a6 = i6.id, s5 = i6.match;
      if (Xi(s5, r5, o4)) {
        var f3 = e7.find(function(e8) {
          return e8.id === a6;
        });
        if (f3) {
          if (Ui.includes(f3.type))
            if ("inherit" === f3.background || "inherit" === f3.color) {
              var p4 = (0, import_get.default)(r5, l3), h3 = f3.background, g3 = f3.color, b4 = a6;
              "inherit" === f3.background && (b4 = b4 + ".bg." + p4, h3 = p4), "inherit" === f3.color && (b4 = b4 + ".fg." + p4, g3 = p4), (0, import_set2.default)(r5, d3, "url(#" + b4 + ")"), c11[b4] || (u3.push(Sr({}, f3, { id: b4, background: h3, color: g3 })), c11[b4] = 1);
            } else
              (0, import_set2.default)(r5, d3, "url(#" + a6 + ")");
          else if (Ei.includes(f3.type)) {
            if (f3.colors.map(function(e8) {
              return e8.color;
            }).includes("inherit")) {
              var m4 = (0, import_get.default)(r5, l3), R = a6, q3 = Sr({}, f3, { colors: f3.colors.map(function(e8, r6) {
                return "inherit" !== e8.color ? e8 : (R = R + "." + r6 + "." + m4, Sr({}, e8, { color: "inherit" === e8.color ? m4 : e8.color }));
              }) });
              q3.id = R, (0, import_set2.default)(r5, d3, "url(#" + R + ")"), c11[R] || (u3.push(q3), c11[R] = 1);
            } else
              (0, import_set2.default)(r5, d3, "url(#" + a6 + ")");
          }
        }
        return "break";
      }
    }, n5 = 0; n5 < t7.length; n5++) {
      if ("break" === i5())
        break;
    }
  })), u3;
};

// node_modules/@nivo/arcs/dist/nivo-arcs.es.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react18 = __toESM(require_react());

// node_modules/d3-scale-chromatic/src/colors.js
function colors_default2(specifier) {
  var n4 = specifier.length / 6 | 0, colors3 = new Array(n4), i4 = 0;
  while (i4 < n4)
    colors3[i4] = "#" + specifier.slice(i4 * 6, ++i4 * 6);
  return colors3;
}

// node_modules/d3-scale-chromatic/src/categorical/category10.js
var category10_default2 = colors_default2("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

// node_modules/d3-scale-chromatic/src/categorical/Accent.js
var Accent_default2 = colors_default2("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

// node_modules/d3-scale-chromatic/src/categorical/Dark2.js
var Dark2_default2 = colors_default2("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

// node_modules/d3-scale-chromatic/src/categorical/Paired.js
var Paired_default2 = colors_default2("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

// node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
var Pastel1_default2 = colors_default2("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

// node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
var Pastel2_default2 = colors_default2("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

// node_modules/d3-scale-chromatic/src/categorical/Set1.js
var Set1_default2 = colors_default2("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

// node_modules/d3-scale-chromatic/src/categorical/Set2.js
var Set2_default2 = colors_default2("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

// node_modules/d3-scale-chromatic/src/categorical/Set3.js
var Set3_default2 = colors_default2("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

// node_modules/d3-scale-chromatic/src/categorical/Tableau10.js
var Tableau10_default2 = colors_default2("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/define.js
function define_default3(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend3(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/color.js
function Color3() {
}
var darker3 = 0.7;
var brighter3 = 1 / darker3;
var reI3 = "\\s*([+-]?\\d+)\\s*";
var reN3 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP3 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex3 = /^#([0-9a-f]{3,8})$/;
var reRgbInteger3 = new RegExp("^rgb\\(" + [reI3, reI3, reI3] + "\\)$");
var reRgbPercent3 = new RegExp("^rgb\\(" + [reP3, reP3, reP3] + "\\)$");
var reRgbaInteger3 = new RegExp("^rgba\\(" + [reI3, reI3, reI3, reN3] + "\\)$");
var reRgbaPercent3 = new RegExp("^rgba\\(" + [reP3, reP3, reP3, reN3] + "\\)$");
var reHslPercent3 = new RegExp("^hsl\\(" + [reN3, reP3, reP3] + "\\)$");
var reHslaPercent3 = new RegExp("^hsla\\(" + [reN3, reP3, reP3, reN3] + "\\)$");
var named3 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default3(Color3, color3, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex3,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex3,
  formatHsl: color_formatHsl3,
  formatRgb: color_formatRgb3,
  toString: color_formatRgb3
});
function color_formatHex3() {
  return this.rgb().formatHex();
}
function color_formatHsl3() {
  return hslConvert3(this).formatHsl();
}
function color_formatRgb3() {
  return this.rgb().formatRgb();
}
function color3(format2) {
  var m4, l3;
  format2 = (format2 + "").trim().toLowerCase();
  return (m4 = reHex3.exec(format2)) ? (l3 = m4[1].length, m4 = parseInt(m4[1], 16), l3 === 6 ? rgbn3(m4) : l3 === 3 ? new Rgb3(m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, (m4 & 15) << 4 | m4 & 15, 1) : l3 === 8 ? rgba4(m4 >> 24 & 255, m4 >> 16 & 255, m4 >> 8 & 255, (m4 & 255) / 255) : l3 === 4 ? rgba4(m4 >> 12 & 15 | m4 >> 8 & 240, m4 >> 8 & 15 | m4 >> 4 & 240, m4 >> 4 & 15 | m4 & 240, ((m4 & 15) << 4 | m4 & 15) / 255) : null) : (m4 = reRgbInteger3.exec(format2)) ? new Rgb3(m4[1], m4[2], m4[3], 1) : (m4 = reRgbPercent3.exec(format2)) ? new Rgb3(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, 1) : (m4 = reRgbaInteger3.exec(format2)) ? rgba4(m4[1], m4[2], m4[3], m4[4]) : (m4 = reRgbaPercent3.exec(format2)) ? rgba4(m4[1] * 255 / 100, m4[2] * 255 / 100, m4[3] * 255 / 100, m4[4]) : (m4 = reHslPercent3.exec(format2)) ? hsla4(m4[1], m4[2] / 100, m4[3] / 100, 1) : (m4 = reHslaPercent3.exec(format2)) ? hsla4(m4[1], m4[2] / 100, m4[3] / 100, m4[4]) : named3.hasOwnProperty(format2) ? rgbn3(named3[format2]) : format2 === "transparent" ? new Rgb3(NaN, NaN, NaN, 0) : null;
}
function rgbn3(n4) {
  return new Rgb3(n4 >> 16 & 255, n4 >> 8 & 255, n4 & 255, 1);
}
function rgba4(r4, g3, b4, a5) {
  if (a5 <= 0)
    r4 = g3 = b4 = NaN;
  return new Rgb3(r4, g3, b4, a5);
}
function rgbConvert3(o4) {
  if (!(o4 instanceof Color3))
    o4 = color3(o4);
  if (!o4)
    return new Rgb3();
  o4 = o4.rgb();
  return new Rgb3(o4.r, o4.g, o4.b, o4.opacity);
}
function rgb4(r4, g3, b4, opacity) {
  return arguments.length === 1 ? rgbConvert3(r4) : new Rgb3(r4, g3, b4, opacity == null ? 1 : opacity);
}
function Rgb3(r4, g3, b4, opacity) {
  this.r = +r4;
  this.g = +g3;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default3(Rgb3, rgb4, extend3(Color3, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter3 : Math.pow(brighter3, k5);
    return new Rgb3(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker3 : Math.pow(darker3, k5);
    return new Rgb3(this.r * k5, this.g * k5, this.b * k5, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex3,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex3,
  formatRgb: rgb_formatRgb3,
  toString: rgb_formatRgb3
}));
function rgb_formatHex3() {
  return "#" + hex5(this.r) + hex5(this.g) + hex5(this.b);
}
function rgb_formatRgb3() {
  var a5 = this.opacity;
  a5 = isNaN(a5) ? 1 : Math.max(0, Math.min(1, a5));
  return (a5 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a5 === 1 ? ")" : ", " + a5 + ")");
}
function hex5(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla4(h3, s4, l3, a5) {
  if (a5 <= 0)
    h3 = s4 = l3 = NaN;
  else if (l3 <= 0 || l3 >= 1)
    h3 = s4 = NaN;
  else if (s4 <= 0)
    h3 = NaN;
  return new Hsl3(h3, s4, l3, a5);
}
function hslConvert3(o4) {
  if (o4 instanceof Hsl3)
    return new Hsl3(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Color3))
    o4 = color3(o4);
  if (!o4)
    return new Hsl3();
  if (o4 instanceof Hsl3)
    return o4;
  o4 = o4.rgb();
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, min3 = Math.min(r4, g3, b4), max3 = Math.max(r4, g3, b4), h3 = NaN, s4 = max3 - min3, l3 = (max3 + min3) / 2;
  if (s4) {
    if (r4 === max3)
      h3 = (g3 - b4) / s4 + (g3 < b4) * 6;
    else if (g3 === max3)
      h3 = (b4 - r4) / s4 + 2;
    else
      h3 = (r4 - g3) / s4 + 4;
    s4 /= l3 < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h3 *= 60;
  } else {
    s4 = l3 > 0 && l3 < 1 ? 0 : h3;
  }
  return new Hsl3(h3, s4, l3, o4.opacity);
}
function hsl6(h3, s4, l3, opacity) {
  return arguments.length === 1 ? hslConvert3(h3) : new Hsl3(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Hsl3(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default3(Hsl3, hsl6, extend3(Color3, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter3 : Math.pow(brighter3, k5);
    return new Hsl3(this.h, this.s, this.l * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker3 : Math.pow(darker3, k5);
    return new Hsl3(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb: function() {
    var h3 = this.h % 360 + (this.h < 0) * 360, s4 = isNaN(h3) || isNaN(this.s) ? 0 : this.s, l3 = this.l, m22 = l3 + (l3 < 0.5 ? l3 : 1 - l3) * s4, m1 = 2 * l3 - m22;
    return new Rgb3(
      hsl2rgb3(h3 >= 240 ? h3 - 240 : h3 + 120, m1, m22),
      hsl2rgb3(h3, m1, m22),
      hsl2rgb3(h3 < 120 ? h3 + 240 : h3 - 120, m1, m22),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a5 = this.opacity;
    a5 = isNaN(a5) ? 1 : Math.max(0, Math.min(1, a5));
    return (a5 === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a5 === 1 ? ")" : ", " + a5 + ")");
  }
}));
function hsl2rgb3(h3, m1, m22) {
  return (h3 < 60 ? m1 + (m22 - m1) * h3 / 60 : h3 < 180 ? m22 : h3 < 240 ? m1 + (m22 - m1) * (240 - h3) / 60 : m1) * 255;
}

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/math.js
var radians3 = Math.PI / 180;
var degrees5 = 180 / Math.PI;

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/lab.js
var K3 = 18;
var Xn3 = 0.96422;
var Yn3 = 1;
var Zn3 = 0.82521;
var t05 = 4 / 29;
var t15 = 6 / 29;
var t23 = 3 * t15 * t15;
var t33 = t15 * t15 * t15;
function labConvert3(o4) {
  if (o4 instanceof Lab3)
    return new Lab3(o4.l, o4.a, o4.b, o4.opacity);
  if (o4 instanceof Hcl3)
    return hcl2lab3(o4);
  if (!(o4 instanceof Rgb3))
    o4 = rgbConvert3(o4);
  var r4 = rgb2lrgb3(o4.r), g3 = rgb2lrgb3(o4.g), b4 = rgb2lrgb3(o4.b), y4 = xyz2lab3((0.2225045 * r4 + 0.7168786 * g3 + 0.0606169 * b4) / Yn3), x6, z5;
  if (r4 === g3 && g3 === b4)
    x6 = z5 = y4;
  else {
    x6 = xyz2lab3((0.4360747 * r4 + 0.3850649 * g3 + 0.1430804 * b4) / Xn3);
    z5 = xyz2lab3((0.0139322 * r4 + 0.0971045 * g3 + 0.7141733 * b4) / Zn3);
  }
  return new Lab3(116 * y4 - 16, 500 * (x6 - y4), 200 * (y4 - z5), o4.opacity);
}
function lab5(l3, a5, b4, opacity) {
  return arguments.length === 1 ? labConvert3(l3) : new Lab3(l3, a5, b4, opacity == null ? 1 : opacity);
}
function Lab3(l3, a5, b4, opacity) {
  this.l = +l3;
  this.a = +a5;
  this.b = +b4;
  this.opacity = +opacity;
}
define_default3(Lab3, lab5, extend3(Color3, {
  brighter: function(k5) {
    return new Lab3(this.l + K3 * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  darker: function(k5) {
    return new Lab3(this.l - K3 * (k5 == null ? 1 : k5), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y4 = (this.l + 16) / 116, x6 = isNaN(this.a) ? y4 : y4 + this.a / 500, z5 = isNaN(this.b) ? y4 : y4 - this.b / 200;
    x6 = Xn3 * lab2xyz3(x6);
    y4 = Yn3 * lab2xyz3(y4);
    z5 = Zn3 * lab2xyz3(z5);
    return new Rgb3(
      lrgb2rgb3(3.1338561 * x6 - 1.6168667 * y4 - 0.4906146 * z5),
      lrgb2rgb3(-0.9787684 * x6 + 1.9161415 * y4 + 0.033454 * z5),
      lrgb2rgb3(0.0719453 * x6 - 0.2289914 * y4 + 1.4052427 * z5),
      this.opacity
    );
  }
}));
function xyz2lab3(t7) {
  return t7 > t33 ? Math.pow(t7, 1 / 3) : t7 / t23 + t05;
}
function lab2xyz3(t7) {
  return t7 > t15 ? t7 * t7 * t7 : t23 * (t7 - t05);
}
function lrgb2rgb3(x6) {
  return 255 * (x6 <= 31308e-7 ? 12.92 * x6 : 1.055 * Math.pow(x6, 1 / 2.4) - 0.055);
}
function rgb2lrgb3(x6) {
  return (x6 /= 255) <= 0.04045 ? x6 / 12.92 : Math.pow((x6 + 0.055) / 1.055, 2.4);
}
function hclConvert3(o4) {
  if (o4 instanceof Hcl3)
    return new Hcl3(o4.h, o4.c, o4.l, o4.opacity);
  if (!(o4 instanceof Lab3))
    o4 = labConvert3(o4);
  if (o4.a === 0 && o4.b === 0)
    return new Hcl3(NaN, 0 < o4.l && o4.l < 100 ? 0 : NaN, o4.l, o4.opacity);
  var h3 = Math.atan2(o4.b, o4.a) * degrees5;
  return new Hcl3(h3 < 0 ? h3 + 360 : h3, Math.sqrt(o4.a * o4.a + o4.b * o4.b), o4.l, o4.opacity);
}
function hcl5(h3, c11, l3, opacity) {
  return arguments.length === 1 ? hclConvert3(h3) : new Hcl3(h3, c11, l3, opacity == null ? 1 : opacity);
}
function Hcl3(h3, c11, l3, opacity) {
  this.h = +h3;
  this.c = +c11;
  this.l = +l3;
  this.opacity = +opacity;
}
function hcl2lab3(o4) {
  if (isNaN(o4.h))
    return new Lab3(o4.l, 0, 0, o4.opacity);
  var h3 = o4.h * radians3;
  return new Lab3(o4.l, Math.cos(h3) * o4.c, Math.sin(h3) * o4.c, o4.opacity);
}
define_default3(Hcl3, hcl5, extend3(Color3, {
  brighter: function(k5) {
    return new Hcl3(this.h, this.c, this.l + K3 * (k5 == null ? 1 : k5), this.opacity);
  },
  darker: function(k5) {
    return new Hcl3(this.h, this.c, this.l - K3 * (k5 == null ? 1 : k5), this.opacity);
  },
  rgb: function() {
    return hcl2lab3(this).rgb();
  }
}));

// node_modules/d3-scale-chromatic/node_modules/d3-color/src/cubehelix.js
var A4 = -0.14861;
var B3 = 1.78277;
var C5 = -0.29227;
var D3 = -0.90649;
var E4 = 1.97294;
var ED3 = E4 * D3;
var EB3 = E4 * B3;
var BC_DA3 = B3 * C5 - D3 * A4;
function cubehelixConvert3(o4) {
  if (o4 instanceof Cubehelix3)
    return new Cubehelix3(o4.h, o4.s, o4.l, o4.opacity);
  if (!(o4 instanceof Rgb3))
    o4 = rgbConvert3(o4);
  var r4 = o4.r / 255, g3 = o4.g / 255, b4 = o4.b / 255, l3 = (BC_DA3 * b4 + ED3 * r4 - EB3 * g3) / (BC_DA3 + ED3 - EB3), bl = b4 - l3, k5 = (E4 * (g3 - l3) - C5 * bl) / D3, s4 = Math.sqrt(k5 * k5 + bl * bl) / (E4 * l3 * (1 - l3)), h3 = s4 ? Math.atan2(k5, bl) * degrees5 - 120 : NaN;
  return new Cubehelix3(h3 < 0 ? h3 + 360 : h3, s4, l3, o4.opacity);
}
function cubehelix5(h3, s4, l3, opacity) {
  return arguments.length === 1 ? cubehelixConvert3(h3) : new Cubehelix3(h3, s4, l3, opacity == null ? 1 : opacity);
}
function Cubehelix3(h3, s4, l3, opacity) {
  this.h = +h3;
  this.s = +s4;
  this.l = +l3;
  this.opacity = +opacity;
}
define_default3(Cubehelix3, cubehelix5, extend3(Color3, {
  brighter: function(k5) {
    k5 = k5 == null ? brighter3 : Math.pow(brighter3, k5);
    return new Cubehelix3(this.h, this.s, this.l * k5, this.opacity);
  },
  darker: function(k5) {
    k5 = k5 == null ? darker3 : Math.pow(darker3, k5);
    return new Cubehelix3(this.h, this.s, this.l * k5, this.opacity);
  },
  rgb: function() {
    var h3 = isNaN(this.h) ? 0 : (this.h + 120) * radians3, l3 = +this.l, a5 = isNaN(this.s) ? 0 : this.s * l3 * (1 - l3), cosh4 = Math.cos(h3), sinh4 = Math.sin(h3);
    return new Rgb3(
      255 * (l3 + a5 * (A4 * cosh4 + B3 * sinh4)),
      255 * (l3 + a5 * (C5 * cosh4 + D3 * sinh4)),
      255 * (l3 + a5 * (E4 * cosh4)),
      this.opacity
    );
  }
}));

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/basis.js
function basis3(t16, v0, v1, v22, v32) {
  var t24 = t16 * t16, t34 = t24 * t16;
  return ((1 - 3 * t16 + 3 * t24 - t34) * v0 + (4 - 6 * t24 + 3 * t34) * v1 + (1 + 3 * t16 + 3 * t24 - 3 * t34) * v22 + t34 * v32) / 6;
}
function basis_default4(values) {
  var n4 = values.length - 1;
  return function(t7) {
    var i4 = t7 <= 0 ? t7 = 0 : t7 >= 1 ? (t7 = 1, n4 - 1) : Math.floor(t7 * n4), v1 = values[i4], v22 = values[i4 + 1], v0 = i4 > 0 ? values[i4 - 1] : 2 * v1 - v22, v32 = i4 < n4 - 1 ? values[i4 + 2] : 2 * v22 - v1;
    return basis3((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default4(values) {
  var n4 = values.length;
  return function(t7) {
    var i4 = Math.floor(((t7 %= 1) < 0 ? ++t7 : t7) * n4), v0 = values[(i4 + n4 - 1) % n4], v1 = values[i4 % n4], v22 = values[(i4 + 1) % n4], v32 = values[(i4 + 2) % n4];
    return basis3((t7 - i4 / n4) * n4, v0, v1, v22, v32);
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/constant.js
var constant_default5 = (x6) => () => x6;

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/color.js
function linear4(a5, d3) {
  return function(t7) {
    return a5 + t7 * d3;
  };
}
function exponential3(a5, b4, y4) {
  return a5 = Math.pow(a5, y4), b4 = Math.pow(b4, y4) - a5, y4 = 1 / y4, function(t7) {
    return Math.pow(a5 + t7 * b4, y4);
  };
}
function hue3(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear4(a5, d3 > 180 || d3 < -180 ? d3 - 360 * Math.round(d3 / 360) : d3) : constant_default5(isNaN(a5) ? b4 : a5);
}
function gamma3(y4) {
  return (y4 = +y4) === 1 ? nogamma3 : function(a5, b4) {
    return b4 - a5 ? exponential3(a5, b4, y4) : constant_default5(isNaN(a5) ? b4 : a5);
  };
}
function nogamma3(a5, b4) {
  var d3 = b4 - a5;
  return d3 ? linear4(a5, d3) : constant_default5(isNaN(a5) ? b4 : a5);
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/rgb.js
var rgb_default3 = function rgbGamma3(y4) {
  var color4 = gamma3(y4);
  function rgb5(start2, end) {
    var r4 = color4((start2 = rgb4(start2)).r, (end = rgb4(end)).r), g3 = color4(start2.g, end.g), b4 = color4(start2.b, end.b), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t7) {
      start2.r = r4(t7);
      start2.g = g3(t7);
      start2.b = b4(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  }
  rgb5.gamma = rgbGamma3;
  return rgb5;
}(1);
function rgbSpline3(spline) {
  return function(colors3) {
    var n4 = colors3.length, r4 = new Array(n4), g3 = new Array(n4), b4 = new Array(n4), i4, color4;
    for (i4 = 0; i4 < n4; ++i4) {
      color4 = rgb4(colors3[i4]);
      r4[i4] = color4.r || 0;
      g3[i4] = color4.g || 0;
      b4[i4] = color4.b || 0;
    }
    r4 = spline(r4);
    g3 = spline(g3);
    b4 = spline(b4);
    color4.opacity = 1;
    return function(t7) {
      color4.r = r4(t7);
      color4.g = g3(t7);
      color4.b = b4(t7);
      return color4 + "";
    };
  };
}
var rgbBasis3 = rgbSpline3(basis_default4);
var rgbBasisClosed3 = rgbSpline3(basisClosed_default4);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/number.js
function number_default4(a5, b4) {
  return a5 = +a5, b4 = +b4, function(t7) {
    return a5 * (1 - t7) + b4 * t7;
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/string.js
var reA3 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB3 = new RegExp(reA3.source, "g");

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/decompose.js
var degrees6 = 180 / Math.PI;
var identity5 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default3(a5, b4, c11, d3, e7, f3) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a5 * a5 + b4 * b4))
    a5 /= scaleX, b4 /= scaleX;
  if (skewX = a5 * c11 + b4 * d3)
    c11 -= a5 * skewX, d3 -= b4 * skewX;
  if (scaleY = Math.sqrt(c11 * c11 + d3 * d3))
    c11 /= scaleY, d3 /= scaleY, skewX /= scaleY;
  if (a5 * d3 < b4 * c11)
    a5 = -a5, b4 = -b4, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e7,
    translateY: f3,
    rotate: Math.atan2(b4, a5) * degrees6,
    skewX: Math.atan(skewX) * degrees6,
    scaleX,
    scaleY
  };
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/parse.js
var svgNode3;
function parseCss3(value) {
  const m4 = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m4.isIdentity ? identity5 : decompose_default3(m4.a, m4.b, m4.c, m4.d, m4.e, m4.f);
}
function parseSvg3(value) {
  if (value == null)
    return identity5;
  if (!svgNode3)
    svgNode3 = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode3.setAttribute("transform", value);
  if (!(value = svgNode3.transform.baseVal.consolidate()))
    return identity5;
  value = value.matrix;
  return decompose_default3(value.a, value.b, value.c, value.d, value.e, value.f);
}

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform3(parse, pxComma, pxParen, degParen) {
  function pop(s4) {
    return s4.length ? s4.pop() + " " : "";
  }
  function translate(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push("translate(", null, pxComma, null, pxParen);
      q3.push({ i: i4 - 4, x: number_default4(xa, xb) }, { i: i4 - 2, x: number_default4(ya, yb) });
    } else if (xb || yb) {
      s4.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a5, b4, s4, q3) {
    if (a5 !== b4) {
      if (a5 - b4 > 180)
        b4 += 360;
      else if (b4 - a5 > 180)
        a5 += 360;
      q3.push({ i: s4.push(pop(s4) + "rotate(", null, degParen) - 2, x: number_default4(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "rotate(" + b4 + degParen);
    }
  }
  function skewX(a5, b4, s4, q3) {
    if (a5 !== b4) {
      q3.push({ i: s4.push(pop(s4) + "skewX(", null, degParen) - 2, x: number_default4(a5, b4) });
    } else if (b4) {
      s4.push(pop(s4) + "skewX(" + b4 + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s4, q3) {
    if (xa !== xb || ya !== yb) {
      var i4 = s4.push(pop(s4) + "scale(", null, ",", null, ")");
      q3.push({ i: i4 - 4, x: number_default4(xa, xb) }, { i: i4 - 2, x: number_default4(ya, yb) });
    } else if (xb !== 1 || yb !== 1) {
      s4.push(pop(s4) + "scale(" + xb + "," + yb + ")");
    }
  }
  return function(a5, b4) {
    var s4 = [], q3 = [];
    a5 = parse(a5), b4 = parse(b4);
    translate(a5.translateX, a5.translateY, b4.translateX, b4.translateY, s4, q3);
    rotate(a5.rotate, b4.rotate, s4, q3);
    skewX(a5.skewX, b4.skewX, s4, q3);
    scale(a5.scaleX, a5.scaleY, b4.scaleX, b4.scaleY, s4, q3);
    a5 = b4 = null;
    return function(t7) {
      var i4 = -1, n4 = q3.length, o4;
      while (++i4 < n4)
        s4[(o4 = q3[i4]).i] = o4.x(t7);
      return s4.join("");
    };
  };
}
var interpolateTransformCss3 = interpolateTransform3(parseCss3, "px, ", "px)", "deg)");
var interpolateTransformSvg3 = interpolateTransform3(parseSvg3, ", ", ")", ")");

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/zoom.js
var epsilon23 = 1e-12;
function cosh3(x6) {
  return ((x6 = Math.exp(x6)) + 1 / x6) / 2;
}
function sinh3(x6) {
  return ((x6 = Math.exp(x6)) - 1 / x6) / 2;
}
function tanh3(x6) {
  return ((x6 = Math.exp(2 * x6)) - 1) / (x6 + 1);
}
var zoom_default3 = function zoomRho3(rho, rho2, rho4) {
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d22 = dx * dx + dy * dy, i4, S4;
    if (d22 < epsilon23) {
      S4 = Math.log(w1 / w0) / rho;
      i4 = function(t7) {
        return [
          ux0 + t7 * dx,
          uy0 + t7 * dy,
          w0 * Math.exp(rho * t7 * S4)
        ];
      };
    } else {
      var d1 = Math.sqrt(d22), b0 = (w1 * w1 - w0 * w0 + rho4 * d22) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d22) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S4 = (r1 - r0) / rho;
      i4 = function(t7) {
        var s4 = t7 * S4, coshr0 = cosh3(r0), u3 = w0 / (rho2 * d1) * (coshr0 * tanh3(rho * s4 + r0) - sinh3(r0));
        return [
          ux0 + u3 * dx,
          uy0 + u3 * dy,
          w0 * coshr0 / cosh3(rho * s4 + r0)
        ];
      };
    }
    i4.duration = S4 * 1e3 * rho / Math.SQRT2;
    return i4;
  }
  zoom.rho = function(_2) {
    var _1 = Math.max(1e-3, +_2), _22 = _1 * _1, _4 = _22 * _22;
    return zoomRho3(_1, _22, _4);
  };
  return zoom;
}(Math.SQRT2, 2, 4);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/hsl.js
function hsl7(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hsl6(start2)).h, (end = hsl6(end)).h), s4 = nogamma3(start2.s, end.s), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.s = s4(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hsl_default3 = hsl7(hue3);
var hslLong3 = hsl7(nogamma3);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/hcl.js
function hcl6(hue4) {
  return function(start2, end) {
    var h3 = hue4((start2 = hcl5(start2)).h, (end = hcl5(end)).h), c11 = nogamma3(start2.c, end.c), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
    return function(t7) {
      start2.h = h3(t7);
      start2.c = c11(t7);
      start2.l = l3(t7);
      start2.opacity = opacity(t7);
      return start2 + "";
    };
  };
}
var hcl_default3 = hcl6(hue3);
var hclLong3 = hcl6(nogamma3);

// node_modules/d3-scale-chromatic/node_modules/d3-interpolate/src/cubehelix.js
function cubehelix6(hue4) {
  return function cubehelixGamma(y4) {
    y4 = +y4;
    function cubehelix7(start2, end) {
      var h3 = hue4((start2 = cubehelix5(start2)).h, (end = cubehelix5(end)).h), s4 = nogamma3(start2.s, end.s), l3 = nogamma3(start2.l, end.l), opacity = nogamma3(start2.opacity, end.opacity);
      return function(t7) {
        start2.h = h3(t7);
        start2.s = s4(t7);
        start2.l = l3(Math.pow(t7, y4));
        start2.opacity = opacity(t7);
        return start2 + "";
      };
    }
    cubehelix7.gamma = cubehelixGamma;
    return cubehelix7;
  }(1);
}
var cubehelix_default4 = cubehelix6(hue3);
var cubehelixLong3 = cubehelix6(nogamma3);

// node_modules/d3-scale-chromatic/src/ramp.js
var ramp_default2 = (scheme55) => rgbBasis3(scheme55[scheme55.length - 1]);

// node_modules/d3-scale-chromatic/src/diverging/BrBG.js
var scheme28 = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(colors_default2);
var BrBG_default2 = ramp_default2(scheme28);

// node_modules/d3-scale-chromatic/src/diverging/PRGn.js
var scheme29 = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(colors_default2);
var PRGn_default2 = ramp_default2(scheme29);

// node_modules/d3-scale-chromatic/src/diverging/PiYG.js
var scheme30 = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(colors_default2);
var PiYG_default2 = ramp_default2(scheme30);

// node_modules/d3-scale-chromatic/src/diverging/PuOr.js
var scheme31 = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(colors_default2);
var PuOr_default2 = ramp_default2(scheme31);

// node_modules/d3-scale-chromatic/src/diverging/RdBu.js
var scheme32 = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(colors_default2);
var RdBu_default2 = ramp_default2(scheme32);

// node_modules/d3-scale-chromatic/src/diverging/RdGy.js
var scheme33 = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(colors_default2);
var RdGy_default2 = ramp_default2(scheme33);

// node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
var scheme34 = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(colors_default2);
var RdYlBu_default2 = ramp_default2(scheme34);

// node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
var scheme35 = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(colors_default2);
var RdYlGn_default2 = ramp_default2(scheme35);

// node_modules/d3-scale-chromatic/src/diverging/Spectral.js
var scheme36 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(colors_default2);
var Spectral_default2 = ramp_default2(scheme36);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
var scheme37 = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(colors_default2);
var BuGn_default2 = ramp_default2(scheme37);

// node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
var scheme38 = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(colors_default2);
var BuPu_default2 = ramp_default2(scheme38);

// node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
var scheme39 = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(colors_default2);
var GnBu_default2 = ramp_default2(scheme39);

// node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
var scheme40 = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(colors_default2);
var OrRd_default2 = ramp_default2(scheme40);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
var scheme41 = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(colors_default2);
var PuBuGn_default2 = ramp_default2(scheme41);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
var scheme42 = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(colors_default2);
var PuBu_default2 = ramp_default2(scheme42);

// node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
var scheme43 = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(colors_default2);
var PuRd_default2 = ramp_default2(scheme43);

// node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
var scheme44 = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(colors_default2);
var RdPu_default2 = ramp_default2(scheme44);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
var scheme45 = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(colors_default2);
var YlGnBu_default2 = ramp_default2(scheme45);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
var scheme46 = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(colors_default2);
var YlGn_default2 = ramp_default2(scheme46);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
var scheme47 = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(colors_default2);
var YlOrBr_default2 = ramp_default2(scheme47);

// node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
var scheme48 = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(colors_default2);
var YlOrRd_default2 = ramp_default2(scheme48);

// node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
var scheme49 = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(colors_default2);
var Blues_default2 = ramp_default2(scheme49);

// node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
var scheme50 = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(colors_default2);
var Greens_default2 = ramp_default2(scheme50);

// node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
var scheme51 = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(colors_default2);
var Greys_default2 = ramp_default2(scheme51);

// node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
var scheme52 = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(colors_default2);
var Purples_default2 = ramp_default2(scheme52);

// node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
var scheme53 = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(colors_default2);
var Reds_default2 = ramp_default2(scheme53);

// node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
var scheme54 = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(colors_default2);
var Oranges_default2 = ramp_default2(scheme54);

// node_modules/d3-scale-chromatic/src/sequential-multi/cividis.js
function cividis_default2(t7) {
  t7 = Math.max(0, Math.min(1, t7));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t7 * (35.34 - t7 * (2381.73 - t7 * (6402.7 - t7 * (7024.72 - t7 * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t7 * (170.73 + t7 * (52.82 - t7 * (131.46 - t7 * (176.58 - t7 * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t7 * (442.36 - t7 * (2482.43 - t7 * (6167.24 - t7 * (6614.94 - t7 * 2475.67))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
var cubehelix_default5 = cubehelixLong3(cubehelix5(300, 0.5, 0), cubehelix5(-240, 0.5, 1));

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
var warm2 = cubehelixLong3(cubehelix5(-100, 0.75, 0.35), cubehelix5(80, 1.5, 0.8));
var cool2 = cubehelixLong3(cubehelix5(260, 0.75, 0.35), cubehelix5(80, 1.5, 0.8));
var c8 = cubehelix5();
function rainbow_default2(t7) {
  if (t7 < 0 || t7 > 1)
    t7 -= Math.floor(t7);
  var ts2 = Math.abs(t7 - 0.5);
  c8.h = 360 * t7 - 100;
  c8.s = 1.5 - 1.5 * ts2;
  c8.l = 0.8 - 0.9 * ts2;
  return c8 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
var c9 = rgb4();
var pi_1_32 = Math.PI / 3;
var pi_2_32 = Math.PI * 2 / 3;
function sinebow_default2(t7) {
  var x6;
  t7 = (0.5 - t7) * Math.PI;
  c9.r = 255 * (x6 = Math.sin(t7)) * x6;
  c9.g = 255 * (x6 = Math.sin(t7 + pi_1_32)) * x6;
  c9.b = 255 * (x6 = Math.sin(t7 + pi_2_32)) * x6;
  return c9 + "";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/turbo.js
function turbo_default2(t7) {
  t7 = Math.max(0, Math.min(1, t7));
  return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t7 * (1172.33 - t7 * (10793.56 - t7 * (33300.12 - t7 * (38394.49 - t7 * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t7 * (557.33 + t7 * (1225.33 - t7 * (3574.96 - t7 * (1073.77 + t7 * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t7 * (3211.1 - t7 * (15327.97 - t7 * (27814 - t7 * (22569.18 - t7 * 6838.66))))))) + ")";
}

// node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
function ramp2(range) {
  var n4 = range.length;
  return function(t7) {
    return range[Math.max(0, Math.min(n4 - 1, Math.floor(t7 * n4)))];
  };
}
var viridis_default2 = ramp2(colors_default2("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var magma2 = ramp2(colors_default2("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var inferno2 = ramp2(colors_default2("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var plasma2 = ramp2(colors_default2("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

// node_modules/@nivo/colors/dist/nivo-colors.es.js
var import_react17 = __toESM(require_react());
var import_get2 = __toESM(require_get());
var import_isPlainObject2 = __toESM(require_isPlainObject());
var import_prop_types2 = __toESM(require_prop_types());
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e7) {
    for (var r4 = 1; r4 < arguments.length; r4++) {
      var n4 = arguments[r4];
      for (var t7 in n4)
        Object.prototype.hasOwnProperty.call(n4, t7) && (e7[t7] = n4[t7]);
    }
    return e7;
  }, qe.apply(this, arguments);
}
function Se(e7, r4) {
  (null == r4 || r4 > e7.length) && (r4 = e7.length);
  for (var n4 = 0, t7 = new Array(r4); n4 < r4; n4++)
    t7[n4] = e7[n4];
  return t7;
}
function Re(e7, r4) {
  var n4 = "undefined" != typeof Symbol && e7[Symbol.iterator] || e7["@@iterator"];
  if (n4)
    return (n4 = n4.call(e7)).next.bind(n4);
  if (Array.isArray(e7) || (n4 = function(e8, r5) {
    if (e8) {
      if ("string" == typeof e8)
        return Se(e8, r5);
      var n5 = Object.prototype.toString.call(e8).slice(8, -1);
      return "Object" === n5 && e8.constructor && (n5 = e8.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e8) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Se(e8, r5) : void 0;
    }
  }(e7)) || r4 && e7 && "number" == typeof e7.length) {
    n4 && (e7 = n4);
    var t7 = 0;
    return function() {
      return t7 >= e7.length ? { done: true } : { done: false, value: e7[t7++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var Ce = { nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"], category10: category10_default2, accent: Accent_default2, dark2: Dark2_default2, paired: Paired_default2, pastel1: Pastel1_default2, pastel2: Pastel2_default2, set1: Set1_default2, set2: Set2_default2, set3: Set3_default2 };
var Ge = Object.keys(Ce);
var Ve = { brown_blueGreen: scheme28, purpleRed_green: scheme29, pink_yellowGreen: scheme30, purple_orange: scheme31, red_blue: scheme32, red_grey: scheme33, red_yellow_blue: scheme34, red_yellow_green: scheme35, spectral: scheme36 };
var Te = Object.keys(Ve);
var Pe = { brown_blueGreen: BrBG_default2, purpleRed_green: PRGn_default2, pink_yellowGreen: PiYG_default2, purple_orange: PuOr_default2, red_blue: RdBu_default2, red_grey: RdGy_default2, red_yellow_blue: RdYlBu_default2, red_yellow_green: RdYlGn_default2, spectral: Spectral_default2 };
var Ue = { blues: scheme49, greens: scheme50, greys: scheme51, oranges: scheme54, purples: scheme52, reds: scheme53, blue_green: scheme37, blue_purple: scheme38, green_blue: scheme39, orange_red: scheme40, purple_blue_green: scheme41, purple_blue: scheme42, purple_red: scheme43, red_purple: scheme44, yellow_green_blue: scheme45, yellow_green: scheme46, yellow_orange_brown: scheme47, yellow_orange_red: scheme48 };
var De = Object.keys(Ue);
var Me = { blues: Blues_default2, greens: Greens_default2, greys: Greys_default2, oranges: Oranges_default2, purples: Purples_default2, reds: Reds_default2, turbo: turbo_default2, viridis: viridis_default2, inferno: inferno2, magma: magma2, plasma: plasma2, cividis: cividis_default2, warm: warm2, cool: cool2, cubehelixDefault: cubehelix_default5, blue_green: BuGn_default2, blue_purple: BuPu_default2, green_blue: GnBu_default2, orange_red: OrRd_default2, purple_blue_green: PuBuGn_default2, purple_blue: PuBu_default2, purple_red: PuRd_default2, red_purple: RdPu_default2, yellow_green_blue: YlGnBu_default2, yellow_green: YlGn_default2, yellow_orange_brown: YlOrBr_default2, yellow_orange_red: YlOrRd_default2 };
var $e = qe({}, Ce, Ve, Ue);
var Be = Object.keys($e);
var Fe = function(e7) {
  return Ge.includes(e7);
};
var He = function(e7) {
  return Te.includes(e7);
};
var Je = function(e7) {
  return De.includes(e7);
};
var Ke = { rainbow: rainbow_default2, sinebow: sinebow_default2 };
var Le = qe({}, Pe, Me, Ke);
var Ne = Object.keys(Le);
var Qe2 = function(e7, r4) {
  if ("function" == typeof e7)
    return e7;
  if ((0, import_isPlainObject2.default)(e7)) {
    if (function(e8) {
      return void 0 !== e8.theme;
    }(e7)) {
      if (void 0 === r4)
        throw new Error("Unable to use color from theme as no theme was provided");
      var n4 = (0, import_get2.default)(r4, e7.theme);
      if (void 0 === n4)
        throw new Error("Color from theme is undefined at path: '" + e7.theme + "'");
      return function() {
        return n4;
      };
    }
    if (function(e8) {
      return void 0 !== e8.from;
    }(e7)) {
      var t7 = function(r5) {
        return (0, import_get2.default)(r5, e7.from);
      };
      if (Array.isArray(e7.modifiers)) {
        for (var o4, i4 = [], u3 = function() {
          var e8 = o4.value, r5 = e8[0], n5 = e8[1];
          if ("brighter" === r5)
            i4.push(function(e9) {
              return e9.brighter(n5);
            });
          else if ("darker" === r5)
            i4.push(function(e9) {
              return e9.darker(n5);
            });
          else {
            if ("opacity" !== r5)
              throw new Error("Invalid color modifier: '" + r5 + "', must be one of: 'brighter', 'darker', 'opacity'");
            i4.push(function(e9) {
              return e9.opacity = n5, e9;
            });
          }
        }, a5 = Re(e7.modifiers); !(o4 = a5()).done; )
          u3();
        return 0 === i4.length ? t7 : function(e8) {
          return i4.reduce(function(e9, r5) {
            return r5(e9);
          }, rgb2(t7(e8))).toString();
        };
      }
      return t7;
    }
    throw new Error("Invalid color spec, you should either specify 'theme' or 'from' when using a config object");
  }
  return function() {
    return e7;
  };
};
var We = function(e7, r4) {
  return (0, import_react17.useMemo)(function() {
    return Qe2(e7, r4);
  }, [e7, r4]);
};
var Xe = import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.arrayOf(import_prop_types2.default.string), import_prop_types2.default.shape({ scheme: import_prop_types2.default.oneOf(Be).isRequired, size: import_prop_types2.default.number }), import_prop_types2.default.shape({ datum: import_prop_types2.default.string.isRequired }), import_prop_types2.default.string]);
var Ye = import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.func, import_prop_types2.default.shape({ theme: import_prop_types2.default.string.isRequired }), import_prop_types2.default.shape({ from: import_prop_types2.default.string.isRequired, modifiers: import_prop_types2.default.arrayOf(import_prop_types2.default.array) })]);
var fr = function(e7, r4) {
  if ("function" == typeof e7)
    return e7;
  var n4 = "function" == typeof r4 ? r4 : function(e8) {
    return (0, import_get2.default)(e8, r4);
  };
  if (Array.isArray(e7)) {
    var t7 = ordinal(e7), o4 = function(e8) {
      return t7(n4(e8));
    };
    return o4.scale = t7, o4;
  }
  if ((0, import_isPlainObject2.default)(e7)) {
    if (function(e8) {
      return void 0 !== e8.datum;
    }(e7))
      return function(r5) {
        return (0, import_get2.default)(r5, e7.datum);
      };
    if (function(e8) {
      return void 0 !== e8.scheme;
    }(e7)) {
      if (Fe(e7.scheme)) {
        var i4 = ordinal($e[e7.scheme]), u3 = function(e8) {
          return i4(n4(e8));
        };
        return u3.scale = i4, u3;
      }
      if (He(e7.scheme)) {
        if (void 0 !== e7.size && (e7.size < 3 || e7.size > 11))
          throw new Error("Invalid size '" + e7.size + "' for diverging color scheme '" + e7.scheme + "', must be between 3~11");
        var a5 = ordinal($e[e7.scheme][e7.size || 11]), l3 = function(e8) {
          return a5(n4(e8));
        };
        return l3.scale = a5, l3;
      }
      if (Je(e7.scheme)) {
        if (void 0 !== e7.size && (e7.size < 3 || e7.size > 9))
          throw new Error("Invalid size '" + e7.size + "' for sequential color scheme '" + e7.scheme + "', must be between 3~9");
        var s4 = ordinal($e[e7.scheme][e7.size || 9]), c11 = function(e8) {
          return s4(n4(e8));
        };
        return c11.scale = s4, c11;
      }
    }
    throw new Error("Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property");
  }
  return function() {
    return e7;
  };
};
var pr = function(e7, r4) {
  return (0, import_react17.useMemo)(function() {
    return fr(e7, r4);
  }, [e7, r4]);
};

// node_modules/@nivo/arcs/dist/nivo-arcs.es.js
function M2() {
  return M2 = Object.assign ? Object.assign.bind() : function(t7) {
    for (var n4 = 1; n4 < arguments.length; n4++) {
      var e7 = arguments[n4];
      for (var r4 in e7)
        Object.prototype.hasOwnProperty.call(e7, r4) && (t7[r4] = e7[r4]);
    }
    return t7;
  }, M2.apply(this, arguments);
}
var k3 = { pointerEvents: "none" };
var b2 = function(n4) {
  var e7 = n4.label, r4 = n4.style, a5 = Et();
  return (0, import_jsx_runtime3.jsx)(animated.g, { transform: r4.transform, opacity: r4.progress, style: k3, children: (0, import_jsx_runtime3.jsx)(animated.text, { textAnchor: "middle", dominantBaseline: "central", style: M2({}, a5.labels.text, { fill: r4.textColor }), children: e7 }) });
};
var C6 = function(t7) {
  var n4 = t7 % (2 * Math.PI);
  return n4 < 0 && (n4 += 2 * Math.PI), n4;
};
var L = function(t7, n4) {
  return t7.filter(function(t8) {
    return Math.abs(oi(t8.arc.endAngle - t8.arc.startAngle)) >= n4;
  });
};
var E5 = { startAngle: { enter: function(t7) {
  return M2({}, t7, { endAngle: t7.startAngle });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { startAngle: t7.endAngle });
} }, middleAngle: { enter: function(t7) {
  var n4 = t7.startAngle + (t7.endAngle - t7.startAngle) / 2;
  return M2({}, t7, { startAngle: n4, endAngle: n4 });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  var n4 = t7.startAngle + (t7.endAngle - t7.startAngle) / 2;
  return M2({}, t7, { startAngle: n4, endAngle: n4 });
} }, endAngle: { enter: function(t7) {
  return M2({}, t7, { startAngle: t7.endAngle });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { endAngle: t7.startAngle });
} }, innerRadius: { enter: function(t7) {
  return M2({}, t7, { outerRadius: t7.innerRadius });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { innerRadius: t7.outerRadius });
} }, centerRadius: { enter: function(t7) {
  var n4 = t7.innerRadius + (t7.outerRadius - t7.innerRadius) / 2;
  return M2({}, t7, { innerRadius: n4, outerRadius: n4 });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  var n4 = t7.innerRadius + (t7.outerRadius - t7.innerRadius) / 2;
  return M2({}, t7, { innerRadius: n4, outerRadius: n4 });
} }, outerRadius: { enter: function(t7) {
  return M2({}, t7, { innerRadius: t7.outerRadius });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { outerRadius: t7.innerRadius });
} }, pushIn: { enter: function(t7) {
  return M2({}, t7, { innerRadius: t7.innerRadius - t7.outerRadius + t7.innerRadius, outerRadius: t7.innerRadius });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { innerRadius: t7.outerRadius, outerRadius: t7.outerRadius + t7.outerRadius - t7.innerRadius });
} }, pushOut: { enter: function(t7) {
  return M2({}, t7, { innerRadius: t7.outerRadius, outerRadius: t7.outerRadius + t7.outerRadius - t7.innerRadius });
}, update: function(t7) {
  return t7;
}, leave: function(t7) {
  return M2({}, t7, { innerRadius: t7.innerRadius - t7.outerRadius + t7.innerRadius, outerRadius: t7.innerRadius });
} } };
var I = function(t7, n4) {
  return (0, import_react18.useMemo)(function() {
    var e7 = E5[t7];
    return { enter: function(t8) {
      return M2({ progress: 0 }, e7.enter(t8.arc), n4 ? n4.enter(t8) : {});
    }, update: function(t8) {
      return M2({ progress: 1 }, e7.update(t8.arc), n4 ? n4.update(t8) : {});
    }, leave: function(t8) {
      return M2({ progress: 0 }, e7.leave(t8.arc), n4 ? n4.leave(t8) : {});
    } };
  }, [t7, n4]);
};
var T2 = function(t7, n4) {
  var e7 = ai(t7) - Math.PI / 2, r4 = t7.innerRadius + (t7.outerRadius - t7.innerRadius) * n4;
  return li(e7, r4);
};
var j2 = function(t7) {
  return function(e7, r4, i4, a5) {
    return to2([e7, r4, i4, a5], function(n4, e8, r5, i5) {
      var a6 = T2({ startAngle: n4, endAngle: e8, innerRadius: r5, outerRadius: i5 }, t7);
      return "translate(" + a6.x + "," + a6.y + ")";
    });
  };
};
var W2 = function(t7, n4, r4, i4) {
  void 0 === n4 && (n4 = 0.5), void 0 === r4 && (r4 = "innerRadius");
  var a5 = Zr(), o4 = a5.animate, u3 = a5.config, l3 = I(r4, i4);
  return { transition: useTransition(t7, { keys: function(t8) {
    return t8.id;
  }, initial: l3.update, from: l3.enter, enter: l3.update, update: l3.update, leave: l3.leave, config: u3, immediate: !o4 }), interpolate: j2(n4) };
};
var S = function(t7) {
  var n4 = t7.data, e7 = t7.offset, r4 = void 0 === e7 ? 0.5 : e7, i4 = t7.skipAngle, a5 = void 0 === i4 ? 0 : i4, o4 = t7.computeExtraProps, u3 = void 0 === o4 ? function() {
    return {};
  } : o4;
  return (0, import_react18.useMemo)(function() {
    return L(n4, a5).map(function(t8) {
      var n5 = T2(t8.arc, r4);
      return M2({}, u3(t8), { x: n5.x, y: n5.y, data: t8 });
    });
  }, [n4, r4, a5, u3]);
};
var B4 = function(t7) {
  var n4 = t7.center, e7 = t7.data, r4 = t7.transitionMode, o4 = t7.label, u3 = t7.radiusOffset, l3 = t7.skipAngle, s4 = t7.textColor, f3 = t7.component, c11 = void 0 === f3 ? b2 : f3, g3 = Gi(o4), h3 = Et(), x6 = We(s4, h3), m4 = (0, import_react18.useMemo)(function() {
    return e7.filter(function(t8) {
      return Math.abs(oi(t8.arc.endAngle - t8.arc.startAngle)) >= l3;
    });
  }, [e7, l3]), y4 = W2(m4, u3, r4), k5 = y4.transition, C8 = y4.interpolate, L2 = c11;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + n4[0] + "," + n4[1] + ")", children: k5(function(t8, n5) {
    return (0, import_react18.createElement)(L2, { key: n5.id, datum: n5, label: g3(n5), style: M2({}, t8, { transform: C8(t8.startAngle, t8.endAngle, t8.innerRadius, t8.outerRadius), textColor: x6(n5) }) });
  }) });
};
var w2 = function(t7, n4, e7) {
  t7.textAlign = "center", t7.textBaseline = "middle", t7.font = e7.labels.text.fontSize + "px " + e7.labels.text.fontFamily, n4.forEach(function(n5) {
    t7.fillStyle = n5.textColor, t7.fillText("" + n5.label, n5.x, n5.y);
  });
};
var z3 = function(t7) {
  var n4 = t7.data, e7 = t7.offset, r4 = t7.skipAngle, a5 = t7.label, o4 = t7.textColor, u3 = Gi(a5), l3 = Et(), s4 = We(o4, l3), f3 = (0, import_react18.useCallback)(function(t8) {
    return { label: u3(t8), textColor: s4(t8) };
  }, [u3, s4]);
  return S({ data: n4, offset: e7, skipAngle: r4, computeExtraProps: f3 });
};
var G = function(n4) {
  var e7 = n4.label, r4 = n4.style, a5 = Et();
  return (0, import_jsx_runtime3.jsxs)(animated.g, { opacity: r4.opacity, children: [(0, import_jsx_runtime3.jsx)(animated.path, { fill: "none", stroke: r4.linkColor, strokeWidth: r4.thickness, d: r4.path }), (0, import_jsx_runtime3.jsx)(animated.text, { transform: r4.textPosition, textAnchor: r4.textAnchor, dominantBaseline: "central", style: M2({}, a5.labels.text, { fill: r4.textColor }), children: e7 })] });
};
var q = function(t7) {
  var n4 = C6(t7.startAngle + (t7.endAngle - t7.startAngle) / 2 - Math.PI / 2);
  return n4 < Math.PI / 2 || n4 > 1.5 * Math.PI ? "start" : "end";
};
var D4 = function(t7, n4, e7, r4) {
  var i4, a5, u3 = C6(t7.startAngle + (t7.endAngle - t7.startAngle) / 2 - Math.PI / 2), l3 = li(u3, t7.outerRadius + n4), s4 = li(u3, t7.outerRadius + n4 + e7);
  return u3 < Math.PI / 2 || u3 > 1.5 * Math.PI ? (i4 = "after", a5 = { x: s4.x + r4, y: s4.y }) : (i4 = "before", a5 = { x: s4.x - r4, y: s4.y }), { side: i4, points: [l3, s4, a5] };
};
var H = line_default().x(function(t7) {
  return t7.x;
}).y(function(t7) {
  return t7.y;
});
var J = function(t7, e7, r4, i4, a5, o4, u3) {
  return to2([t7, e7, r4, i4, a5, o4, u3], function(t8, n4, e8, r5, i5, a6, o5) {
    var u4 = D4({ startAngle: t8, endAngle: n4, innerRadius: e8, outerRadius: r5 }, i5, a6, o5).points;
    return H(u4);
  });
};
var K4 = function(t7, e7, r4, i4) {
  return to2([t7, e7, r4, i4], function(t8, n4, e8, r5) {
    return q({ startAngle: t8, endAngle: n4, innerRadius: e8, outerRadius: r5 });
  });
};
var N2 = function(t7, e7, r4, i4, a5, o4, u3, l3) {
  return to2([t7, e7, r4, i4, a5, o4, u3, l3], function(t8, n4, e8, r5, i5, a6, o5, u4) {
    var l4 = D4({ startAngle: t8, endAngle: n4, innerRadius: e8, outerRadius: r5 }, i5, a6, o5), s4 = l4.points, d3 = l4.side, f3 = s4[2];
    return "before" === d3 ? f3.x -= u4 : f3.x += u4, "translate(" + f3.x + "," + f3.y + ")";
  });
};
var Q = function(t7) {
  var n4 = t7.data, r4 = t7.offset, a5 = void 0 === r4 ? 0 : r4, o4 = t7.diagonalLength, u3 = t7.straightLength, l3 = t7.skipAngle, d3 = void 0 === l3 ? 0 : l3, f3 = t7.textOffset, c11 = t7.linkColor, g3 = t7.textColor, p4 = Zr(), h3 = p4.animate, A6 = p4.config, x6 = Et(), m4 = We(c11, x6), y4 = We(g3, x6), M3 = function(t8, n5) {
    return (0, import_react18.useMemo)(function() {
      return L(t8, n5);
    }, [t8, n5]);
  }(n4, d3), k5 = function(t8) {
    var n5 = t8.offset, e7 = t8.diagonalLength, r5 = t8.straightLength, i4 = t8.textOffset, a6 = t8.getLinkColor, o5 = t8.getTextColor;
    return (0, import_react18.useMemo)(function() {
      return { enter: function(t9) {
        return { startAngle: t9.arc.startAngle, endAngle: t9.arc.endAngle, innerRadius: t9.arc.innerRadius, outerRadius: t9.arc.outerRadius, offset: n5, diagonalLength: 0, straightLength: 0, textOffset: i4, linkColor: a6(t9), textColor: o5(t9), opacity: 0 };
      }, update: function(t9) {
        return { startAngle: t9.arc.startAngle, endAngle: t9.arc.endAngle, innerRadius: t9.arc.innerRadius, outerRadius: t9.arc.outerRadius, offset: n5, diagonalLength: e7, straightLength: r5, textOffset: i4, linkColor: a6(t9), textColor: o5(t9), opacity: 1 };
      }, leave: function(t9) {
        return { startAngle: t9.arc.startAngle, endAngle: t9.arc.endAngle, innerRadius: t9.arc.innerRadius, outerRadius: t9.arc.outerRadius, offset: n5, diagonalLength: 0, straightLength: 0, textOffset: i4, linkColor: a6(t9), textColor: o5(t9), opacity: 0 };
      } };
    }, [e7, r5, i4, a6, o5, n5]);
  }({ offset: a5, diagonalLength: o4, straightLength: u3, textOffset: f3, getLinkColor: m4, getTextColor: y4 });
  return { transition: useTransition(M3, { keys: function(t8) {
    return t8.id;
  }, initial: k5.update, from: k5.enter, enter: k5.update, update: k5.update, leave: k5.leave, config: A6, immediate: !h3 }), interpolateLink: J, interpolateTextAnchor: K4, interpolateTextPosition: N2 };
};
var U = function(t7) {
  var n4 = t7.center, e7 = t7.data, r4 = t7.label, i4 = t7.skipAngle, a5 = t7.offset, o4 = t7.diagonalLength, u3 = t7.straightLength, l3 = t7.strokeWidth, s4 = t7.textOffset, f3 = t7.textColor, c11 = t7.linkColor, g3 = t7.component, h3 = void 0 === g3 ? G : g3, v5 = Gi(r4), x6 = Q({ data: e7, skipAngle: i4, offset: a5, diagonalLength: o4, straightLength: u3, textOffset: s4, linkColor: c11, textColor: f3 }), R = x6.transition, m4 = x6.interpolateLink, y4 = x6.interpolateTextAnchor, k5 = x6.interpolateTextPosition, b4 = h3;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + n4[0] + "," + n4[1] + ")", children: R(function(t8, n5) {
    return (0, import_react18.createElement)(b4, { key: n5.id, datum: n5, label: v5(n5), style: M2({}, t8, { thickness: l3, path: m4(t8.startAngle, t8.endAngle, t8.innerRadius, t8.outerRadius, t8.offset, t8.diagonalLength, t8.straightLength), textAnchor: y4(t8.startAngle, t8.endAngle, t8.innerRadius, t8.outerRadius), textPosition: k5(t8.startAngle, t8.endAngle, t8.innerRadius, t8.outerRadius, t8.offset, t8.diagonalLength, t8.straightLength, t8.textOffset) }) });
  }) });
};
var V2 = function(t7, n4, e7, r4) {
  t7.textBaseline = "middle", t7.font = e7.labels.text.fontSize + "px " + e7.labels.text.fontFamily, n4.forEach(function(n5) {
    t7.fillStyle = n5.textColor, t7.textAlign = fi.canvas.align[n5.textAnchor], t7.fillText("" + n5.label, n5.x, n5.y), t7.beginPath(), t7.strokeStyle = n5.linkColor, t7.lineWidth = r4, n5.points.forEach(function(n6, e8) {
      0 === e8 ? t7.moveTo(n6.x, n6.y) : t7.lineTo(n6.x, n6.y);
    }), t7.stroke();
  });
};
var X = function(t7) {
  var n4 = t7.data, e7 = t7.skipAngle, r4 = void 0 === e7 ? 0 : e7, i4 = t7.offset, o4 = void 0 === i4 ? 0.5 : i4, u3 = t7.diagonalLength, l3 = t7.straightLength, s4 = t7.computeExtraProps, d3 = void 0 === s4 ? function() {
    return {};
  } : s4, f3 = (0, import_react18.useMemo)(function() {
    return n4.filter(function(t8) {
      return Math.abs(oi(t8.arc.endAngle - t8.arc.startAngle)) >= r4;
    }).map(function(t8) {
      return M2({}, D4(t8.arc, o4, u3, l3), { data: t8 });
    });
  }, [n4, r4, o4, u3, l3]);
  return (0, import_react18.useMemo)(function() {
    return f3.map(function(t8) {
      return M2({}, d3(t8), t8);
    });
  }, [f3, d3]);
};
var Y = function(t7) {
  var n4 = t7.data, e7 = t7.skipAngle, r4 = t7.offset, a5 = t7.diagonalLength, o4 = t7.straightLength, u3 = t7.textOffset, l3 = void 0 === u3 ? 0 : u3, s4 = t7.label, f3 = t7.linkColor, c11 = t7.textColor, g3 = Gi(s4), p4 = Et(), h3 = We(f3, p4), v5 = We(c11, p4), A6 = (0, import_react18.useCallback)(function(t8) {
    var n5, e8 = { x: t8.points[2].x, y: t8.points[2].y };
    return "before" === t8.side ? (e8.x -= l3, n5 = "end") : (e8.x += l3, n5 = "start"), M2({}, e8, { label: g3(t8.data), linkColor: h3(t8.data), textAnchor: n5, textColor: v5(t8.data) });
  }, [g3, h3, v5, l3]);
  return X({ data: n4, skipAngle: e7, offset: r4, diagonalLength: a5, straightLength: o4, computeExtraProps: A6 });
};
var tt = function(n4) {
  var e7 = n4.datum, r4 = n4.style, i4 = n4.onClick, a5 = n4.onMouseEnter, o4 = n4.onMouseMove, u3 = n4.onMouseLeave, l3 = (0, import_react18.useCallback)(function(t7) {
    return null == i4 ? void 0 : i4(e7, t7);
  }, [i4, e7]), s4 = (0, import_react18.useCallback)(function(t7) {
    return null == a5 ? void 0 : a5(e7, t7);
  }, [a5, e7]), d3 = (0, import_react18.useCallback)(function(t7) {
    return null == o4 ? void 0 : o4(e7, t7);
  }, [o4, e7]), f3 = (0, import_react18.useCallback)(function(t7) {
    return null == u3 ? void 0 : u3(e7, t7);
  }, [u3, e7]);
  return (0, import_jsx_runtime3.jsx)(animated.path, { d: r4.path, opacity: r4.opacity, fill: e7.fill || r4.color, stroke: r4.borderColor, strokeWidth: r4.borderWidth, onClick: i4 ? l3 : void 0, onMouseEnter: a5 ? s4 : void 0, onMouseMove: o4 ? d3 : void 0, onMouseLeave: u3 ? f3 : void 0 });
};
var nt = function(t7, e7, r4, i4, a5) {
  return to2([t7, e7, r4, i4], function(t8, n4, e8, r5) {
    return a5({ startAngle: t8, endAngle: n4, innerRadius: Math.max(0, e8), outerRadius: Math.max(0, r5) });
  });
};
var et2 = function(t7, n4, r4) {
  void 0 === n4 && (n4 = "innerRadius");
  var i4 = Zr(), a5 = i4.animate, o4 = i4.config, u3 = I(n4, r4);
  return { transition: useTransition(t7, { keys: function(t8) {
    return t8.id;
  }, initial: u3.update, from: u3.enter, enter: u3.update, update: u3.update, leave: u3.leave, config: o4, immediate: !a5 }), interpolate: nt };
};
var rt2 = function(t7) {
  var n4 = t7.center, e7 = t7.data, r4 = t7.arcGenerator, a5 = t7.borderWidth, o4 = t7.borderColor, u3 = t7.onClick, l3 = t7.onMouseEnter, s4 = t7.onMouseMove, d3 = t7.onMouseLeave, f3 = t7.transitionMode, c11 = t7.component, g3 = void 0 === c11 ? tt : c11, h3 = Et(), v5 = We(o4, h3), x6 = et2(e7, f3, { enter: function(t8) {
    return { opacity: 0, color: t8.color, borderColor: v5(t8) };
  }, update: function(t8) {
    return { opacity: 1, color: t8.color, borderColor: v5(t8) };
  }, leave: function(t8) {
    return { opacity: 0, color: t8.color, borderColor: v5(t8) };
  } }), m4 = x6.transition, y4 = x6.interpolate, k5 = g3;
  return (0, import_jsx_runtime3.jsx)("g", { transform: "translate(" + n4[0] + "," + n4[1] + ")", children: m4(function(t8, n5) {
    return (0, import_react18.createElement)(k5, { key: n5.id, datum: n5, style: M2({}, t8, { borderWidth: a5, path: y4(t8.startAngle, t8.endAngle, t8.innerRadius, t8.outerRadius, r4) }), onClick: u3, onMouseEnter: l3, onMouseMove: s4, onMouseLeave: d3 });
  }) });
};
var it2 = function(t7, n4, e7, r4, i4, a5) {
  void 0 === a5 && (a5 = true);
  var l3 = [], s4 = li(ni(r4), e7);
  l3.push([s4.x, s4.y]);
  var d3 = li(ni(i4), e7);
  l3.push([d3.x, d3.y]);
  for (var f3 = Math.round(Math.min(r4, i4)); f3 <= Math.round(Math.max(r4, i4)); f3++)
    if (f3 % 90 == 0) {
      var c11 = li(ni(f3), e7);
      l3.push([c11.x, c11.y]);
    }
  l3 = l3.map(function(e8) {
    var r5 = e8[0], i5 = e8[1];
    return [t7 + r5, n4 + i5];
  }), a5 && l3.push([t7, n4]);
  var g3 = l3.map(function(t8) {
    return t8[0];
  }), p4 = l3.map(function(t8) {
    return t8[1];
  }), h3 = Math.min.apply(Math, g3), v5 = Math.max.apply(Math, g3), A6 = Math.min.apply(Math, p4);
  return { points: l3, x: h3, y: A6, width: v5 - h3, height: Math.max.apply(Math, p4) - A6 };
};
var at = function(t7, n4, e7, r4, i4, a5) {
  var o4 = Di(i4, a5, t7, n4);
  return o4 < e7 && o4 > r4;
};
var ot = function(t7, n4, e7, r4, i4, a5, o4) {
  if (at(t7, n4, e7, r4, a5, o4)) {
    var u3 = Yi(a5, o4, t7, n4);
    return i4.find(function(t8) {
      var n5 = t8.startAngle, e8 = t8.endAngle;
      return u3 >= n5 && u3 < e8;
    });
  }
};
var lt = function(t7) {
  var n4 = void 0 === t7 ? {} : t7, e7 = n4.cornerRadius, r4 = void 0 === e7 ? 0 : e7, i4 = n4.padAngle, a5 = void 0 === i4 ? 0 : i4;
  return (0, import_react18.useMemo)(function() {
    return arc_default().innerRadius(function(t8) {
      return t8.innerRadius;
    }).outerRadius(function(t8) {
      return t8.outerRadius;
    }).cornerRadius(r4).padAngle(a5);
  }, [r4, a5]);
};

// node_modules/@nivo/legends/dist/nivo-legends.es.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var a3 = __toESM(require_react());
var import_react19 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var m3 = function(e7) {
  var i4 = e7.x, n4 = e7.y, o4 = e7.size, r4 = e7.fill, l3 = e7.opacity, a5 = void 0 === l3 ? 1 : l3, c11 = e7.borderWidth, s4 = void 0 === c11 ? 0 : c11, d3 = e7.borderColor;
  return (0, import_jsx_runtime4.jsx)("circle", { r: o4 / 2, cx: i4 + o4 / 2, cy: n4 + o4 / 2, fill: r4, opacity: a5, strokeWidth: s4, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } });
};
var f2 = function(e7) {
  var i4 = e7.x, n4 = e7.y, o4 = e7.size, r4 = e7.fill, l3 = e7.opacity, a5 = void 0 === l3 ? 1 : l3, c11 = e7.borderWidth, s4 = void 0 === c11 ? 0 : c11, d3 = e7.borderColor;
  return (0, import_jsx_runtime4.jsx)("g", { transform: "translate(" + i4 + "," + n4 + ")", children: (0, import_jsx_runtime4.jsx)("path", { d: "\n                    M" + o4 / 2 + " 0\n                    L" + 0.8 * o4 + " " + o4 / 2 + "\n                    L" + o4 / 2 + " " + o4 + "\n                    L" + 0.2 * o4 + " " + o4 / 2 + "\n                    L" + o4 / 2 + " 0\n                ", fill: r4, opacity: a5, strokeWidth: s4, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } }) });
};
var u2 = function(e7) {
  var i4 = e7.x, n4 = e7.y, o4 = e7.size, r4 = e7.fill, l3 = e7.opacity, a5 = void 0 === l3 ? 1 : l3, c11 = e7.borderWidth, s4 = void 0 === c11 ? 0 : c11, d3 = e7.borderColor;
  return (0, import_jsx_runtime4.jsx)("rect", { x: i4, y: n4, fill: r4, opacity: a5, strokeWidth: s4, stroke: void 0 === d3 ? "transparent" : d3, width: o4, height: o4, style: { pointerEvents: "none" } });
};
var v4 = function(e7) {
  var i4 = e7.x, n4 = e7.y, o4 = e7.size, r4 = e7.fill, l3 = e7.opacity, a5 = void 0 === l3 ? 1 : l3, c11 = e7.borderWidth, s4 = void 0 === c11 ? 0 : c11, d3 = e7.borderColor;
  return (0, import_jsx_runtime4.jsx)("g", { transform: "translate(" + i4 + "," + n4 + ")", children: (0, import_jsx_runtime4.jsx)("path", { d: "\n                M" + o4 / 2 + " 0\n                L" + o4 + " " + o4 + "\n                L0 " + o4 + "\n                L" + o4 / 2 + " 0\n            ", fill: r4, opacity: a5, strokeWidth: s4, stroke: void 0 === d3 ? "transparent" : d3, style: { pointerEvents: "none" } }) });
};
function p3() {
  return p3 = Object.assign ? Object.assign.bind() : function(t7) {
    for (var e7 = 1; e7 < arguments.length; e7++) {
      var i4 = arguments[e7];
      for (var n4 in i4)
        Object.prototype.hasOwnProperty.call(i4, n4) && (t7[n4] = i4[n4]);
    }
    return t7;
  }, p3.apply(this, arguments);
}
var b3 = { top: 0, right: 0, bottom: 0, left: 0 };
var k4 = function(t7) {
  var e7, i4 = t7.direction, n4 = t7.itemsSpacing, o4 = t7.padding, r4 = t7.itemCount, l3 = t7.itemWidth, a5 = t7.itemHeight;
  if ("number" != typeof o4 && ("object" != typeof (e7 = o4) || Array.isArray(e7) || null === e7))
    throw new Error("Invalid property padding, must be one of: number, object");
  var c11 = "number" == typeof o4 ? { top: o4, right: o4, bottom: o4, left: o4 } : p3({}, b3, o4), s4 = c11.left + c11.right, d3 = c11.top + c11.bottom, h3 = l3 + s4, g3 = a5 + d3, m4 = (r4 - 1) * n4;
  return "row" === i4 ? h3 = l3 * r4 + m4 + s4 : "column" === i4 && (g3 = a5 * r4 + m4 + d3), { width: h3, height: g3, padding: c11 };
};
var x5 = function(t7) {
  var e7 = t7.anchor, i4 = t7.translateX, n4 = t7.translateY, o4 = t7.containerWidth, r4 = t7.containerHeight, l3 = t7.width, a5 = t7.height, c11 = i4, s4 = n4;
  switch (e7) {
    case "top":
      c11 += (o4 - l3) / 2;
      break;
    case "top-right":
      c11 += o4 - l3;
      break;
    case "right":
      c11 += o4 - l3, s4 += (r4 - a5) / 2;
      break;
    case "bottom-right":
      c11 += o4 - l3, s4 += r4 - a5;
      break;
    case "bottom":
      c11 += (o4 - l3) / 2, s4 += r4 - a5;
      break;
    case "bottom-left":
      s4 += r4 - a5;
      break;
    case "left":
      s4 += (r4 - a5) / 2;
      break;
    case "center":
      c11 += (o4 - l3) / 2, s4 += (r4 - a5) / 2;
  }
  return { x: c11, y: s4 };
};
var S2 = function(t7) {
  var e7, i4, n4, o4, r4, l3, a5 = t7.direction, c11 = t7.justify, s4 = t7.symbolSize, d3 = t7.symbolSpacing, h3 = t7.width, g3 = t7.height;
  switch (a5) {
    case "left-to-right":
      e7 = 0, i4 = (g3 - s4) / 2, o4 = g3 / 2, l3 = "central", c11 ? (n4 = h3, r4 = "end") : (n4 = s4 + d3, r4 = "start");
      break;
    case "right-to-left":
      e7 = h3 - s4, i4 = (g3 - s4) / 2, o4 = g3 / 2, l3 = "central", c11 ? (n4 = 0, r4 = "start") : (n4 = h3 - s4 - d3, r4 = "end");
      break;
    case "top-to-bottom":
      e7 = (h3 - s4) / 2, i4 = 0, n4 = h3 / 2, r4 = "middle", c11 ? (o4 = g3, l3 = "alphabetic") : (o4 = s4 + d3, l3 = "text-before-edge");
      break;
    case "bottom-to-top":
      e7 = (h3 - s4) / 2, i4 = g3 - s4, n4 = h3 / 2, r4 = "middle", c11 ? (o4 = 0, l3 = "text-before-edge") : (o4 = g3 - s4 - d3, l3 = "alphabetic");
  }
  return { symbolX: e7, symbolY: i4, labelX: n4, labelY: o4, labelAnchor: r4, labelAlignment: l3 };
};
var C7 = { circle: m3, diamond: f2, square: u2, triangle: v4 };
var B5 = function(i4) {
  var n4, r4, l3, c11, h3, g3, m4, f3, u3, v5, y4, b4 = i4.x, k5 = i4.y, x6 = i4.width, A6 = i4.height, W4 = i4.data, O3 = i4.direction, z5 = void 0 === O3 ? "left-to-right" : O3, B6 = i4.justify, w4 = void 0 !== B6 && B6, X4 = i4.textColor, Y4 = i4.background, H4 = void 0 === Y4 ? "transparent" : Y4, E7 = i4.opacity, j4 = void 0 === E7 ? 1 : E7, T4 = i4.symbolShape, L2 = void 0 === T4 ? "square" : T4, M3 = i4.symbolSize, F3 = void 0 === M3 ? 16 : M3, P3 = i4.symbolSpacing, R = void 0 === P3 ? 8 : P3, q3 = i4.symbolBorderWidth, V3 = void 0 === q3 ? 0 : q3, D5 = i4.symbolBorderColor, G2 = void 0 === D5 ? "transparent" : D5, I2 = i4.onClick, N4 = i4.onMouseEnter, _2 = i4.onMouseLeave, J3 = i4.toggleSerie, K6 = i4.effects, Q3 = (0, import_react19.useState)({}), U3 = Q3[0], Z2 = Q3[1], $2 = Et(), tt2 = (0, import_react19.useCallback)(function(t7) {
    if (K6) {
      var e7 = K6.filter(function(t8) {
        return "hover" === t8.on;
      }).reduce(function(t8, e8) {
        return p3({}, t8, e8.style);
      }, {});
      Z2(e7);
    }
    null == N4 || N4(W4, t7);
  }, [N4, W4, K6]), et3 = (0, import_react19.useCallback)(function(t7) {
    if (K6) {
      var e7 = K6.filter(function(t8) {
        return "hover" !== t8.on;
      }).reduce(function(t8, e8) {
        return p3({}, t8, e8.style);
      }, {});
      Z2(e7);
    }
    null == _2 || _2(W4, t7);
  }, [_2, W4, K6]), it3 = S2({ direction: z5, justify: w4, symbolSize: null != (n4 = U3.symbolSize) ? n4 : F3, symbolSpacing: R, width: x6, height: A6 }), nt2 = it3.symbolX, ot2 = it3.symbolY, rt3 = it3.labelX, lt2 = it3.labelY, at2 = it3.labelAnchor, ct2 = it3.labelAlignment, st = [I2, N4, _2, J3].some(function(t7) {
    return void 0 !== t7;
  }), dt2 = "function" == typeof L2 ? L2 : C7[L2];
  return (0, import_jsx_runtime4.jsxs)("g", { transform: "translate(" + b4 + "," + k5 + ")", style: { opacity: null != (r4 = U3.itemOpacity) ? r4 : j4 }, children: [(0, import_jsx_runtime4.jsx)("rect", { width: x6, height: A6, fill: null != (l3 = U3.itemBackground) ? l3 : H4, style: { cursor: st ? "pointer" : "auto" }, onClick: function(t7) {
    null == I2 || I2(W4, t7), null == J3 || J3(W4.id);
  }, onMouseEnter: tt2, onMouseLeave: et3 }), a3.createElement(dt2, p3({ id: W4.id, x: nt2, y: ot2, size: null != (c11 = U3.symbolSize) ? c11 : F3, fill: null != (h3 = null != (g3 = W4.fill) ? g3 : W4.color) ? h3 : "black", borderWidth: null != (m4 = U3.symbolBorderWidth) ? m4 : V3, borderColor: null != (f3 = U3.symbolBorderColor) ? f3 : G2 }, W4.hidden ? $2.legends.hidden.symbol : void 0)), (0, import_jsx_runtime4.jsx)("text", { textAnchor: at2, style: p3({}, $2.legends.text, { fill: null != (u3 = null != (v5 = null != (y4 = U3.itemTextColor) ? y4 : X4) ? v5 : $2.legends.text.fill) ? u3 : "black", dominantBaseline: ct2, pointerEvents: "none", userSelect: "none" }, W4.hidden ? $2.legends.hidden.text : void 0), x: rt3, y: lt2, children: W4.label })] });
};
var w3 = function(e7) {
  var i4 = e7.data, n4 = e7.x, o4 = e7.y, r4 = e7.direction, l3 = e7.padding, a5 = void 0 === l3 ? 0 : l3, c11 = e7.justify, s4 = e7.effects, d3 = e7.itemWidth, h3 = e7.itemHeight, g3 = e7.itemDirection, m4 = void 0 === g3 ? "left-to-right" : g3, f3 = e7.itemsSpacing, u3 = void 0 === f3 ? 0 : f3, v5 = e7.itemTextColor, p4 = e7.itemBackground, y4 = void 0 === p4 ? "transparent" : p4, b4 = e7.itemOpacity, x6 = void 0 === b4 ? 1 : b4, S4 = e7.symbolShape, A6 = e7.symbolSize, W4 = e7.symbolSpacing, O3 = e7.symbolBorderWidth, z5 = e7.symbolBorderColor, C8 = e7.onClick, w4 = e7.onMouseEnter, X4 = e7.onMouseLeave, Y4 = e7.toggleSerie, H4 = k4({ itemCount: i4.length, itemWidth: d3, itemHeight: h3, itemsSpacing: u3, direction: r4, padding: a5 }).padding, E7 = "row" === r4 ? d3 + u3 : 0, j4 = "column" === r4 ? h3 + u3 : 0;
  return (0, import_jsx_runtime4.jsx)("g", { transform: "translate(" + n4 + "," + o4 + ")", children: i4.map(function(e8, i5) {
    return (0, import_jsx_runtime4.jsx)(B5, { data: e8, x: i5 * E7 + H4.left, y: i5 * j4 + H4.top, width: d3, height: h3, direction: m4, justify: c11, effects: s4, textColor: v5, background: y4, opacity: x6, symbolShape: S4, symbolSize: A6, symbolSpacing: W4, symbolBorderWidth: O3, symbolBorderColor: z5, onClick: C8, onMouseEnter: w4, onMouseLeave: X4, toggleSerie: Y4 }, i5);
  }) });
};
var X2 = function(e7) {
  var i4 = e7.data, n4 = e7.containerWidth, o4 = e7.containerHeight, r4 = e7.translateX, l3 = void 0 === r4 ? 0 : r4, a5 = e7.translateY, c11 = void 0 === a5 ? 0 : a5, s4 = e7.anchor, d3 = e7.direction, h3 = e7.padding, g3 = void 0 === h3 ? 0 : h3, m4 = e7.justify, f3 = e7.itemsSpacing, u3 = void 0 === f3 ? 0 : f3, v5 = e7.itemWidth, p4 = e7.itemHeight, y4 = e7.itemDirection, b4 = e7.itemTextColor, S4 = e7.itemBackground, A6 = e7.itemOpacity, W4 = e7.symbolShape, O3 = e7.symbolSize, z5 = e7.symbolSpacing, C8 = e7.symbolBorderWidth, B6 = e7.symbolBorderColor, X4 = e7.onClick, Y4 = e7.onMouseEnter, H4 = e7.onMouseLeave, E7 = e7.toggleSerie, j4 = e7.effects, T4 = k4({ itemCount: i4.length, itemsSpacing: u3, itemWidth: v5, itemHeight: p4, direction: d3, padding: g3 }), L2 = T4.width, M3 = T4.height, F3 = x5({ anchor: s4, translateX: l3, translateY: c11, containerWidth: n4, containerHeight: o4, width: L2, height: M3 }), P3 = F3.x, R = F3.y;
  return (0, import_jsx_runtime4.jsx)(w3, { data: i4, x: P3, y: R, direction: d3, padding: g3, justify: m4, effects: j4, itemsSpacing: u3, itemWidth: v5, itemHeight: p4, itemDirection: y4, itemTextColor: b4, itemBackground: S4, itemOpacity: A6, symbolShape: W4, symbolSize: O3, symbolSpacing: z5, symbolBorderWidth: C8, symbolBorderColor: B6, onClick: X4, onMouseEnter: Y4, onMouseLeave: H4, toggleSerie: "boolean" == typeof E7 ? void 0 : E7 });
};
var Y2 = { start: "left", middle: "center", end: "right" };
var H2 = function(t7, e7) {
  var i4 = e7.data, n4 = e7.containerWidth, o4 = e7.containerHeight, r4 = e7.translateX, l3 = void 0 === r4 ? 0 : r4, a5 = e7.translateY, c11 = void 0 === a5 ? 0 : a5, s4 = e7.anchor, d3 = e7.direction, h3 = e7.padding, g3 = void 0 === h3 ? 0 : h3, m4 = e7.justify, f3 = void 0 !== m4 && m4, u3 = e7.itemsSpacing, v5 = void 0 === u3 ? 0 : u3, p4 = e7.itemWidth, y4 = e7.itemHeight, b4 = e7.itemDirection, A6 = void 0 === b4 ? "left-to-right" : b4, W4 = e7.itemTextColor, O3 = e7.symbolSize, z5 = void 0 === O3 ? 16 : O3, C8 = e7.symbolSpacing, B6 = void 0 === C8 ? 8 : C8, w4 = e7.theme, X4 = k4({ itemCount: i4.length, itemWidth: p4, itemHeight: y4, itemsSpacing: v5, direction: d3, padding: g3 }), H4 = X4.width, E7 = X4.height, j4 = X4.padding, T4 = x5({ anchor: s4, translateX: l3, translateY: c11, containerWidth: n4, containerHeight: o4, width: H4, height: E7 }), L2 = T4.x, M3 = T4.y, F3 = "row" === d3 ? p4 + v5 : 0, P3 = "column" === d3 ? y4 + v5 : 0;
  t7.save(), t7.translate(L2, M3), t7.font = w4.legends.text.fontSize + "px " + (w4.legends.text.fontFamily || "sans-serif"), i4.forEach(function(e8, i5) {
    var n5, o5, r5 = i5 * F3 + j4.left, l4 = i5 * P3 + j4.top, a6 = S2({ direction: A6, justify: f3, symbolSize: z5, symbolSpacing: B6, width: p4, height: y4 }), c12 = a6.symbolX, s5 = a6.symbolY, d4 = a6.labelX, h4 = a6.labelY, g4 = a6.labelAnchor, m5 = a6.labelAlignment;
    t7.fillStyle = null != (n5 = e8.color) ? n5 : "black", t7.fillRect(r5 + c12, l4 + s5, z5, z5), t7.textAlign = Y2[g4], "central" === m5 && (t7.textBaseline = "middle"), t7.fillStyle = null != (o5 = null != W4 ? W4 : w4.legends.text.fill) ? o5 : "black", t7.fillText(String(e8.label), r5 + d4, l4 + h4);
  }), t7.restore();
};
var T3 = { data: import_prop_types3.default.arrayOf(import_prop_types3.default.object), anchor: import_prop_types3.default.oneOf(["top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", "center"]).isRequired, translateX: import_prop_types3.default.number, translateY: import_prop_types3.default.number, direction: import_prop_types3.default.oneOf(["row", "column"]).isRequired, itemsSpacing: import_prop_types3.default.number, itemWidth: import_prop_types3.default.number.isRequired, itemHeight: import_prop_types3.default.number.isRequired, itemDirection: import_prop_types3.default.oneOf(["left-to-right", "right-to-left", "top-to-bottom", "bottom-to-top"]), itemTextColor: import_prop_types3.default.string, itemBackground: import_prop_types3.default.string, itemOpacity: import_prop_types3.default.number, symbolShape: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["circle", "diamond", "square", "triangle"]), import_prop_types3.default.func]), symbolSize: import_prop_types3.default.number, symbolSpacing: import_prop_types3.default.number, symbolBorderWidth: import_prop_types3.default.number, symbolBorderColor: import_prop_types3.default.string, onClick: import_prop_types3.default.func, onMouseEnter: import_prop_types3.default.func, onMouseLeave: import_prop_types3.default.func, effects: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({ on: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["hover"])]).isRequired, style: import_prop_types3.default.shape({ itemTextColor: import_prop_types3.default.string, itemBackground: import_prop_types3.default.string, itemOpacity: import_prop_types3.default.number, symbolSize: import_prop_types3.default.number, symbolBorderWidth: import_prop_types3.default.number, symbolBorderColor: import_prop_types3.default.string }).isRequired })) };

// node_modules/@nivo/pie/dist/nivo-pie.es.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
function E6() {
  return E6 = Object.assign ? Object.assign.bind() : function(e7) {
    for (var t7 = 1; t7 < arguments.length; t7++) {
      var i4 = arguments[t7];
      for (var n4 in i4)
        Object.prototype.hasOwnProperty.call(i4, n4) && (e7[n4] = i4[n4]);
    }
    return e7;
  }, E6.apply(this, arguments);
}
function F2(e7, t7) {
  if (null == e7)
    return {};
  var i4, n4, a5 = {}, r4 = Object.keys(e7);
  for (n4 = 0; n4 < r4.length; n4++)
    i4 = r4[n4], t7.indexOf(i4) >= 0 || (a5[i4] = e7[i4]);
  return a5;
}
var H3;
var X3 = function(e7) {
  var t7 = e7.width, i4 = e7.height, n4 = e7.legends, a5 = e7.data, r4 = e7.toggleSerie;
  return (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: n4.map(function(e8, n5) {
    var o4;
    return (0, import_jsx_runtime5.jsx)(X2, E6({}, e8, { containerWidth: t7, containerHeight: i4, data: null != (o4 = e8.data) ? o4 : a5, toggleSerie: e8.toggleSerie ? r4 : void 0 }), n5);
  }) });
};
var Y3 = { id: "id", value: "value", sortByValue: false, innerRadius: 0, padAngle: 0, cornerRadius: 0, layers: ["arcs", "arcLinkLabels", "arcLabels", "legends"], startAngle: 0, endAngle: 360, fit: true, activeInnerRadiusOffset: 0, activeOuterRadiusOffset: 0, borderWidth: 0, borderColor: { from: "color", modifiers: [["darker", 1]] }, enableArcLabels: true, arcLabel: "formattedValue", arcLabelsSkipAngle: 0, arcLabelsRadiusOffset: 0.5, arcLabelsTextColor: { theme: "labels.text.fill" }, enableArcLinkLabels: true, arcLinkLabel: "id", arcLinkLabelsSkipAngle: 0, arcLinkLabelsOffset: 0, arcLinkLabelsDiagonalLength: 16, arcLinkLabelsStraightLength: 24, arcLinkLabelsThickness: 1, arcLinkLabelsTextOffset: 6, arcLinkLabelsTextColor: { theme: "labels.text.fill" }, arcLinkLabelsColor: { theme: "axis.ticks.line.stroke" }, colors: { scheme: "nivo" }, defs: [], fill: [], isInteractive: true, animate: true, motionConfig: "gentle", transitionMode: "innerRadius", tooltip: function(e7) {
  var t7 = e7.datum;
  return (0, import_jsx_runtime5.jsx)(w, { id: t7.id, value: t7.formattedValue, enableChip: true, color: t7.color });
}, legends: [], role: "img", pixelRatio: "undefined" != typeof window && null != (H3 = window.devicePixelRatio) ? H3 : 1 };
var j3 = ["points"];
var P2 = function(t7) {
  var i4 = t7.data, n4 = t7.id, a5 = void 0 === n4 ? Y3.id : n4, r4 = t7.value, o4 = void 0 === r4 ? Y3.value : r4, s4 = t7.valueFormat, c11 = t7.colors, u3 = void 0 === c11 ? Y3.colors : c11, v5 = Gi(a5), f3 = Gi(o4), g3 = Dt(s4), L2 = pr(u3, "id");
  return (0, import_react20.useMemo)(function() {
    return i4.map(function(e7) {
      var t8, i5 = v5(e7), n5 = f3(e7), a6 = { id: i5, label: null != (t8 = e7.label) ? t8 : i5, hidden: false, value: n5, formattedValue: g3(n5), data: e7 };
      return E6({}, a6, { color: L2(a6) });
    });
  }, [i4, v5, f3, g3, L2]);
};
var q2 = function(n4) {
  var a5 = n4.data, r4 = n4.startAngle, o4 = n4.endAngle, d3 = n4.innerRadius, l3 = n4.outerRadius, u3 = n4.padAngle, v5 = n4.sortByValue, f3 = n4.activeId, g3 = n4.activeInnerRadiusOffset, L2 = n4.activeOuterRadiusOffset, h3 = n4.hiddenIds, b4 = n4.forwardLegendData, A6 = (0, import_react20.useMemo)(function() {
    var e7 = pie_default().value(function(e8) {
      return e8.value;
    }).startAngle(ni(r4)).endAngle(ni(o4)).padAngle(ni(u3));
    return v5 || e7.sortValues(null), e7;
  }, [r4, o4, u3, v5]), p4 = (0, import_react20.useMemo)(function() {
    var e7 = a5.filter(function(e8) {
      return !h3.includes(e8.id);
    });
    return { dataWithArc: A6(e7).map(function(e8) {
      var t7 = Math.abs(e8.endAngle - e8.startAngle);
      return E6({}, e8.data, { arc: { index: e8.index, startAngle: e8.startAngle, endAngle: e8.endAngle, innerRadius: f3 === e8.data.id ? d3 - g3 : d3, outerRadius: f3 === e8.data.id ? l3 + L2 : l3, thickness: l3 - d3, padAngle: e8.padAngle, angle: t7, angleDeg: oi(t7) } });
    }), legendData: a5.map(function(e8) {
      return { id: e8.id, label: e8.label, color: e8.color, hidden: h3.includes(e8.id), data: e8 };
    }) };
  }, [A6, a5, h3, f3, d3, g3, l3, L2]), k5 = p4.legendData, I2 = (0, import_react20.useRef)(b4);
  return (0, import_react20.useEffect)(function() {
    "function" == typeof I2.current && I2.current(k5);
  }, [I2, k5]), p4;
};
var z4 = function(e7) {
  var t7 = e7.activeId, i4 = e7.onActiveIdChange, r4 = e7.defaultActiveId, o4 = void 0 !== t7, d3 = (0, import_react20.useState)(o4 ? null : void 0 === r4 ? null : r4), l3 = d3[0], s4 = d3[1];
  return { activeId: o4 ? t7 : l3, setActiveId: (0, import_react20.useCallback)(function(e8) {
    i4 && i4(e8), o4 || s4(e8);
  }, [o4, i4, s4]) };
};
var J2 = function(e7) {
  var t7 = e7.data, i4 = e7.radius, r4 = e7.innerRadius, o4 = e7.startAngle, d3 = void 0 === o4 ? Y3.startAngle : o4, l3 = e7.endAngle, c11 = void 0 === l3 ? Y3.endAngle : l3, u3 = e7.padAngle, v5 = void 0 === u3 ? Y3.padAngle : u3, f3 = e7.sortByValue, g3 = void 0 === f3 ? Y3.sortByValue : f3, L2 = e7.cornerRadius, h3 = void 0 === L2 ? Y3.cornerRadius : L2, b4 = e7.activeInnerRadiusOffset, p4 = void 0 === b4 ? Y3.activeInnerRadiusOffset : b4, k5 = e7.activeOuterRadiusOffset, I2 = void 0 === k5 ? Y3.activeOuterRadiusOffset : k5, R = e7.activeId, m4 = e7.onActiveIdChange, O3 = e7.defaultActiveId, C8 = e7.forwardLegendData, x6 = z4({ activeId: R, onActiveIdChange: m4, defaultActiveId: O3 }), w4 = x6.activeId, M3 = x6.setActiveId, y4 = (0, import_react20.useState)([]), W4 = y4[0], S4 = y4[1], T4 = q2({ data: t7, startAngle: d3, endAngle: c11, innerRadius: r4, outerRadius: i4, padAngle: v5, sortByValue: g3, activeId: w4, activeInnerRadiusOffset: p4, activeOuterRadiusOffset: I2, hiddenIds: W4, forwardLegendData: C8 }), D5 = (0, import_react20.useCallback)(function(e8) {
    S4(function(t8) {
      return t8.indexOf(e8) > -1 ? t8.filter(function(t9) {
        return t9 !== e8;
      }) : [].concat(t8, [e8]);
    });
  }, []);
  return E6({}, T4, { arcGenerator: lt({ cornerRadius: h3, padAngle: ni(v5) }), setActiveId: M3, toggleSerie: D5 });
};
var K5 = function(t7) {
  var i4 = t7.data, r4 = t7.width, o4 = t7.height, d3 = t7.innerRadius, l3 = void 0 === d3 ? Y3.innerRadius : d3, c11 = t7.startAngle, u3 = void 0 === c11 ? Y3.startAngle : c11, v5 = t7.endAngle, f3 = void 0 === v5 ? Y3.endAngle : v5, g3 = t7.padAngle, L2 = void 0 === g3 ? Y3.padAngle : g3, h3 = t7.sortByValue, b4 = void 0 === h3 ? Y3.sortByValue : h3, k5 = t7.cornerRadius, I2 = void 0 === k5 ? Y3.cornerRadius : k5, R = t7.fit, m4 = void 0 === R ? Y3.fit : R, O3 = t7.activeInnerRadiusOffset, C8 = void 0 === O3 ? Y3.activeInnerRadiusOffset : O3, x6 = t7.activeOuterRadiusOffset, w4 = void 0 === x6 ? Y3.activeOuterRadiusOffset : x6, M3 = t7.activeId, y4 = t7.onActiveIdChange, W4 = t7.defaultActiveId, S4 = t7.forwardLegendData, T4 = z4({ activeId: M3, onActiveIdChange: y4, defaultActiveId: W4 }), D5 = T4.activeId, V3 = T4.setActiveId, B6 = (0, import_react20.useState)([]), G2 = B6[0], H4 = B6[1], X4 = (0, import_react20.useMemo)(function() {
    var e7, t8 = Math.min(r4, o4) / 2, i5 = t8 * Math.min(l3, 1), n4 = r4 / 2, a5 = o4 / 2;
    if (m4) {
      var d4 = it2(n4, a5, t8, u3 - 90, f3 - 90), s4 = d4.points, c12 = F2(d4, j3), v6 = Math.min(r4 / c12.width, o4 / c12.height), g4 = { width: c12.width * v6, height: c12.height * v6 };
      g4.x = (r4 - g4.width) / 2, g4.y = (o4 - g4.height) / 2, n4 = (n4 - c12.x) / c12.width * c12.width * v6 + g4.x, a5 = (a5 - c12.y) / c12.height * c12.height * v6 + g4.y, e7 = { box: c12, ratio: v6, points: s4 }, t8 *= v6, i5 *= v6;
    }
    return { centerX: n4, centerY: a5, radius: t8, innerRadius: i5, debug: e7 };
  }, [r4, o4, l3, u3, f3, m4]), P3 = q2({ data: i4, startAngle: u3, endAngle: f3, innerRadius: X4.innerRadius, outerRadius: X4.radius, padAngle: L2, sortByValue: b4, activeId: D5, activeInnerRadiusOffset: C8, activeOuterRadiusOffset: w4, hiddenIds: G2, forwardLegendData: S4 }), J3 = (0, import_react20.useCallback)(function(e7) {
    H4(function(t8) {
      return t8.indexOf(e7) > -1 ? t8.filter(function(t9) {
        return t9 !== e7;
      }) : [].concat(t8, [e7]);
    });
  }, []);
  return E6({ arcGenerator: lt({ cornerRadius: I2, padAngle: ni(L2) }), activeId: D5, setActiveId: V3, toggleSerie: J3 }, P3, X4);
};
var N3 = function(t7) {
  var i4 = t7.dataWithArc, n4 = t7.arcGenerator, a5 = t7.centerX, r4 = t7.centerY, o4 = t7.radius, d3 = t7.innerRadius;
  return (0, import_react20.useMemo)(function() {
    return { dataWithArc: i4, arcGenerator: n4, centerX: a5, centerY: r4, radius: o4, innerRadius: d3 };
  }, [i4, n4, a5, r4, o4, d3]);
};
var Q2 = function(t7) {
  var i4 = t7.center, n4 = t7.data, a5 = t7.arcGenerator, o4 = t7.borderWidth, d3 = t7.borderColor, l3 = t7.isInteractive, s4 = t7.onClick, c11 = t7.onMouseEnter, u3 = t7.onMouseMove, v5 = t7.onMouseLeave, f3 = t7.setActiveId, g3 = t7.tooltip, L2 = t7.transitionMode, h3 = k(), b4 = h3.showTooltipFromEvent, A6 = h3.hideTooltip, p4 = (0, import_react20.useMemo)(function() {
    if (l3)
      return function(e7, t8) {
        null == s4 || s4(e7, t8);
      };
  }, [l3, s4]), I2 = (0, import_react20.useMemo)(function() {
    if (l3)
      return function(e7, t8) {
        b4((0, import_react20.createElement)(g3, { datum: e7 }), t8), f3(e7.id), null == c11 || c11(e7, t8);
      };
  }, [l3, b4, f3, c11, g3]), R = (0, import_react20.useMemo)(function() {
    if (l3)
      return function(e7, t8) {
        b4((0, import_react20.createElement)(g3, { datum: e7 }), t8), null == u3 || u3(e7, t8);
      };
  }, [l3, b4, u3, g3]), m4 = (0, import_react20.useMemo)(function() {
    if (l3)
      return function(e7, t8) {
        A6(), f3(null), null == v5 || v5(e7, t8);
      };
  }, [l3, A6, f3, v5]);
  return (0, import_jsx_runtime5.jsx)(rt2, { center: i4, data: n4, arcGenerator: a5, borderWidth: o4, borderColor: d3, transitionMode: L2, onClick: p4, onMouseEnter: I2, onMouseMove: R, onMouseLeave: m4 });
};
var U2 = ["isInteractive", "animate", "motionConfig", "theme", "renderWrapper"];
var Z = function(e7) {
  var t7 = e7.data, i4 = e7.id, n4 = void 0 === i4 ? Y3.id : i4, a5 = e7.value, d3 = void 0 === a5 ? Y3.value : a5, l3 = e7.valueFormat, s4 = e7.sortByValue, c11 = void 0 === s4 ? Y3.sortByValue : s4, u3 = e7.layers, L2 = void 0 === u3 ? Y3.layers : u3, h3 = e7.startAngle, b4 = void 0 === h3 ? Y3.startAngle : h3, A6 = e7.endAngle, p4 = void 0 === A6 ? Y3.endAngle : A6, k5 = e7.padAngle, m4 = void 0 === k5 ? Y3.padAngle : k5, O3 = e7.fit, C8 = void 0 === O3 ? Y3.fit : O3, x6 = e7.innerRadius, w4 = void 0 === x6 ? Y3.innerRadius : x6, M3 = e7.cornerRadius, y4 = void 0 === M3 ? Y3.cornerRadius : M3, S4 = e7.activeInnerRadiusOffset, T4 = void 0 === S4 ? Y3.activeInnerRadiusOffset : S4, D5 = e7.activeOuterRadiusOffset, V3 = void 0 === D5 ? Y3.activeOuterRadiusOffset : D5, B6 = e7.width, G2 = e7.height, E7 = e7.margin, F3 = e7.colors, H4 = void 0 === F3 ? Y3.colors : F3, j4 = e7.borderWidth, q3 = void 0 === j4 ? Y3.borderWidth : j4, z5 = e7.borderColor, J3 = void 0 === z5 ? Y3.borderColor : z5, U3 = e7.enableArcLabels, Z2 = void 0 === U3 ? Y3.enableArcLabels : U3, $2 = e7.arcLabel, _2 = void 0 === $2 ? Y3.arcLabel : $2, ee2 = e7.arcLabelsSkipAngle, te2 = void 0 === ee2 ? Y3.arcLabelsSkipAngle : ee2, ie2 = e7.arcLabelsTextColor, ne2 = void 0 === ie2 ? Y3.arcLabelsTextColor : ie2, ae = e7.arcLabelsRadiusOffset, re2 = void 0 === ae ? Y3.arcLabelsRadiusOffset : ae, oe = e7.arcLabelsComponent, de = e7.enableArcLinkLabels, le = void 0 === de ? Y3.enableArcLinkLabels : de, se = e7.arcLinkLabel, ce = void 0 === se ? Y3.arcLinkLabel : se, ue = e7.arcLinkLabelsSkipAngle, ve = void 0 === ue ? Y3.arcLinkLabelsSkipAngle : ue, fe = e7.arcLinkLabelsOffset, ge = void 0 === fe ? Y3.arcLinkLabelsOffset : fe, Le2 = e7.arcLinkLabelsDiagonalLength, he = void 0 === Le2 ? Y3.arcLinkLabelsDiagonalLength : Le2, be = e7.arcLinkLabelsStraightLength, Ae = void 0 === be ? Y3.arcLinkLabelsStraightLength : be, pe = e7.arcLinkLabelsThickness, ke = void 0 === pe ? Y3.arcLinkLabelsThickness : pe, Ie = e7.arcLinkLabelsTextOffset, Re2 = void 0 === Ie ? Y3.arcLinkLabelsTextOffset : Ie, me = e7.arcLinkLabelsTextColor, Oe2 = void 0 === me ? Y3.arcLinkLabelsTextColor : me, Ce2 = e7.arcLinkLabelsColor, xe = void 0 === Ce2 ? Y3.arcLinkLabelsColor : Ce2, we2 = e7.arcLinkLabelComponent, Me2 = e7.defs, ye = void 0 === Me2 ? Y3.defs : Me2, We2 = e7.fill, Se2 = void 0 === We2 ? Y3.fill : We2, Te2 = e7.isInteractive, De2 = void 0 === Te2 ? Y3.isInteractive : Te2, Ve2 = e7.onClick, Be2 = e7.onMouseEnter, Ge2 = e7.onMouseMove, Ee = e7.onMouseLeave, Fe2 = e7.tooltip, He2 = void 0 === Fe2 ? Y3.tooltip : Fe2, Xe2 = e7.activeId, Ye2 = e7.onActiveIdChange, je2 = e7.defaultActiveId, Pe2 = e7.transitionMode, qe2 = void 0 === Pe2 ? Y3.transitionMode : Pe2, ze = e7.legends, Je2 = void 0 === ze ? Y3.legends : ze, Ke2 = e7.forwardLegendData, Ne2 = e7.role, Qe3 = void 0 === Ne2 ? Y3.role : Ne2, Ue2 = Bt(B6, G2, E7), Ze2 = Ue2.outerWidth, $e2 = Ue2.outerHeight, _e2 = Ue2.margin, et3 = Ue2.innerWidth, tt2 = Ue2.innerHeight, it3 = P2({ data: t7, id: n4, value: d3, valueFormat: l3, colors: H4 }), nt2 = K5({ data: it3, width: et3, height: tt2, fit: C8, innerRadius: w4, startAngle: b4, endAngle: p4, padAngle: m4, sortByValue: c11, cornerRadius: y4, activeInnerRadiusOffset: T4, activeOuterRadiusOffset: V3, activeId: Xe2, onActiveIdChange: Ye2, defaultActiveId: je2, forwardLegendData: Ke2 }), at2 = nt2.dataWithArc, rt3 = nt2.legendData, ot2 = nt2.arcGenerator, dt2 = nt2.centerX, lt2 = nt2.centerY, st = nt2.radius, ct2 = nt2.innerRadius, ut2 = nt2.setActiveId, vt2 = nt2.toggleSerie, ft2 = Hi(ye, at2, Se2), gt2 = { arcs: null, arcLinkLabels: null, arcLabels: null, legends: null };
  L2.includes("arcs") && (gt2.arcs = (0, import_jsx_runtime5.jsx)(Q2, { center: [dt2, lt2], data: at2, arcGenerator: ot2, borderWidth: q3, borderColor: J3, isInteractive: De2, onClick: Ve2, onMouseEnter: Be2, onMouseMove: Ge2, onMouseLeave: Ee, setActiveId: ut2, tooltip: He2, transitionMode: qe2 }, "arcs")), le && L2.includes("arcLinkLabels") && (gt2.arcLinkLabels = (0, import_jsx_runtime5.jsx)(U, { center: [dt2, lt2], data: at2, label: ce, skipAngle: ve, offset: ge, diagonalLength: he, straightLength: Ae, strokeWidth: ke, textOffset: Re2, textColor: Oe2, linkColor: xe, component: we2 }, "arcLinkLabels")), Z2 && L2.includes("arcLabels") && (gt2.arcLabels = (0, import_jsx_runtime5.jsx)(B4, { center: [dt2, lt2], data: at2, label: _2, radiusOffset: re2, skipAngle: te2, textColor: ne2, transitionMode: qe2, component: oe }, "arcLabels")), Je2.length > 0 && L2.includes("legends") && (gt2.legends = (0, import_jsx_runtime5.jsx)(X3, { width: et3, height: tt2, data: rt3, legends: Je2, toggleSerie: vt2 }, "legends"));
  var Lt2 = N3({ dataWithArc: at2, arcGenerator: ot2, centerX: dt2, centerY: lt2, radius: st, innerRadius: ct2 });
  return (0, import_jsx_runtime5.jsx)(_i, { width: Ze2, height: $e2, margin: _e2, defs: ft2, role: Qe3, children: L2.map(function(e8, t8) {
    return void 0 !== gt2[e8] ? gt2[e8] : "function" == typeof e8 ? (0, import_jsx_runtime5.jsx)(import_react20.Fragment, { children: (0, import_react20.createElement)(e8, Lt2) }, t8) : null;
  }) });
};
var $ = function(e7) {
  var t7 = e7.isInteractive, i4 = void 0 === t7 ? Y3.isInteractive : t7, n4 = e7.animate, a5 = void 0 === n4 ? Y3.animate : n4, r4 = e7.motionConfig, o4 = void 0 === r4 ? Y3.motionConfig : r4, d3 = e7.theme, l3 = e7.renderWrapper, s4 = F2(e7, U2);
  return (0, import_jsx_runtime5.jsx)(Ht, { animate: a5, isInteractive: i4, motionConfig: o4, renderWrapper: l3, theme: d3, children: (0, import_jsx_runtime5.jsx)(Z, E6({ isInteractive: i4 }, s4)) });
};
var _ = function(e7) {
  return (0, import_jsx_runtime5.jsx)(Jt, { children: function(t7) {
    var i4 = t7.width, n4 = t7.height;
    return (0, import_jsx_runtime5.jsx)($, E6({ width: i4, height: n4 }, e7));
  } });
};
var ee = ["isInteractive", "theme", "renderWrapper"];
var te = function(n4) {
  var a5 = n4.data, o4 = n4.id, d3 = void 0 === o4 ? Y3.id : o4, l3 = n4.value, s4 = void 0 === l3 ? Y3.value : l3, c11 = n4.valueFormat, u3 = n4.sortByValue, f3 = void 0 === u3 ? Y3.sortByValue : u3, g3 = n4.startAngle, L2 = void 0 === g3 ? Y3.startAngle : g3, A6 = n4.endAngle, p4 = void 0 === A6 ? Y3.endAngle : A6, k5 = n4.padAngle, I2 = void 0 === k5 ? Y3.padAngle : k5, R = n4.fit, M3 = void 0 === R ? Y3.fit : R, S4 = n4.innerRadius, T4 = void 0 === S4 ? Y3.innerRadius : S4, D5 = n4.cornerRadius, B6 = void 0 === D5 ? Y3.cornerRadius : D5, F3 = n4.activeInnerRadiusOffset, H4 = void 0 === F3 ? Y3.activeInnerRadiusOffset : F3, X4 = n4.activeOuterRadiusOffset, j4 = void 0 === X4 ? Y3.activeOuterRadiusOffset : X4, q3 = n4.width, z5 = n4.height, J3 = n4.margin, N4 = n4.pixelRatio, Q3 = void 0 === N4 ? Y3.pixelRatio : N4, U3 = n4.colors, Z2 = void 0 === U3 ? Y3.colors : U3, $2 = n4.borderWidth, _2 = void 0 === $2 ? Y3.borderWidth : $2, ee2 = n4.borderColor, te2 = void 0 === ee2 ? Y3.borderColor : ee2, ie2 = n4.enableArcLabels, ne2 = void 0 === ie2 ? Y3.enableArcLabels : ie2, ae = n4.arcLabel, re2 = void 0 === ae ? Y3.arcLabel : ae, oe = n4.arcLabelsSkipAngle, de = void 0 === oe ? Y3.arcLabelsSkipAngle : oe, le = n4.arcLabelsTextColor, se = void 0 === le ? Y3.arcLabelsTextColor : le, ce = n4.arcLabelsRadiusOffset, ue = void 0 === ce ? Y3.arcLabelsRadiusOffset : ce, ve = n4.enableArcLinkLabels, fe = void 0 === ve ? Y3.enableArcLinkLabels : ve, ge = n4.arcLinkLabel, Le2 = void 0 === ge ? Y3.arcLinkLabel : ge, he = n4.arcLinkLabelsSkipAngle, be = void 0 === he ? Y3.arcLinkLabelsSkipAngle : he, Ae = n4.arcLinkLabelsOffset, pe = void 0 === Ae ? Y3.arcLinkLabelsOffset : Ae, ke = n4.arcLinkLabelsDiagonalLength, Ie = void 0 === ke ? Y3.arcLinkLabelsDiagonalLength : ke, Re2 = n4.arcLinkLabelsStraightLength, me = void 0 === Re2 ? Y3.arcLinkLabelsStraightLength : Re2, Oe2 = n4.arcLinkLabelsThickness, Ce2 = void 0 === Oe2 ? Y3.arcLinkLabelsThickness : Oe2, xe = n4.arcLinkLabelsTextOffset, we2 = void 0 === xe ? Y3.arcLinkLabelsTextOffset : xe, Me2 = n4.arcLinkLabelsTextColor, ye = void 0 === Me2 ? Y3.arcLinkLabelsTextColor : Me2, We2 = n4.arcLinkLabelsColor, Se2 = void 0 === We2 ? Y3.arcLinkLabelsColor : We2, Te2 = n4.isInteractive, De2 = void 0 === Te2 ? Y3.isInteractive : Te2, Ve2 = n4.onClick, Be2 = n4.onMouseMove, Ge2 = n4.tooltip, Ee = void 0 === Ge2 ? Y3.tooltip : Ge2, Fe2 = n4.activeId, He2 = n4.onActiveIdChange, Xe2 = n4.defaultActiveId, Ye2 = n4.legends, je2 = void 0 === Ye2 ? Y3.legends : Ye2, Pe2 = n4.forwardLegendData, qe2 = (0, import_react20.useRef)(null), ze = Et(), Je2 = Bt(q3, z5, J3), Ke2 = Je2.margin, Ne2 = Je2.innerWidth, Qe3 = Je2.innerHeight, Ue2 = Je2.outerWidth, Ze2 = Je2.outerHeight, $e2 = P2({ data: a5, id: d3, value: s4, valueFormat: c11, colors: Z2 }), _e2 = K5({ data: $e2, width: Ne2, height: Qe3, fit: M3, innerRadius: T4, startAngle: L2, endAngle: p4, padAngle: I2, sortByValue: f3, cornerRadius: B6, activeInnerRadiusOffset: H4, activeOuterRadiusOffset: j4, activeId: Fe2, onActiveIdChange: He2, defaultActiveId: Xe2, forwardLegendData: Pe2 }), et3 = _e2.dataWithArc, tt2 = _e2.arcGenerator, it3 = _e2.centerX, nt2 = _e2.centerY, at2 = _e2.radius, rt3 = _e2.innerRadius, ot2 = _e2.setActiveId, dt2 = We(te2, ze), lt2 = z3({ data: et3, label: re2, skipAngle: de, offset: ue, textColor: se }), st = Y({ data: et3, skipAngle: be, offset: pe, diagonalLength: Ie, straightLength: me, label: Le2, linkColor: Se2, textOffset: we2, textColor: ye });
  (0, import_react20.useEffect)(function() {
    if (qe2.current) {
      qe2.current.width = Ue2 * Q3, qe2.current.height = Ze2 * Q3;
      var e7 = qe2.current.getContext("2d");
      e7.scale(Q3, Q3), e7.fillStyle = ze.background, e7.fillRect(0, 0, Ue2, Ze2), e7.save(), e7.translate(Ke2.left, Ke2.top), tt2.context(e7), e7.save(), e7.translate(it3, nt2), et3.forEach(function(t7) {
        e7.beginPath(), e7.fillStyle = t7.color, e7.strokeStyle = dt2(t7), e7.lineWidth = _2, tt2(t7.arc), e7.fill(), _2 > 0 && e7.stroke();
      }), true === fe && V2(e7, st, ze, Ce2), true === ne2 && w2(e7, lt2, ze), e7.restore(), je2.forEach(function(t7) {
        H2(e7, E6({}, t7, { data: et3, containerWidth: Ne2, containerHeight: Qe3, theme: ze }));
      });
    }
  }, [qe2, Ne2, Qe3, Ue2, Ze2, Ke2.top, Ke2.left, Q3, it3, nt2, tt2, et3, _2, dt2, ne2, lt2, fe, st, Ce2, je2, ze]);
  var ct2 = (0, import_react20.useMemo)(function() {
    return et3.map(function(e7) {
      return E6({ id: e7.id }, e7.arc);
    });
  }, [et3]), ut2 = function(e7) {
    if (!qe2.current)
      return null;
    var t7 = Fi(qe2.current, e7), i4 = t7[0], n5 = t7[1], a6 = ot(Ke2.left + it3, Ke2.top + nt2, at2, rt3, ct2, i4, n5);
    return a6 ? et3.find(function(e8) {
      return e8.id === a6.id;
    }) : null;
  }, vt2 = k(), ft2 = vt2.showTooltipFromEvent, gt2 = vt2.hideTooltip, Lt2 = function(e7) {
    var t7 = ut2(e7);
    t7 ? (null == Be2 || Be2(t7, e7), ot2(t7.id), ft2((0, import_react20.createElement)(Ee, { datum: t7 }), e7)) : (ot2(null), gt2());
  };
  return (0, import_jsx_runtime5.jsx)("canvas", { ref: qe2, width: Ue2 * Q3, height: Ze2 * Q3, style: { width: Ue2, height: Ze2, cursor: De2 ? "auto" : "normal" }, onMouseEnter: De2 ? Lt2 : void 0, onMouseMove: De2 ? Lt2 : void 0, onMouseLeave: De2 ? function() {
    gt2();
  } : void 0, onClick: De2 ? function(e7) {
    if (Ve2) {
      var t7 = ut2(e7);
      t7 && Ve2(t7, e7);
    }
  } : void 0 });
};
var ie = function(e7) {
  var t7 = e7.isInteractive, i4 = void 0 === t7 ? Y3.isInteractive : t7, n4 = e7.theme, a5 = e7.renderWrapper, r4 = F2(e7, ee);
  return (0, import_jsx_runtime5.jsx)(Ht, { isInteractive: i4, renderWrapper: a5, theme: n4, children: (0, import_jsx_runtime5.jsx)(te, E6({ isInteractive: i4 }, r4)) });
};
var ne = function(e7) {
  return (0, import_jsx_runtime5.jsx)(Jt, { children: function(t7) {
    var i4 = t7.width, n4 = t7.height;
    return (0, import_jsx_runtime5.jsx)(ie, E6({ width: i4, height: n4 }, e7));
  } });
};
export {
  $ as Pie,
  ie as PieCanvas,
  _ as ResponsivePie,
  ne as ResponsivePieCanvas,
  Y3 as defaultProps,
  P2 as useNormalizedData,
  J2 as usePie,
  q2 as usePieArcs,
  K5 as usePieFromBox,
  N3 as usePieLayerContext
};
//# sourceMappingURL=@nivo_pie.js.map
