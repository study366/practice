<template>
	<div class="g-content-container" >
		<MeScroll class="contacts" ref="scroll">		
			<section class="contacts-header">
				<ul class="contacts-one">
					<li class="contacts-item" v-for="(item,index) in contactsList">
						<router-link to="/chats" class="contacts-link">
							<p class="contacts-pic contacts-icon" :class="item.backgroundClass">
								<i class="iconfont icon-gouwuche" :class="item.iconClass"></i>
							</p>
							<p class="contacts-name">{{item.content}}</p>	 
						</router-link>
					</li>
				</ul>
			</section>
			<section class="contacts-header">
				<button @click="testVueX" style="line-height: 2em;margin: 0 auto;padding: 0 1em;display: block;background: #3efa3f">测试vueX</button>
				<button @click="DelContact" style="line-height: 2em;margin: 0 auto;padding: 0 1em;display: block;background: #3efa3f">删除一个联系人</button>
				
				<p class="contact-num">{{contactCount}}位联系人</p>
				<ul class="contacts-one">
					<li class="contacts-item" v-for="(item,index) in contacts">
						<p class="anchor" :id="item.id" v-if="item.id">{{item.id}}</p>
						<router-link :to="{path:'/facechat',query:{idCard:item.idCard}}" class="contacts-link" v-if="item.name">
							<p class="contacts-pic">
								<img :src="item.pic"></img>
							</p>
							<p class="contacts-name">{{item.name}}</p>	 
						</router-link>
					</li>					
				</ul>				
			</section>
			<p class="contact-num">{{contacts.length}}位联系人</p>						
		</MeScroll>
		
		<div class="contact-nav-box" >			
			<div  v-for="(item,index) in navList" :key="index"><a>{{item}}</a></div>			
		</div>			
	</div>
	
</template>

<script>
	import MeScroll from 'base/scroll';
	import {randName,randomNum} from 'pages/chats/config.js';
	import toPinyin from 'assets/js/pinyin4js';
	import {cht2chsLibs} from "assets/js/libs/cht2chs";
	import storage from "assets/js/storage";
	import {contactsList} from "./config";
	export default{
		name: 'Contacts',
		data(){
			return {
				contacts: [],
				navList: [],
				contactsList: [],
				consoleInfo:''	
			};
		},
		components:{
			MeScroll
		},
		created(){	
			this.init();	
		},
		mounted(){
			this.addClickListener();			
		},
		computed:{
			contactCount(){
				return this.$store.state.contactData.length;
			}
		},
		methods:{
			/**API 区域***/
			/** updateScroll()*/
			DelContact(){
				this.$store.commit("popContact");
			},
			testVueX(){
				this.$store.commit("cloneContact",this.contacts);
				console.log(this.$store.state.contactData);
			},			
			updateScroll(){								
				this.$refs.scroll.updataScroll();
			},

			/****交互事件区域***/
			addClickListener(){	//给右侧导航添加委托事件			
				var navBox = document.getElementsByClassName("contact-nav-box")[0];
				navBox.addEventListener("click", (event) =>{
					var innerText = event.target.innerText;
					var targetAnchor = document.getElementById(innerText);				
					var targetOffsetTop = targetAnchor.offsetTop;
					this.$refs.scroll.scrollTo(-targetOffsetTop);				
				}, true);
			},

			init(){	
				this._initNav();				
				this._initContacts();				
				this.contactsList = contactsList;

			},
			_initNav(){
				let initCode = 64;
				for(var i = 0; i < 26; i++){
					initCode += 1;
					let charCode = String.fromCharCode(initCode.toString(10));					
					this.navList[i] = charCode;
				}				
				this.navList.push("#");

			},
			_initContacts(){
				let contacts = storage.get('contacts');
				
				if(contacts && contacts.length > 50){
					this.contacts = contacts;
					return void(0);
				}
				this._randomContacts();
				this._sortContactsByPinyin();
				this._addIndexForContact();
			},
			_randomContacts(){
				let contactsNumber = randomNum(80,150);//随机联系人数量
				
				for(var i = 0; i < contactsNumber; i++){				
					this.contacts[i] = {};
					this.contacts[i].pic = "https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E";				
					this.contacts[i].name = randName();
					this.contacts[i].idCard = Math.random();
					this.contacts[i].content = [];

				}

			},
			_sortContactsByPinyin(){
				let contactsNumber = this.contacts.length;

				for(var i = 0; i < contactsNumber; i++){
					this.contacts[i].namePinyin = toPinyin(this.contacts[i].name);
				}
				this.contacts.sort((item1,item2) =>{
					return item1.namePinyin > item2.namePinyin ? 1 : -1;
				})				

			},
			_addIndexForContact(){//数组中加入索引  存入本地及vuex

				let contacesArray = [];	
				let navLength = this.navList.length;
				let contacesLength = this.contacts.length;

				for(var j = 0, i = 0, lastIndex = 0; j < navLength; j++){
					
					
					var checkCode = this.navList[j].toLowerCase();//因为导航 大写 拼音小写
						
					for( ; i < contacesLength; i ++){//为了只遍历一次，变量放在了上层定义
						let contacts = this.contacts;						
						let contact = this.contacts[i];
						let name = this.contacts[i].namePinyin;
						let namePinyin = this.contacts[i].namePinyin.split('')[0];
						if( namePinyin !== checkCode){
							
							break;
						};															
					} 
					let navListNavItem = {
						id: this.navList[j]
					}
					contacesArray.push(navListNavItem);	
					

					if(lastIndex != i){
						contacesArray.push(...this.contacts.slice(lastIndex,i));
					}else{//说明本次循环 nav无对应contact
						
						contacesArray.pop();
					}
					lastIndex = i;
					
				}	
				console.log("|||||||")
				this.contacts = contacesArray;
				storage.set('contacts',contacesArray);

			},
			_autoAddChatRecord(){

			}

		}

	}
