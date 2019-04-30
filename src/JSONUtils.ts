const JSONUtils = {
    /**
     * deep
     * @param {Object} obj source object
     * @returns deep copied object
     */
    deep: function (obj: any): any {
        // 再帰的にオブジェクトをコピーする関数
        const cloneObjectRecursive = (ret: Object, key: string): Object => {
            ret[key] = this.deep(obj[key]);
            return ret;
        }
        // 再帰的に配列をコピーする関数
        const cloneArrayRecursive = (item: any): any => {
            return this.deep(item)
        }
        switch (Object.prototype.toString.call(obj)) {
            case "[object Object]":
                return Object.keys(obj).reduce(cloneObjectRecursive, {})
            case "[object Array]":
                return obj.map(cloneArrayRecursive);
            case "[object String]":
            case "[object Number]":
            case "[object Null]":
            case "[object Undefined]":
            case "[object Boolean]":
                return obj;
            default:
                throw new Error("JSONとして使用できる方はObject,Array,Boolean,String,Number,Null,Undefinedのみです");
        }
    },
    /**
     * マージ元をマージ先オブジェクトへマージします。オブジェクト以外のものは無視されます
     * @param {Object} dist dist object
     * @param {Object} source source object
     * @returns merged object
     */
    merge: function (dist: Object, source: Object): Object {
        // 再帰的にオブジェクトをコピーする関数
        const cloneObjectRecursive = (ret: Object, key: string): Object => {
            ret[key] = this.deep(source[key]);
            return ret;
        }
        return Object.keys(source).reduce(cloneObjectRecursive, this.deep(dist));
    },
    /**
     * @param {any} target
     * @returns True if the target is a primitive
     */
    isPrimitive: (target: any): boolean => {
        return [
            "[object String]",
            "[object Number]",
            "[object Null]",
            "[object Undefined]",
            "[object Boolean]"
        ].some(type => type === Object.prototype.toString.call(target))
    }
};

export default JSONUtils;
