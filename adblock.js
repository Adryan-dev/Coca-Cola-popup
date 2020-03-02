(function() {
    //Se não detectar o adblock
    function adBlockNotDetected() {
        alert('You Adblock not was actived because you not used adblock');
        console.log("function adBlockNotDetected");
    }

    //Se detectar o adblock 
    function adBlockDetected() {
        alert('You Adblock was actived because you used adblock now, but you will disable for continue');
        console.log('function adBlockDetected')
    }

    if (typeof blockAdBlock === 'undefined') {
        alert("blockAdBlock não foi carregado");
    } else {
        blockAdBlock.onDetected(adBlockDetected);
        blockAdBlock.onNotDetected(adBlockNotDetected);
        blockAdBlock.on(true, adBlockDetected);
        blockAdBlock.on(false, adBlockNotDetected);
        blockAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
    }

    blockAdBlock.setOption('checkOnLoad', false);

    blockAdBlock.setOption({
        debug: true,
        checkOnLoad: false,
        resetOnEnd: false
    });

})();