</script>
<style lang="scss" scoped>
	.contacts{
		width: 100%;
		
		.contacts-header{	
			width: 100%;			
			
			.contacts-one{
				width: 100%;

				.contacts-item{
					width: 100%;
					
					.anchor{
						font-size: 0.678rem;
						line-height: 2.7em;
						text-indent: 1em;
					}

					.contacts-link{	
						display: flex;
						width: 100%;
						background-color: #fff;

						.contacts-pic{
							width: 3.2rem;
							height: 3.2rem;
							padding: 0.5rem;							
							background-clip: content-box;							
							position: relative;
							border-radius: 5px;

							/*background-color: pink ;*/
							/*border: 1px solid pink;*/

							img{
								position: relative;
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
						.contacts-icon{
							background-color: #f8b208d6;
							color: #fff;
							display: flex;
							flex-direction: column;
							justify-content: center;
							text-align: center;
							border-radius: 10px;
						}
						.bg-blue{
							background-color: #06ad56;
						}
						.bg-green{
							background-color: #2782d7;
						}

						.contacts-name{
							font-size: 1rem;
							line-height: 3em;
							padding-left: 0.5em;
							flex: 1;
							/*border-top: 1px solid #16141445;*/
						}
						.contacts-name:before{
							content: '';
							display: block;
							width: 100%;
							height: 0;
							text-indent: 0.5em;
							border-bottom: 1px solid #16141445;
							transform: scaleY(0.5);
						}
					}
					.anchor ~ a .contacts-name:before{
						display: none;
						/*background-color: pink;*/
					}
				}
				.contacts-item:first-child .contacts-name:before{
					display: none;
				}				
			}			
		}
		.contact-num{
			font-size: 1em;
			line-height: 4em;
			text-align: center;
		}
	}
	.g-content-container{

		position: relative;
		
	}	
	.contact-nav-box{		
		height: 100%;
		padding-top: 50px;		
		position: absolute;
		top: 0;
		right: 1em;
		display: flex;
		flex-direction: column;		
		/*border: 1px solid pink;	*/
		overflow: hidden;
		
		div{
			width: 100%;
			flex: 1;
			/*border: 1px solid pink;		*/
			display: flex;
			flex-direction: column;
			justify-content: center; 			
			border-radius: 50%;

			a{
				display: block;
				width: 1.5em;				
				line-height: 1.5em;
				text-align: center;
				/*border:1px solid pink;				*/
				border-radius: 50%;
			}
		}
		div:hover{
			color: #fff;
			background-color: #009010;
		}
	}
</style>