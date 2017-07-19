SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
SC.stream('/tracks/163423901', function(sound) {
  $('#start1').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop1').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/40693467', function(sound) {
  $('#start2').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop2').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



SC.stream('/tracks/201287465', function(sound) {
  $('#start3').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop3').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/181294675', function(sound) {
  $('#start4').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop4').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});



SC.stream('/tracks/233953691', function(sound) {
  $('#start5').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop5').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/190382052', function(sound) {
  $('#start6').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop6').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/31404305', function(sound) {
  $('#start7').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop7').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});


SC.stream('/tracks/104254646', function(sound) {
  $('#start8').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop8').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});
});
