SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/52340090',function(sound){
         $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/230732244',function(sound){
         $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/276962559',function(sound){
         $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/179584967',function(sound){
         $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/39203926',function(sound){
         $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/260866871',function(sound){
         $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/249200792',function(sound){
         $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/277167607',function(sound){
         $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/23794974',function(sound){
         $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

});
