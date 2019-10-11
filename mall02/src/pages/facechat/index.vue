<template>
	 
    <div class="g-content-container facechats">
	    <me-navbar class="facechats-header" >
	      		<div slot="left" class="facechats-header-left">
	      			<i class="iconfont icon-fanhui" ref="goBack"></i>
	      			<p>{{contact.name}}</p>
	      			<i class="iconfont icon-erduo" v-if="whisper"></i>
	      		</div>
	      		<div slot="right" class="facechats-header-right">
	      			<i class="iconfont icon-gengduo" ></i>
	      		</div>
	   	</me-navbar>
	   	<me-scroll class="facechats-chat-panel"
	   	ref="scroll"
	   	pulldown
	   	@pull-down="loadMore" 	   	
		>
			<ul class="chatList">
				<li class="chatItem" v-for="(item,index) in chatRecord" :key="index">
					<div class="chatItem-box clear" v-if="item.content">
						<p class="chatItem-box-time" v-if="item.time"> 
							{{item.time}}
						</p>
						<p class="chatItem-box-logo float-left" 
						:class="{'float-left':item.idCard==id,
						'float-right':item.idCard!==id}"
						>
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left" 
						:class="{'float-left':item.idCard==id,
						'float-right':item.idCard!==id}"
						>
							{{item.content}}
						</p>
					</div>
				</li>				
			</ul>				
		</me-scroll>
		<me-navbar class="facechats-footer">
	      		<div slot="left" class="facechats-footer-left">
	      			<i class="iconfont icon-fanhui"></i>
	      			<input id="inputBox" type="text">
	      			<i class="iconfont icon-erduo" v-if="whisper"></i>
	      		</div>
	      		<div slot="right" class="facechats-footer-right">
	      			<i class="iconfont icon-gengduo" ></i>
	      			<i class="iconfont icon-gengduo"  v-if="!sent"></i>
	      			<button type="submit" class="iconfont sent" v-show="sent" id="submit">
	      				发送
	      			</button>
	      		</div>
	   	</me-navbar>
   	</div>
  	
</template>

