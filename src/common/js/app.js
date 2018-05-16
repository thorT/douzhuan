export function nativeFn(fn_name,obj){
    if(window.native_android){
        window.native_android[fn_name](JSON.stringify(obj));
    }else if(window.webkit && window.webkit.messageHandlers){
        window.webkit.messageHandlers[fn_name].postMessage(obj || {'key':'test'});
    }else{
        try{
            window.native[fn_name](obj);
        }catch(e){
           console.log("非webview下出现异常属于正常")
        }
    }
}