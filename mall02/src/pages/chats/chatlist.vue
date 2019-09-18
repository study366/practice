<template>  
  <ul class="chat-list">
    <li v-if="chatList.length"
        v-for="(item,index) in chatList"
        :key="index" >
      <router-link to="/facechat" class="chat-item">
        <div class="profile-photo">
          <p class="profile-pic">
            <img :src="item.pic" alt="logo">
          </p>          
        </div>
        <div class="chat-content">
            <h1 class="chat-contacts">{{item.contacts}}</h1>
            <p class="chat-last-content">{{item.content}}</p>
        </div>
        <p class="last-chat-time">{{item.time}}</p>
      </router-link>
    </li>         
  </ul>  
</template>

<script>
 import {randomNum,randName,randomChatContent} from "./config";
export default {
  name: 'ChatList',
  components:{
    chatList: []
  },
  created(){
      this.init();
      this.randomChatList();
  },
  methods:{
    init(){      
      this.chatList = [{
        pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568461742164&di=b89b0a97a6504bf72c65ad5055148e79&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140321%2F18063302_210604412116_2.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },
      {
        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2499107440,3201198713&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:40'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190911/20190911024910_73309.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1263316569,3188454990&fm=173&app=49&f=PNG?w=218&h=146&s=ADD46F87431603D60339753703005046',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190316/20190316012406_88522.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568461742164&di=b89b0a97a6504bf72c65ad5055148e79&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140321%2F18063302_210604412116_2.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },
      {
        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2499107440,3201198713&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:40'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190911/20190911024910_73309.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1263316569,3188454990&fm=173&app=49&f=PNG?w=218&h=146&s=ADD46F87431603D60339753703005046',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190316/20190316012406_88522.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568461742164&di=b89b0a97a6504bf72c65ad5055148e79&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140321%2F18063302_210604412116_2.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },
      {
        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2499107440,3201198713&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:40'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190911/20190911024910_73309.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1263316569,3188454990&fm=173&app=49&f=PNG?w=218&h=146&s=ADD46F87431603D60339753703005046',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190316/20190316012406_88522.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568461742164&di=b89b0a97a6504bf72c65ad5055148e79&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140321%2F18063302_210604412116_2.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },
      {
        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2499107440,3201198713&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:40'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190911/20190911024910_73309.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1263316569,3188454990&fm=173&app=49&f=PNG?w=218&h=146&s=ADD46F87431603D60339753703005046',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190316/20190316012406_88522.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568461742164&di=b89b0a97a6504bf72c65ad5055148e79&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140321%2F18063302_210604412116_2.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },
      {
        pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2499107440,3201198713&fm=26&gp=0.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:40'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190911/20190911024910_73309.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1263316569,3188454990&fm=173&app=49&f=PNG?w=218&h=146&s=ADD46F87431603D60339753703005046',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      },{
        pic: 'https://img.52z.com/upload/news/image/20190316/20190316012406_88522.jpg',
        contacts: '张三',
        content: '你今天吃饭了吗',
        time: '15:30'
      }]
    }, 
    randomChatList(){      
      let myLength = this.chatList.length;
      for(var i = 0; i < myLength; i++){
         this.chatList[i].contacts = randName();
         this.chatList[i].content = randomChatContent();
      }          
    },      
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
