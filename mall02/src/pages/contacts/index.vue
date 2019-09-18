<template>
	<div class="g-content-container">
		<MeScroll class="contacts" ref="scroll">		
			<section class="contacts-header">
				<ul class="contacts-one">
					<li class="contacts-item" v-for="(item,index) in contactsHeaderList">
						<router-link to="/home" class="contacts-link">
							<p class="contacts-pic contacts-icon" :class="item.backgroundClass">
								<i class="iconfont icon-gouwuche" :class="item.iconClass"></i>
							</p>
							<p class="contacts-name">{{item.content}}</p>	 
						</router-link>
					</li>
				</ul>
			</section>
			<section class="contacts-header">
				<ul class="contacts-one">
					<li class="contacts-item" v-for="(item,index) in contacts">
						<p class="anchor" :id="item.id" v-if="item.id">{{item.idCode}}</p>
						<router-link to="/#" class="contacts-link">
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
	export default{
		name: 'Contacts',
		data(){
			return {
				contacts: [],
				navList: [],
				contactsHeaderList: []	
			};
		},
		components:{
			MeScroll
		},
		created(){	
			this.init();				
		},
		mounted(){
			/*
			   操作dom就在这个函数里面
			   更新滚动条，
			   委托父元素监听点击事件 
			*/
			this.updateScroll();
			let myThis = this;
			var a = document.getElementsByClassName("contact-nav-box")[0];
			a.addEventListener("click", (e) =>{
				var c = e.target.innerHTML;				

				var b = document.getElementById(c);				
				var d = b.offsetTop;
				myThis.$refs.scroll.scrollTo(-d);
				
			}, true);
			
		},
		methods:{
			init(){	
			/*
			**生成nav
			**/			
				let initCode = 64;
				for(var i = 0; i < 26; i++){
					initCode += 1;
					let charCode = String.fromCharCode(initCode.toString(10));					
					this.navList[i] = charCode;
				}
				
				this.navList.push("#");
			/*
			*写contacts数组			
			**/ let contactsNumber = randomNum(26,150);//随机联系人数量
				let codeNum = 64; //A是65
				let curCodeNum;  //保存新的codeNum
				let closeToke = 1;
				for(var i = 0; i < contactsNumber; i++){					
					this.contacts[i] = {};
					curCodeNum = codeNum + (codeNum === 64 ? 1 : (Math.random() > 0.7));
							
					if(curCodeNum > codeNum){ //如果加了1 转换为chat作为id
						if(curCodeNum < 64 + 26){
							codeNum = curCodeNum;
							var charCode = String.fromCharCode(curCodeNum.toString(10));
							this.contacts[i].id = charCode;
							this.contacts[i].idCode = charCode;
						}else if(closeToke){
							this.contacts[i].id = "#";
							this.contacts[i].idCode = "#";
							closeToke = false;
						}
						
					}
					this.contacts[i].pic = "https://uploadbeta.com/api/pictures/random/?key=%E6%8E%A8%E5%A5%B3%E9%83%8E";
					this.contacts[i].name = randName();	
				}			
				this.contactsHeaderList = [{
					backgroundClass: {"bg-blue": false},
					iconClass: {"icon-gouwuche": true},
					content: "新的朋友"
				},{
					backgroundClass: {"bg-blue": true},
					iconClass: {"icon-gouwuche": true},
					content: "群聊"
				},{
					backgroundClass: {"bg-green": true},
					iconClass: {"icon-gouwuche": true},
					content: "标签"
				},{
					backgroundClass: {"bg-green": true},
					iconClass: {"icon-gouwuche": true},
					content: "公众号"
				}];
			},


			updateScroll(){								
				this.$refs.scroll.updataScroll();
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