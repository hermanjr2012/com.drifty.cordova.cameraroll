document.addEventListener("deviceready", callReadyOnce, false);

var calledReady = false;
function callReadyOnce() { if (!calledReady) { onDeviceReady(); calledReady = true; } }

// PhoneGap is ready
function onDeviceReady() { navigator.splashscreen.hide(); doSetup(); }



function doSetup() {
    
    addDeviceTypeToBody();
    setTimeout('showStuff()',500);
    
    //jquery mobile tweaks
    $.mobile.buttonMarkup.hoverDelay = 100;
    $(document).bind("mobileinit", function(){ $.mobile.pushStateEnabled = false; });
    
    // warn if no internet
    if ( (navigator.connection.type.toLowerCase == 'none') && (navigator.connection.type.toLowerCase == '') ) { $('#lostConnection').show(); }
    
    //prevent scrolling - document.ontouchmove = function(e) {e.preventDefault()};
    function stopScrolling( touchEvent ) { touchEvent.preventDefault(); }
    document.addEventListener( 'touchmove' , stopScrolling , false );

    //do login stuff
    doLogin();
    
    //load media logic
    readyPhoto();
    readyVideo();
    readyJournal();
    readyAudio();
    
    keepOnTop();    
    
}

function shouldRotateToOrientation(orientation) {  
    //force portrait orientation
	//console.log(orientation);
	return orientation == 0;
}

function addDeviceTypeToBody() {
    console.log('-----------------------------------------');
    console.log('Device Platform: ' + device.platform);
    console.log('Device Name: ' + device.name);
    console.log('Device Version: ' + device.version);    

    console.log('Device UUID: ' + device.uuid);    
    console.log('Device Cordova: ' + device.cordova);
    
    console.log('width: ' + $(document).width() + ' height: ' + $(document).height());
    console.log('-----------------------------------------');
    

    
    var dv = device.platform.toLowerCase();
    $('body').addClass('platform-' + dv);
}

function hideLoadBlock() { $('#loadBlock').fadeOut(1000); $('#wrap').fadeIn(1000); }
function showStuff() { $('body').css('visibility','visible'); }

