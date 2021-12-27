<template>
  <v-app>
    <div>
      <div id="whiteBlockComputer" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex" style="height: 40vh">
        <div id="nameComputer" class="col-6 d-flex align-end  my-n8"><Name/></div>
        
      </div>
      <div id="whiteBlockPhone" class="col-12 d-md-none" style="height:15vh">
        
      </div>
      <div id="namePhone" class="col-12 d-md-none" style="color:white"><Name/></div>
      <div id="blackBlockComputer" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex" style="height: 60vh; background-color: rgb(49, 49, 49);">
        <div class=" d-flex align-center" style="padding:0px;"></div>
        <div class="col-6  flex-column-reverse " id="introComputer">
            <div class="col-12 pb-0 d-flex justify-start"><h3>PROFILE INFO</h3></div>
            <div class="col-12 pt-0 d-flex justify-start"><hr></div>
            <div class="col-12  d-flex justify-start">
                <Intro/>
            </div>
          
        </div>
        
        
      </div>
      <div id="blackBlockPhone" class="col-12 d-md-none align-center" style="background-color: rgb(49, 49, 49); height:20vh">
        
      </div>
      <div id="introPhone" class="d-md-none" ><Intro/></div>
      <div id="skill">
        
      </div>
      <div id="skillComputer" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex">
          <Skill/>
      </div>
      <div id="skillPhone" class="d-md-none align-center">
          <Skill/>
      </div>
    </div>
  </v-app>

</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Secular+One&display=swap');

#nameComputer {
  h1 {
    font-size: 10vw;
    font-weight: 800;
    margin-left: 15vw;
    color:rgb(49, 49, 49);
  }
}
#namePhone {
  position: absolute;
  margin-top: -8vh;
  width: 100vw;
  h1 {
    font-weight: 900;
    text-shadow: 1px -3px 5px black;
    font-size: 20vw;
  }
}
#introComputer {

  h3 {
    color: white;
    font-size: 40px;
    font-weight: 200;
    margin-left: 15vw;
    font-family: 'Secular One', sans-serif;
  }
  hr {
    border: solid 1px white;
    width: 250px;
    margin-left: 15vw;

  }
  div {
    margin-left: auto;
    margin-right: auto;

  }
  body {
    color: white;
    margin-top: 10px;
    font-size: x-large;
    font-family: 'Noto Sans TC', sans-serif;
    font-family: 'Secular One', sans-serif;
    margin-left: 15vw;
    margin-right: 5vw;
    text-align: left;
  }
}

#introPhone {
  
  body {
    color: rgb(49, 49, 49);
    margin-top: 3vh;
    font-size: x-small;
    margin-bottom: 6vh;
    padding-left: 4vw;
    padding-right: 4vw;
    font-family: 'Noto Sans TC', sans-serif;
    font-family: 'Secular One', sans-serif;
  }
}
#skillComputer {
  color:rgb(49, 49, 49);
  h5 {
    margin-top: 5vh;
    display: flex;
    justify-content: left;
    font-family: 'Secular One', sans-serif;
    font-size: 50px;
  }
  hr {
    display: flex;
    justify-content: left;
    width: 150px;
    border: solid 3px black;
  }
  button {
    width: 20vw;
    height: 20vw;
    margin: 10vh;
    margin-top: 20vh;
    margin-bottom: 30vh;
    font-size: xx-large;
    font-weight: bolder;
    a {
      color: black;
      text-decoration:none;
    }
    #c2 {
      body {
        display: flex;
        text-align: left;
      }
      img {
        max-width: 50vw;
      }
    }
  }
}
#skillPhone {
  color:rgb(49, 49, 49);
  hr {
    width: 70px;
    margin: auto;
    border: solid 1px black;
    margin-bottom: 3vh;
  }
  h5 {
    font-family: 'Secular One', sans-serif;
    font-size: x-large;
  }
  button {
    width: 25vw;
    height: 25vw;
    a {
      color: black;
      text-decoration:none;
    }
  }
  #btnArea {
    margin-bottom: 3vh;
  }

}
</style>

<script>
// @ is an alias to /src

import Skill from '@/components/Skill.vue'
import Name from '@/components/Name.vue'
import Intro from '@/components/Intro.vue'
export default {
  name: 'Home',
  components: {
    Skill,
    Name,
    Intro,
  }
}
// <div class="home">
//   <img alt="Vue logo" src="../assets/logo.png">
//   <HelloWorld msg="Welcome to Your Vue.js App"/>
// </div>
</script>

