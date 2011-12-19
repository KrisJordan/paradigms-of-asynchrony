var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_0 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    var fs = require ( 'fs' ) ;
    
    var copyFile =
    function  (source, dest, callback) {
        var __tame_defer_cb = tame.findDeferCb ([source, dest, callback]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_fn_1 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var __tame_fn_2 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_defers = new tame.Deferrals (__tame_k);
                var __tame_fn_3 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    fs . open ( source , 'r' ,
                    __tame_defers.defer ( { 
                        assign_fn : 
                            function () {
                                err = arguments[0];
                                sourceFd = arguments[1];
                            }
                            ,
                        parent_cb : __tame_defer_cb,
                        line : 5,
                        file : "solution-3-tame.tjs"
                    } )
                    ) ;
                    fs . open ( dest , 'w' ,
                    __tame_defers.defer ( { 
                        assign_fn : 
                            function () {
                                err = arguments[0];
                                destFd = arguments[1];
                            }
                            ,
                        parent_cb : __tame_defer_cb,
                        line : 6,
                        file : "solution-3-tame.tjs"
                    } )
                    ) ;
                    tame.callChain([__tame_k]);
                    tame.setActiveCb (null);
                };
                __tame_fn_3(tame.end);
                __tame_defers._fulfill();
                tame.setActiveCb (null);
            };
            var __tame_fn_4 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_k_implicit = {};
                var __tame_fn_5 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_6 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        var __tame_fn_7 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            var __tame_defers = new tame.Deferrals (__tame_k);
                            var __tame_fn_8 = function (__tame_k) {
                                tame.setActiveCb (__tame_defer_cb);
                                fs . read ( sourceFd , new Buffer ( 8 ) , 0 , 8 , null ,
                                __tame_defers.defer ( { 
                                    assign_fn : 
                                        function () {
                                            err = arguments[0];
                                            bytesRead = arguments[1];
                                            buffer = arguments[2];
                                        }
                                        ,
                                    parent_cb : __tame_defer_cb,
                                    line : 11,
                                    file : "solution-3-tame.tjs"
                                } )
                                ) ;
                                tame.callChain([__tame_k]);
                                tame.setActiveCb (null);
                            };
                            __tame_fn_8(tame.end);
                            __tame_defers._fulfill();
                            tame.setActiveCb (null);
                        };
                        var __tame_fn_9 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            var __tame_defers = new tame.Deferrals (__tame_k);
                            var __tame_fn_10 = function (__tame_k) {
                                tame.setActiveCb (__tame_defer_cb);
                                fs . write ( destFd , buffer , 0 , bytesRead , null ,
                                __tame_defers.defer ( { 
                                    parent_cb : __tame_defer_cb,
                                    line : 14,
                                    file : "solution-3-tame.tjs"
                                } )
                                ) ;
                                tame.callChain([__tame_k]);
                                tame.setActiveCb (null);
                            };
                            __tame_fn_10(tame.end);
                            __tame_defers._fulfill();
                            tame.setActiveCb (null);
                        };
                        tame.callChain([__tame_fn_7, __tame_fn_9, __tame_k]);
                        tame.setActiveCb (null);
                    };
                    var __tame_fn_11 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        if (bytesRead > 0) {
                            tame.callChain([__tame_fn_5, __tame_k]);
                        } else { 
                            tame.callChain([__tame_k]);
                        }
                        tame.setActiveCb (null);
                    };
                    tame.callChain([__tame_fn_6, __tame_fn_11, __tame_k]);
                    tame.setActiveCb (null);
                };
                __tame_k_implicit.k_break = __tame_k;
                __tame_k_implicit.k_continue = function() { __tame_fn_5(__tame_k); };
                tame.callChain([__tame_fn_5, __tame_k]);
                tame.setActiveCb (null);
            };
            var __tame_fn_16 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                ;
                var __tame_fn_12 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_13 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        var __tame_defers = new tame.Deferrals (__tame_k);
                        var __tame_fn_14 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            fs . close ( sourceFd ,
                            __tame_defers.defer ( { 
                                parent_cb : __tame_defer_cb,
                                line : 19,
                                file : "solution-3-tame.tjs"
                            } )
                            ) ;
                            fs . close ( destFd ,
                            __tame_defers.defer ( { 
                                parent_cb : __tame_defer_cb,
                                line : 20,
                                file : "solution-3-tame.tjs"
                            } )
                            ) ;
                            tame.callChain([__tame_k]);
                            tame.setActiveCb (null);
                        };
                        __tame_fn_14(tame.end);
                        __tame_defers._fulfill();
                        tame.setActiveCb (null);
                    };
                    var __tame_fn_15 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        callback ( null , true ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    tame.callChain([__tame_fn_13, __tame_fn_15, __tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_12, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_2, __tame_fn_4, __tame_fn_16, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_1, __tame_k]);
        tame.setActiveCb (null);
    }
    ;
    
    copyFile ( 'test/a.txt' , 'test/b.txt' ,
    function  (err, success) {
        console . log ( 'Copy complete!' ) ;
    }
    ) ;
    tame.callChain([__tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_0 (tame.end);