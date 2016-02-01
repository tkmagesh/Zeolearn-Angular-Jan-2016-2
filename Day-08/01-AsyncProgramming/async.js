/* Sync */
function addSync(x,y){
    console.log("[Provider] processing ", x, " and ", y);
    var result = x + y;
    console.log("[Provider] returning the result");
    return result;
}

function addSyncClient(x,y){
    console.log("[Consumer] triggering addSync");
    var result = addSync(x,y);
    console.log("[Consumer] result = ", result);
}


/* Async  - Callbacks*/
function addAsync(x,y, onResult){
    console.log("[Provider] processing ", x, " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[Provider] returning the result");
        if (typeof onResult === 'function')
            onResult(result);
    },5000);
}

function addAsyncClient(x,y){
    console.log("[Consumer] triggering addSync");
    addAsync(x,y, function(result){
        console.log("[Consumer] result = ", result);
    });
}

/* Async - Events */

var addAsync = (function(){
    var _subscriptions = [];
    function doWork(x,y){
        console.log("[Provider] processing ", x, " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning the result");
            _subscriptions.forEach(function(subscriptionFn){
                subscriptionFn(result);
            });
        },5000);
    }
    function addSubscription(subscriptionFn){
        _subscriptions.push(subscriptionFn);
    }
    return {
        doWork : doWork,
        addSubscription : addSubscription
    }
})();

/*Async - Promise*/

var addAsync = function addAsync(x,y){
    console.log("[Provider] processing ", x, " and ", y);
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning the result");
            resolve(result);
        },5000);
    });
    return promise;
}

/*Async - Deferred*/
var addAsync = function addAsync(x,y){
    console.log("[Provider] processing ", x, " and ", y);
    var deferred = Promise.defer();
    setTimeout(function(){
        var result = x + y;
        console.log("[Provider] returning the result");
        deferred.resolve(result);
    },5000);
    return deferred.promise;
}
