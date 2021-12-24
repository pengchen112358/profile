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
                cerName:'大專生計畫',
                content:'本研究使用RaspberryPi和U-blox定位晶片自製低成本接收儀，並將接收資料匯入電腦進行分析，檢驗接收之成果。本專題亦獲得108年學生專題及論文競賽第一名。',
                img: 'most.png'
                },
              {
                cerName: '勞動部計畫',
                content: '蒐集政府公開資料並將數據整理分析獲得人口分布與房價、交易量之關係',
                img: 'house.png'
              },
              {
                cerName: '空間資訊專題',
                content: '以空間資訊結合數據資料，分析學生來源和交通易達性和所需通勤時間獲得學校專車之推薦路線。',
                img: 'arcgis.png'
              },
              {
                cerName: 'AutoCAD繪圖專題',
                content: '完全依建造尺寸於軟體上重建日本寺廟-平等堂，並標註建物尺寸。',
                img: 'autocad.png'
              },
              {
                cerName: 'StoryMap大專生比賽',
                content: '利用arcgis StoryMap和網頁前端的技能建立線上地圖，呈現數據，並在37支隊伍中獲得第5名的成績。',
                img: 'map.png'
              }

            ],
            inside3:[
              {
                cerName: '網頁實習成果',
                content: '點選圖片可以進入網頁',
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







