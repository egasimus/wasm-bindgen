(function() {
    var wasm;
    var memory;
    const __exports = {};


    const __wbg_log_875a8b4f03a0d521_target = console.log;

    let cachedTextDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== memory.buffer) {
            cachegetUint8Memory = new Uint8Array(memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().slice(ptr, ptr + len));
    }

    __exports.__wbg_log_875a8b4f03a0d521 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);
        __wbg_log_875a8b4f03a0d521_target(varg0);
    };

    const stack = [];

    function addBorrowedObject(obj) {
        stack.push(obj);
        return ((stack.length - 1) << 1) | 1;
    }

    const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

    let slab_next = slab.length;

    function addHeapObject(obj) {
        if (slab_next === slab.length) slab.push(slab.length + 1);
        const idx = slab_next;
        const next = slab[idx];

        slab_next = next;

        slab[idx] = { obj, cnt: 1 };
        return idx << 1;
    }

    function getObject(idx) {
        if ((idx & 1) === 1) {
            return stack[idx >> 1];
        } else {
            const val = slab[idx >> 1];

            return val.obj;

        }
    }

    function dropRef(idx) {

        idx = idx >> 1;
        if (idx < 4) return;
        let obj = slab[idx];

        obj.cnt -= 1;
        if (obj.cnt > 0) return;

        // If we hit 0 then free up our space in the slab
        slab[idx] = slab_next;
        slab_next = idx;
    }

    function takeObject(idx) {
        const ret = getObject(idx);
        dropRef(idx);
        return ret;
    }

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== memory.buffer) {
            cachegetUint32Memory = new Uint32Array(memory.buffer);
        }
        return cachegetUint32Memory;
    }

    __exports.__wbg_new_558a897481b09ebc = function(arg0, arg1, arg2, exnptr) {
        try {
            return addHeapObject(new ImageData(getObject(arg0), arg1, arg2));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };
    /**
    * @param {number} arg0
    * @returns {void}
    */
    __exports.child_entry_point = function(arg0) {
        return wasm.child_entry_point(arg0);
    };

    const __wbg_error_cc95a3d302735ca3_target = console.error;

    __exports.__wbg_error_cc95a3d302735ca3 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);

        varg0 = varg0.slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);

        __wbg_error_cc95a3d302735ca3_target(varg0);
    };

    const __widl_f_put_image_data_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.putImageData || function() {
        throw new Error(`wasm-bindgen: CanvasRenderingContext2D.putImageData does not exist`);
    };

    __exports.__widl_f_put_image_data_CanvasRenderingContext2D = function(arg0, arg1, arg2, arg3, exnptr) {
        try {
            __widl_f_put_image_data_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    const __widl_f_post_message_DedicatedWorkerGlobalScope_target = function(x0) {
        return this.postMessage(x0);
    };

    __exports.__widl_f_post_message_DedicatedWorkerGlobalScope = function(arg0, arg1, exnptr) {
        try {
            __widl_f_post_message_DedicatedWorkerGlobalScope_target.call(getObject(arg0), getObject(arg1));
        } catch (e) {
            const view = getUint32Memory();
            view[exnptr / 4] = 1;
            view[exnptr / 4 + 1] = addHeapObject(e);

        }
    };

    __exports.__widl_instanceof_ErrorEvent = function(idx) {
        return getObject(idx) instanceof ErrorEvent ? 1 : 0;
    };

    function GetOwnOrInheritedPropertyDescriptor(obj, id) {
        while (obj) {
            let desc = Object.getOwnPropertyDescriptor(obj, id);
            if (desc) return desc;
            obj = Object.getPrototypeOf(obj);
        }
    return {}
}

const __widl_f_message_ErrorEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof ErrorEvent === 'undefined' ? null : ErrorEvent.prototype, 'message').get || function() {
    throw new Error(`wasm-bindgen: ErrorEvent.message does not exist`);
};

let cachedTextEncoder = new TextEncoder('utf-8');

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}

