<template>
  <div id="skill">

    <h5>SKILLS</h5>
    <hr>

    <div class="">
      <div id="btnArea" class="col-12 d-inline-flex justify-space-around">
          <v-hover v-slot="{ hover }">
            <a href="#c1">
              <v-btn  
              :class="{ 'on-hover': hover }"   
              fab
              >
                CERT

              </v-btn></a>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <a href="#c2">
              <v-btn  
              :class="{ 'on-hover': hover }"   
              fab
              >
                PROJECT

              </v-btn></a>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <a href="#c3">
              <v-btn  
              :class="{ 'on-hover': hover }"   
              fab
              @click="giveState(1)"
              >
                WEBSITE

              </v-btn></a>
          </v-hover>

        
      </div>
      <div id="all">
         <div id="c1" class="col-12 d-inline-flex flex-wrap">
            <v-card
            class="d-inline-block ml-4 col-md-3 col-5"
            v-for="(cer,i) in inside1"
            :key="i">
             <v-chip 
             x-small
             color="blue d-flex justify-start col-md-3 col-12">{{cer.chip}}</v-chip>
              <v-card-title class="d-flex justify-center">{{cer.cerName}}</v-card-title>
              <v-card-text>
                {{cer.content}}
              </v-card-text>
            </v-card>
          </div>

          <div id="c2" class="col-12">
            <div
            class="mt-5 pa-3 col-sm-8 col-md-4 d-inline-flex d-flex justify-space-around"
            v-for="(cer,i) in inside2"
            style="min-height:70vh"
            :key="i">
             <div class="col-12" >
              <v-card-title class=" font-weight-black pl-0">{{cer.cerName}}</v-card-title>
              <body style="text-align:left;">
                {{cer.content}}
              </body>
              <br>
              <v-img :src="imgLink(cer.img)" alt="most project" style="max-width:80vw"></v-img>
              </div>
            </div>
          </div>

          <div id="c3" class="col-12">
            <div
            class="d-inline-block "
            v-for="(cer,i) in inside3"
            :key="i">
              <h3>{{cer.cerName}}</h3>
              <a href="https://pengchen112358.github.io/intern/">
              <v-img :src="imgLink(cer.img)" alt="intern" style="max-width:90vw"></v-img></a>
              <body>
                {{cer.content}}
              </body>
              
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-btn {
  transition: opacity .4s ease-in-out;
}

.v-btn:not(.on-hover) {
  opacity: 0.6;

 }
</style>
<script>
  export default {
    data () {
      return {
        state: 3,
        inside1:[
              {
                cerName:'IELTS',
                content: 'overall 8',
                chip: 'language'
              },
              {
                cerName: 'TOEIC',
                content: '865',
                chip: 'language',
              },
            ],
        inside2:[
              {
                cerName:'College Student Research Scholarship, MOST',
                content:'Using RaspberryPi and U-blox to make low-cost GNSS receiver, and analysis its performance with python. The project also won the first place of student research proposal competition holding by The Chinese GeoInformatics Society. ',
                img: 'most.png'
                },
              {
                cerName: 'Project for ministry of Labor',
                content: 'Using python and SQL to analysis open data and visualize the relationship between population and housing price. ',
                img: 'house.png'
              },
              {
                cerName: 'GIS project',
                content: 'Using ArcGIS and open data to analysis the best route for school bus.',
                img: 'arcgis.png'
              },
              {
                cerName: 'AutoCAD school project',
                content: 'Building a real size BYODOIN on AutoCad. ',
                img: 'autocad.png'
              },
              {
                cerName: 'StoryMap compition',
                content: 'Visualization data with StoryMap online, and being the fifth place of 37 teams.',
                img: 'map.png'
              }

            ],
            inside3:[
              {
                cerName: 'INTERN',
                content: 'Click picture above to enter the website',
                img: 'web1.png',
              }
            ],
        ex:['1','2','3'],
        items: [
          {
            title: 'CERT',
            isActive: false,
            id :1,
          },
          {
            title: 'PROJECT',
            isActive: false,
            id:2,
          },
          {
            title: 'WEBSITE',
            isActive: false,
            id:3,
          }
        ],
        
      }
    },
    methods: {
      giveState:function(k) {

        this.state = this.ex[k]
        console.log(this.state)
        return this.state
      },
      imgLink:function(img) {

        let imgsrc =require('../assets/'+img)
        console.log(img)
        return imgsrc
      },
    }
  }
</script>



