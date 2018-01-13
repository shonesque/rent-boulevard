<template>
  <div>
    <!-- Routes to the different pages
    If you need more routes go the the router folder and add a new object with the desired route -->
    <div class="waves-effect waves-light btn">
      <router-link to="/register">Register</router-link>
    </div>
    <div class="waves-effect waves-light btn">
      <router-link to="/login">Log In</router-link>
    </div>
    <div class="waves-effect waves-light btn">
      <router-link to="/search">Search</router-link>
    </div>
    <div class="waves-effect waves-light btn">
      <router-link to="/addLocation">Add new location</router-link>
    </div>
    
    <h1>Under Construction</h1>
    <div>
      <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href="mailto:cosmin.simion@boulevard.rentals">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>
      <p>&mdash; Boulevard Rentals &copy; Team</p>
    </div>
    <p id="countdown"></p>
  </div>
  
</template>

<script>
export default {
  name: 'landingPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>



<script>
// Set the date we're counting down to
var countDownDate = new Date("Jan 17, 2018 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
</script>