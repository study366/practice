<template>  

  <ul class="chat-list">
    <li>{{contactCount}}</li>
    <li v-if="chatList.length"
        v-for="(item,index) in chatList"
        :key="index" >   
       
      <router-link :to="{path:'/facechat',query:{idCard:item.idCard}}" class="chat-item">
        <div class="profile-photo">
          <p class="profile-pic">
            <img :src="item.pic" alt="logo">
          </p>          
        </div>
        <div class="chat-content">
            <h1 class="chat-contacts">{{item.name}}</h1>
            <p class="chat-last-content">{{item.content.content}}</p>
        </div>
        <p class="last-chat-time">{{item.time}}</p>
      </router-link>
    </li>         
  </ul>  
</template>

<script>
 import {randomNum,randName,randomChatContent} from "./config";
 import storage from "assets/js/storage";

export default {
  name: 'ChatList',
  components:{
    chatList: []
  },
  created(){
      this.init();
      
  },
  computed:{
    contactCount(){
        return this.$store.state.contactData[3].content;
      }
  },
  watch:{
    '$route'(to,from){
        
      if(this.$route.fullPath === "/chats"){
        console.log('路由更新');
        this.init();
      }
    }
  },
  methods:{
    init(){      
      this._accessLocalStorage();      
      console.log('init');
    },
    _accessLocalStorage(){
      let contacts = storage.get("contacts"); 
      let chatList = contacts.filter((item)=>{
        if(item.chatRecord && item.chatRecord.length > 0){
          return item;
        }
      })
      this.chatList = this._handleData(chatList);
      console.log(this.chatList);
      
    },
    _handleData(chatList){// 提取最后一条数据 根据时间间隔修改时间格式 
      
      let newArray = chatList.map((item)=>{          
         item.content = item.chatRecord[item.chatRecord.length - 1];
         item.time = handleTime(item.content.time);
         return item;
      });

      function handleTime (time) {
        //年月日均等，显示aa：bb;
        let thisYear = new Date().getFullYear();
        let thisMonth = new Date().getMonth() + 1;
        let today = new Date().getDate();

        let timeArray = time.match(/\d+/g);
        if(thisYear === timeArray[0]*1 && thisMonth === timeArray[1]*1 && today === timeArray[2]*1){
          return timeArray[3] + ":" +timeArray[4];
        }else{        
          return timeArray[0] +"/" + timeArray[1] + "/" + timeArray[2];
        } 
      }
      return newArray;     
    }

      
  } 
}
</script>

<style scoped lang="scss">
  img,a{
    width: 100%;
    height: 100%;
  }
  .chat-list{
    /*outline: #00ff00 dotted 15px;*/
    /*border: 1px solid pink;*/
    width: 100%;
    background-color: #fff;
    max-height: 100%;

    .router-link-exact-active{      
      background-color:transparent;
    }
    .chat-item:hover{

      background-color: #eee;
    }
    .chat-item{     
      width: 100%;
      display: flex;  
      color: #000;
  
      .profile-photo,
      .last-chat-time{
        flex: 1;
        padding: 2%;
        border-radius: 65%;
        overflow: hidden;
      }  
      .profile-photo{
        
        .profile-pic{
          position: relative;
          /*width: 80%;*/
          padding-bottom: 80%;

          img{
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
      }  
      .chat-content{

        width: 65%;
        padding: 2%;
        padding-left: 2%;
        line-height: 1.5em;       
        overflow: hidden;
        border-bottom: 1px solid #00000021;
        
        .chat-contacts{
          font-weight: 500;
          font-size: 1.35em;
          line-height: 1.7em;

        }

        .chat-last-content{
          font-size: 1em;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #333333a3;
        }
      }
      .last-chat-time{
        border-bottom: 1px solid #00000021;
        border-radius: 0%;
      }   
    }

  }
</style>
