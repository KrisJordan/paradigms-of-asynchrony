var tame = require('tamejs').runtime;
var __tame_defer_cb = null;
var __tame_fn_0 = function (__tame_k) {
    tame.setActiveCb (__tame_defer_cb);
    var _ = require ( 'underscore' ) ,
    fs = require ( 'fs' ) ;
    
    var files = [ 'test/a.txt' , 'test/b.txt' , 'test/c.txt' ] ;
    
    var mtimeAsync =
    function  (file, callback) {
        fs . stat ( file ,
        function  (err, stat) {
            var error = null ;
            callback ( error , stat . mtime . getTime ( ) ) ;
        }
        ) ;
    }
    ;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var asyncMap =
    function  (arr, fnToMap, callback) {
        var __tame_defer_cb = tame.findDeferCb ([arr, fnToMap, callback]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_fn_9 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var results = [ ] ,
            i = 0 ;
            var __tame_fn_1 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_2 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_k_implicit = {};
                    var __tame_fn_3 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        if (i < arr . length) {
                            var __tame_fn_4 = function (__tame_k) {
                                tame.setActiveCb (__tame_defer_cb);
                                var __tame_fn_5 = function (__tame_k) {
                                    tame.setActiveCb (__tame_defer_cb);
                                    var __tame_defers = new tame.Deferrals (__tame_k);
                                    var __tame_fn_6 = function (__tame_k) {
                                        tame.setActiveCb (__tame_defer_cb);
                                        fnToMap ( arr [ i ] ,
                                        __tame_defers.defer ( { 
                                            assign_fn : 
                                                function () {
                                                    err = arguments[0];
                                                    result = arguments[1];
                                                }
                                                ,
                                            parent_cb : __tame_defer_cb,
                                            line : 35,
                                            file : "solution-3-tame.tjs"
                                        } )
                                        ) ;
                                        tame.callChain([__tame_k]);
                                        tame.setActiveCb (null);
                                    };
                                    __tame_fn_6(tame.end);
                                    __tame_defers._fulfill();
                                    tame.setActiveCb (null);
                                };
                                var __tame_fn_7 = function (__tame_k) {
                                    tame.setActiveCb (__tame_defer_cb);
                                    results [ i ] = result ;
                                    i ++ ;
                                    tame.callChain([__tame_k]);
                                    tame.setActiveCb (null);
                                };
                                tame.callChain([__tame_fn_5, __tame_fn_7, __tame_k]);
                                tame.setActiveCb (null);
                            };
                            tame.callChain([__tame_fn_4, __tame_fn_3, __tame_k]);
                        } else {
                            tame.callChain([__tame_k]);
                        }
                        tame.setActiveCb (null);
                    };
                    __tame_k_implicit.k_break = __tame_k;
                    __tame_k_implicit.k_continue = function() { __tame_fn_3(__tame_k); };
                    tame.callChain([__tame_fn_3, __tame_k]);
                    tame.setActiveCb (null);
                };
                var __tame_fn_8 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    callback ( null , results ) ;
                    tame.callChain([__tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_2, __tame_fn_8, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_1, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_9, __tame_k]);
        tame.setActiveCb (null);
    }
    ;
    
    var asyncMap =
    function  (arr, fnToMap, callback) {
        var results = [ ] ,
        i = 0 ;
        
        var beginWhile ,
        enterAwait ,
        continueAfterAwait ,
        afterWhile ;
        
        
        beginWhile =
        function  () {
            if (i < arr . length) {
                enterAwait ( ) ;
            } else {
                afterWhile ( ) ;
            }
        }
        ;
        
        
        
        
        enterAwait =
        function  () {
            fnToMap ( arr [ i ] , continueAfterAwait ) ;
        }
        ;
        
        
        
        
        continueAfterAwait =
        function  (err, result) {
            results [ i ] = result ;
            i ++ ;
            beginWhile ( ) ;
        }
        ;
        
        
        afterWhile =
        function  () {
            callback ( null , results ) ;
        }
        ;
        
        
        beginWhile ( ) ;
    }
    ;
    
    var asyncMap =
    function  (arr, fnToMap, callback) {
        var __tame_defer_cb = tame.findDeferCb ([arr, fnToMap, callback]);
        tame.setActiveCb (__tame_defer_cb);
        var __tame_this = this;
        var __tame_fn_14 = function (__tame_k) {
            tame.setActiveCb (__tame_defer_cb);
            var results = [ ] ,
            single =
            function  (i, callback) {
                var __tame_defer_cb = tame.findDeferCb ([i, callback]);
                tame.setActiveCb (__tame_defer_cb);
                var __tame_this = this;
                var __tame_fn_15 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_fn_16 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        var __tame_defers = new tame.Deferrals (__tame_k);
                        var __tame_fn_17 = function (__tame_k) {
                            tame.setActiveCb (__tame_defer_cb);
                            fnToMap ( arr [ i ] ,
                            __tame_defers.defer ( { 
                                assign_fn : 
                                    function () {
                                        err = arguments[0];
                                        result = arguments[1];
                                    }
                                    ,
                                parent_cb : __tame_defer_cb,
                                line : 91,
                                file : "solution-3-tame.tjs"
                            } )
                            ) ;
                            tame.callChain([__tame_k]);
                            tame.setActiveCb (null);
                        };
                        __tame_fn_17(tame.end);
                        __tame_defers._fulfill();
                        tame.setActiveCb (null);
                    };
                    var __tame_fn_18 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        results [ i ] = result ;
                        callback ( ) ;
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    tame.callChain([__tame_fn_16, __tame_fn_18, __tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_15, __tame_k]);
                tame.setActiveCb (null);
            }
            ;
            
            var i = 0 ;
            var __tame_fn_10 = function (__tame_k) {
                tame.setActiveCb (__tame_defer_cb);
                var __tame_fn_11 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    var __tame_defers = new tame.Deferrals (__tame_k);
                    var __tame_fn_12 = function (__tame_k) {
                        tame.setActiveCb (__tame_defer_cb);
                        while (i < arr . length) {
                            single ( i ,
                            __tame_defers.defer ( { 
                                parent_cb : __tame_defer_cb,
                                line : 100,
                                file : "solution-3-tame.tjs"
                            } )
                            ) ;
                            i ++ ;
                        }
                        tame.callChain([__tame_k]);
                        tame.setActiveCb (null);
                    };
                    __tame_fn_12(tame.end);
                    __tame_defers._fulfill();
                    tame.setActiveCb (null);
                };
                var __tame_fn_13 = function (__tame_k) {
                    tame.setActiveCb (__tame_defer_cb);
                    callback ( null , results ) ;
                    tame.callChain([__tame_k]);
                    tame.setActiveCb (null);
                };
                tame.callChain([__tame_fn_11, __tame_fn_13, __tame_k]);
                tame.setActiveCb (null);
            };
            tame.callChain([__tame_fn_10, __tame_k]);
            tame.setActiveCb (null);
        };
        tame.callChain([__tame_fn_14, __tame_k]);
        tame.setActiveCb (null);
    }
    ;
    
    asyncMap ( files , mtimeAsync ,
    function  (err, asyncTimes) {
        console . log ( asyncTimes ) ;
    }
    ) ;
    tame.callChain([__tame_k]);
    tame.setActiveCb (null);
};
__tame_fn_0 (tame.end);