<script>
	import MeNavbar from 'base/navbar';
	import MeScroll from 'base/scroll';
	import myGetTime from 'assets/js/getTime';
	import storage from "assets/js/storage";
	

	export default{
		name: 'FaceChat',
		data(){
			return {
				whisper: false,	
				sent: true,
				contact: '',
				chatRecord: [],
				id: '',
				triggerBySelf:false,
				query:''						
			};
		},
		created(){	
			this.init();
			

					
		},
		components:{
			MeNavbar,
			MeScroll,
			
		},		
		mounted(){			
			this.addInputListener();
			this.addClickListener();
			this.goBack();			
		},
		methods:{
			init(){
				// 通过传入参数，找到对应联系人信息，
				//赋值给chatRecord,
				// 通过localStorage保存query
				if(this.$route.query){
					this.id = this.$route.query.idCard;
					this.query = this.$route.query;					
					var contacts = storage.get("contacts");				
					var contactIndex = contacts.findIndex((item) =>{
						if(item.idCard === this.$route.query.idCard){
							return item;
						}
					});
					var contact  = 	contacts[contactIndex];	
					contact.index = contactIndex;	
					this.contact = contact;

					(this.chatRecord = contact.chatRecord) 
					||	(this.chatRecord = contact.chatRecord = []);	
					console.log(contact);						
				}				
			},			
			chatWithMM(arg,mythis){//与机器人mm聊天
				let xml = new XMLHttpRequest();
				let url = `http://open.drea.cc/chat/get?keyWord=${arg}&userName=type%3Dbbs`;
				xml.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						
						var responseText = JSON.parse(xml.responseText);
					
						var content = {
							idCard: mythis.id,
							time: myGetTime(),
							content: responseText.data.reply
						}						
						setTimeout(() =>{
							mythis.chatRecord.push(content);
							mythis.updataChatRecord(mythis.contact, mythis.chatRecord);
						}, 1000);

										
					}
				}
				xml.open('GET',url,true);
				xml.send();

			},
			
			autoTranslateToBottom(){
				// console.log('自动到底部');
				// console.log(this.chatRecord);
				if(this.chatRecord.length){
					let scroll = this.$refs.scroll;
					var lastChatItem = document.getElementsByClassName("chatList")[0].lastElementChild;	
				
					scroll.scrollTo(-(lastChatItem.offsetHeight + lastChatItem.offsetTop));
				}
			}, 
			
			// addClickListener
			/**
				*输入框监听 有值显示提交
				*无值显示 ///\+
				*enter监听 触发submit.click
				*/
			addInputListener(){				
				var inputBox = document.getElementById("inputBox");				
				inputBox.addEventListener("input",(event) =>{
					if(inputBox.value){
						this.sent = true;
					}else{
						this.sent = false;
					}				
				},true);
				inputBox.addEventListener("keyup",(event) =>{
					if(event.keyCode === 13){
						var submitBotton = document.getElementById("submit");		
						submitBotton.click();
					};			
				},true)
			},
			/**
				*添加事件监听，如果输入有值执行
				*输入值加上 id，time 推入content数组
				*调用聊天函数，清空输入，调用样式
			  */	
			addClickListener(){	//
				var submitBotton = document.getElementById("submit");				
					submitBotton.addEventListener("click",(event) =>{
					var inputBox = document.getElementById("inputBox");

					if(inputBox.value){
						var content = {
							idCard: '001',
							time: myGetTime(),
							content: inputBox.value
						}

						this.chatRecord.push(content);
						let mythis = this;
						
						this.updataChatRecord(this.contact,this.chatRecord);
						this.chatWithMM(inputBox.value,mythis);
					}	

					console.log(this.$store.state);
					
					inputBox.value = '';
					submitBotton.classList.add('newClass');	
					
					setTimeout(()=>{
						submitBotton.classList.remove('newClass');	
					}, 100);				
				},true);
			},
			goBack(){
				this.$refs.goBack.addEventListener("click",(event)=>{
					this.$router.back();
				}, true)
			},
			loadMore(fn){
				setTimeout(() =>{
					console.log('没有了');
					fn();
				}, 1000);
			},
			updataChatRecord(contact,chatRecord){
				let contacts = storage.get("contacts");
				console.log('6666666')
				console.log(chatRecord);
				contact.chatRecord = chatRecord;
				contacts[contact.index] = contact;
				storage.set("contacts",contacts);
			},
			handleTime (time) {
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
		},
		watch:{
			chatRecord(){
				this.autoTranslateToBottom();//自动滚去底部
			},
			'$route'(to,from){
				console.log('||||||')
				console.log(this.$route.fullPath === "/chats");
				if(this.$route.query && this.router !== this.$route.query){
					console.log(this.$route.query);
					this.init();
				}
				
			}			
		}
	}
		
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.g-content-container{
		position: relative;
	}
	.facechats-header,.facechats-footer{
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 1000;
		background-color: #eee;
	}
	.facechats-header-left{
		@include flex-center();
		padding-left: 0.5em;

		.iconfont{
			font-size: 0.8em;
		}
		p{
			text-indent: 0.5em;
			font-weight: 600;
		}
		.icon-gengduo{
			display: block;
			width: 100%;
		}
	}
	.facechats-header-right{
		width: 50px;
		height: 50px;
		@include flex-center();
	}
	.facechats-chat-panel{
		background-image: url(http://img5.imgtn.bdimg.com/it/u=2491414336,3004378379&fm=26&gp=0.jpg),
			url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3707320584,4073816395&fm=26&gp=0.jp);
		background-size: cover;
		/*background-position: 10px 10px;*/

		.chatItem{
			width: 100%;
			margin-bottom: 0.5em;

			&-box{
				border:1px solid pink;
				line-height: 2em;				

				&-time{					
					text-align: center;
				}

				&-logo{
					width: 3rem;
					padding-bottom: 3rem;
					position: relative;


					img{
						position: absolute;
						width: 100%;
						height: 100%;
						text-align: center;
						border-radius: 5px;
						border:1px solid blue;
					}
				}				
				

				&-content{
					line-height: 2rem;
					/*text-indent: 1em;*/
					margin:0 1em 0 1em;
					padding: 0.5em;
					border:1px solid pink;
					background-color: #fff;
					max-width: 65%;
					border-radius: 10px;
					position: relative;
				}
				
				&-content:before{
					content: '';					
					display: block;
					border:0.3rem solid pink;
					border-color: transparent #fff transparent transparent;
					position: absolute;
					/*background-color: pink;*/
					left: -0.6rem;
					top: 1em;
				}

				.float-left{
					float: left;
				}
				.float-right{
					float: right;
				}
				.float-right:before{
					display: none;
				}				 
				.float-right.chatItem-box-content:after{
					content: '';
					width: 0;					
					display: block;
					border:0.3rem solid pink;
					border-color: transparent transparent transparent #fff;
					position: absolute;					
					right: -0.6rem;
					top: 1em;
				}
			}
				
		}
	}
	.clear:after{
		content: '';
		display: block;
		clear: both;
	}
	.facechats-footer{
		top: auto;
		bottom: -50px;

		&-left{
			width: 80%;
			height:50px;
			line-height: 50px; 
			
			i{
				padding: 0;
			}
			input{
				width: 85%;
				height: 3em;
				text-indent: 0.5em;
			}
		}

		&-right{	
			width: 20%;	
			height: 50px;
			line-height: 50px;
			margin-right: 0.5em;

			i{
				padding:0.5em;
				padding-left: 0;
			}
			button{
				background: #7a7;
				padding: 0.5em;
				font-size: 0.9em;
				line-height: 1.3em;
				color: #fff; 				
			}
			.newClass{
				transform: translate(0.1em,0.1em);
					background: #6a6;
			}
		}

	}
</style>