__exports.__widl_f_message_ErrorEvent = function(ret, arg0) {

    const [retptr, retlen] = passStringToWasm(__widl_f_message_ErrorEvent_target.call(getObject(arg0)));
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

const __widl_f_type_Event_target = GetOwnOrInheritedPropertyDescriptor(typeof Event === 'undefined' ? null : Event.prototype, 'type').get || function() {
    throw new Error(`wasm-bindgen: Event.type does not exist`);
};

__exports.__widl_f_type_Event = function(ret, arg0) {

    const [retptr, retlen] = passStringToWasm(__widl_f_type_Event_target.call(getObject(arg0)));
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_instanceof_MessageEvent = function(idx) {
    return getObject(idx) instanceof MessageEvent ? 1 : 0;
};

const __widl_f_data_MessageEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MessageEvent === 'undefined' ? null : MessageEvent.prototype, 'data').get || function() {
    throw new Error(`wasm-bindgen: MessageEvent.data does not exist`);
};

__exports.__widl_f_data_MessageEvent = function(arg0) {
    return addHeapObject(__widl_f_data_MessageEvent_target.call(getObject(arg0)));
};

__exports.__widl_f_new_Worker = function(arg0, arg1, exnptr) {
    let varg0 = getStringFromWasm(arg0, arg1);
    try {
        return addHeapObject(new Worker(varg0));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_post_message_Worker_target = typeof Worker === 'undefined' ? null : Worker.prototype.postMessage || function() {
    throw new Error(`wasm-bindgen: Worker.postMessage does not exist`);
};

__exports.__widl_f_post_message_Worker = function(arg0, arg1, exnptr) {
    try {
        __widl_f_post_message_Worker_target.call(getObject(arg0), getObject(arg1));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_terminate_Worker_target = typeof Worker === 'undefined' ? null : Worker.prototype.terminate || function() {
    throw new Error(`wasm-bindgen: Worker.terminate does not exist`);
};

__exports.__widl_f_terminate_Worker = function(arg0) {
    __widl_f_terminate_Worker_target.call(getObject(arg0));
};

const __widl_f_set_onmessage_Worker_target = GetOwnOrInheritedPropertyDescriptor(typeof Worker === 'undefined' ? null : Worker.prototype, 'onmessage').set || function() {
    throw new Error(`wasm-bindgen: Worker.onmessage does not exist`);
};

__exports.__widl_f_set_onmessage_Worker = function(arg0, arg1) {
    __widl_f_set_onmessage_Worker_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_set_onerror_Worker_target = GetOwnOrInheritedPropertyDescriptor(typeof Worker === 'undefined' ? null : Worker.prototype, 'onerror').set || function() {
    throw new Error(`wasm-bindgen: Worker.onerror does not exist`);
};

__exports.__widl_f_set_onerror_Worker = function(arg0, arg1) {
    __widl_f_set_onerror_Worker_target.call(getObject(arg0), getObject(arg1));
};

__exports.__wbg_instanceof_Array_36326669a633acf5 = function(idx) {
    return getObject(idx) instanceof Array ? 1 : 0;
};

__exports.__wbg_new_7a259c7860f1b5c4 = function() {
    return addHeapObject(new Array());
};

const __wbg_pop_527d3858152800c8_target = typeof Array === 'undefined' ? null : Array.prototype.pop || function() {
    throw new Error(`wasm-bindgen: Array.pop does not exist`);
};

__exports.__wbg_pop_527d3858152800c8 = function(arg0) {
    return addHeapObject(__wbg_pop_527d3858152800c8_target.call(getObject(arg0)));
};

const __wbg_push_236df23a2ba3782d_target = typeof Array === 'undefined' ? null : Array.prototype.push || function() {
    throw new Error(`wasm-bindgen: Array.push does not exist`);
};

__exports.__wbg_push_236df23a2ba3782d = function(arg0, arg1) {
    return __wbg_push_236df23a2ba3782d_target.call(getObject(arg0), getObject(arg1));
};

__exports.__wbg_new_d85589be79b6c4df = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Error(varg0));
};

__exports.__wbg_newnoargs_f3005d02efe69623 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

const __wbg_call_10738551fb4d99e4_target = typeof Function === 'undefined' ? null : Function.prototype.call || function() {
    throw new Error(`wasm-bindgen: Function.call does not exist`);
};

__exports.__wbg_call_10738551fb4d99e4 = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(__wbg_call_10738551fb4d99e4_target.call(getObject(arg0), getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __wbg_call_eeece939fc9a62db_target = typeof Function === 'undefined' ? null : Function.prototype.call || function() {
    throw new Error(`wasm-bindgen: Function.call does not exist`);
};

__exports.__wbg_call_eeece939fc9a62db = function(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(__wbg_call_eeece939fc9a62db_target.call(getObject(arg0), getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_new_118c4e6323ca4eb1 = function(arg0) {
    return addHeapObject(new Uint8ClampedArray(getObject(arg0)));
};

const __wbg_slice_b9d6ae7dd8805420_target = typeof Uint8ClampedArray === 'undefined' ? null : Uint8ClampedArray.prototype.slice || function() {
    throw new Error(`wasm-bindgen: Uint8ClampedArray.slice does not exist`);
};

__exports.__wbg_slice_b9d6ae7dd8805420 = function(arg0, arg1, arg2) {
    return addHeapObject(__wbg_slice_b9d6ae7dd8805420_target.call(getObject(arg0), arg1, arg2));
};

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

function getGlobalArgument(arg) {
    const idx = globalArgumentPtr() / 4 + arg;
    return getUint32Memory()[idx];
}

__exports.__wbg_new_ea60e716adf807fe = function(arg0) {
    let cbarg0 = function(arg0, arg1) {
        let a = this.a;
        this.a = 0;
        try {
            return this.f(a, this.b, addHeapObject(arg0), addHeapObject(arg1));

        } finally {
            this.a = a;

        }

    };
    cbarg0.f = wasm.__wbg_function_table.get(arg0);
    cbarg0.a = getGlobalArgument(0);
    cbarg0.b = getGlobalArgument(0 + 1);
    try {
        return addHeapObject(new Promise(cbarg0.bind(cbarg0)));
    } finally {
        cbarg0.a = cbarg0.b = 0;

    }
};

const __wbg_buffer_85f7dfee8f163ee8_target = GetOwnOrInheritedPropertyDescriptor(typeof WebAssembly.Memory === 'undefined' ? null : WebAssembly.Memory.prototype, 'buffer').get || function() {
    throw new Error(`wasm-bindgen: WebAssembly.Memory.buffer does not exist`);
};

__exports.__wbg_buffer_85f7dfee8f163ee8 = function(arg0) {
    return addHeapObject(__wbg_buffer_85f7dfee8f163ee8_target.call(getObject(arg0)));
};

function freeScene(ptr) {

    wasm.__wbg_scene_free(ptr);
}
/**
*/
class Scene {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeScene(ptr);
    }

    /**
    * @param {any} arg0
    * @returns {}
    */
    constructor(arg0) {
        try {
            this.ptr = wasm.scene_new(addBorrowedObject(arg0));

        } finally {
            stack.pop();

        }

    }
    /**
    * @param {number} arg0
    * @param {WorkerPool} arg1
    * @param {any} arg2
    * @returns {RenderingScene}
    */
    render(arg0, arg1, arg2) {
        const ptr = this.ptr;
        this.ptr = 0;
        const ptr1 = arg1.ptr;
        if (ptr1 === 0) {
            throw new Error('Attempt to use a moved value');
        }
        arg1.ptr = 0;
        return RenderingScene.__wrap(wasm.scene_render(ptr, arg0, ptr1, addHeapObject(arg2)));
    }
}
__exports.Scene = Scene;

function freeRenderingScene(ptr) {

    wasm.__wbg_renderingscene_free(ptr);
}
/**
*/
class RenderingScene {

    static __wrap(ptr) {
        const obj = Object.create(RenderingScene.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeRenderingScene(ptr);
    }

    /**
    * @returns {any}
    */
    promise() {
        return takeObject(wasm.renderingscene_promise(this.ptr));
    }
    /**
    * @returns {void}
    */
    requestUpdate() {
        return wasm.renderingscene_requestUpdate(this.ptr);
    }
    /**
    * @returns {WorkerPool}
    */
    cancel() {
        const ptr = this.ptr;
        this.ptr = 0;
        return WorkerPool.__wrap(wasm.renderingscene_cancel(ptr));
    }
}
__exports.RenderingScene = RenderingScene;

function freeWorkerPool(ptr) {

    wasm.__wbg_workerpool_free(ptr);
}
/**
*/
class WorkerPool {

    static __wrap(ptr) {
        const obj = Object.create(WorkerPool.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeWorkerPool(ptr);
    }

    /**
    * @param {number} arg0
    * @returns {}
    */
    constructor(arg0) {
        this.ptr = wasm.workerpool_new(arg0);
    }
}
__exports.WorkerPool = WorkerPool;

__exports.__wbindgen_object_clone_ref = function(idx) {
    // If this object is on the stack promote it to the heap.
    if ((idx & 1) === 1) return addHeapObject(getObject(idx));

    // Otherwise if the object is on the heap just bump the
    // refcount and move on
    const val = slab[idx >> 1];
    val.cnt += 1;
    return idx;
};

__exports.__wbindgen_object_drop_ref = function(i) {
    dropRef(i);
};

__exports.__wbindgen_string_new = function(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
};

__exports.__wbindgen_number_new = function(i) {
    return addHeapObject(i);
};

__exports.__wbindgen_number_get = function(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
};

__exports.__wbindgen_is_null = function(idx) {
    return getObject(idx) === null ? 1 : 0;
};

__exports.__wbindgen_is_undefined = function(idx) {
    return getObject(idx) === undefined ? 1 : 0;
};

__exports.__wbindgen_boolean_get = function(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
};

__exports.__wbindgen_is_symbol = function(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
};

__exports.__wbindgen_string_get = function(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const [ptr, len] = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = len;
    return ptr;
};

__exports.__wbindgen_cb_drop = function(i) {
    const obj = getObject(i).original;
    dropRef(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
};

__exports.__wbindgen_json_serialize = function(idx, ptrptr) {
    const [ptr, len] = passStringToWasm(JSON.stringify(getObject(idx)));
    getUint32Memory()[ptrptr / 4] = ptr;
    return len;
};

__exports.__wbindgen_memory = function() {
    return addHeapObject(memory);
};

__exports.__wbindgen_module = function() {
    return addHeapObject(init.__wbindgen_wasm_module);
};

__exports.__wbindgen_rethrow = function(idx) { throw takeObject(idx); };

__exports.__wbindgen_closure_wrapper141 = function(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper143 = function(a, b, fi, di, _ignored) {
    const f = wasm.__wbg_function_table.get(fi);
    const d = wasm.__wbg_function_table.get(di);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_throw = function(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
};

function init(module_or_path, maybe_memory) {
    let result;
    const imports = { './raytrace_parallel': __exports };
    if (module_or_path instanceof WebAssembly.Module) {
        memory = __exports.memory = maybe_memory;
        result = WebAssembly.instantiate(module_or_path, imports)
        .then(instance => {
        return { instance, module: module_or_path }
    });
} else {
    memory = __exports.memory = new WebAssembly.Memory({initial:17,maximum:16384,shared:true});
    const response = fetch(module_or_path);
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        result = WebAssembly.instantiateStreaming(response, imports);
    } else {
        result = response
        .then(r => r.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes, imports));
    }
}
return result.then(({instance, module}) => {
    wasm = init.wasm = instance.exports;
    init.__wbindgen_wasm_instance = instance;
    init.__wbindgen_wasm_module = module;
    init.__wbindgen_wasm_memory = __exports.memory;
});
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
