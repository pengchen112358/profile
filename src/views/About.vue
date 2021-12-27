<template>
  <v-app>
    <div>
      <div id="whiteBlockComputerE" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex" style="height: 40vh">
        <div id="nameComputerE" class="col-6 d-flex align-end  my-n8"><NameE/></div>
        
      </div>
      <div id="whiteBlockPhoneE" class="col-12 d-md-none" style="height:15vh">
        
      </div>
      <div id="blackBlockComputerE" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex" style="height: 60vh; background-color: rgb(49, 49, 49);">
        <div class=" d-flex align-center" style="padding:0px;"></div>
        <div class="col-6  flex-column-reverse " id="introComputer">
            <div class="col-12 pb-0 d-flex justify-start"><h3>PROFILE INFO</h3></div>
            <div class="col-12 pt-0 d-flex justify-start"><hr></div>
            <div class="col-12  d-flex justify-start">
                <IntroE/>
            </div>
          
        </div>
        
        
      </div>
      <div id="blackBlockPhoneE" class="col-12 d-md-none align-center" style="background-color: rgb(49, 49, 49);height:20vh">
        <div id="namePhoneE" style="color:white"><NameE/></div>
      </div>
      <div id="introPhoneE" class="d-md-none" ><IntroE/></div>
      <div id="skill">
        
      </div>
      <div id="skillComputerE" class="col-12 d-none d-md-flex d-lg-flex d-xl-flex">
          <SkillE/>
      </div>
      <div id="skillPhoneE" class="d-md-none align-center">
          <SkillE/>
      </div>
    </div>
  </v-app>

</template>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Secular+One&display=swap');

#imgPhoneE {
  border-collapse: separate; 
  border-radius: 450px;
}
#nameComputerE {
  h1 {
    font-size: 5vw;
    font-weight: 800;
    margin-left: 15vw;
    margin-bottom: 1vh;
    color:rgb(49, 49, 49);
    display: flex;
    text-align: left;
  }
}
#namePhoneE {
  margin: -6vw;
  h1 {
    font-weight: 900;
    margin-top: 0px;
    font-size: 12vw;
  }
  #one {
    color: black;
    text-shadow: 2px 2px white;
  }
}
#introComputerE {

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
#introPhoneE {
  
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
#skillComputerE {
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
#skillPhoneE {
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

import SkillE from '@/components/SkillE.vue'
import NameE from '@/components/NameE.vue'
import IntroE from '@/components/IntroE.vue'
export default {
  name: 'Home',
  components: {
    SkillE,
    NameE,
    IntroE,
  }
}
// <div class="home">
//   <img alt="Vue logo" src="../assets/logo.png">
//   <HelloWorld msg="Welcome to Your Vue.js App"/>
// </div>
</script>

