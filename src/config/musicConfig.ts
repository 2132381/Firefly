import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 是否在侧边栏显示音乐播放器组件
	showInSidebar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "10046455237",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "她",
				artist: "刘宇宁",
				url: "https://yuy.cn-nb1.rains3.com/%E5%88%98%E5%AE%87%E5%AE%81%20-%20%E5%A5%B9.flac",
				cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cd/f6/2e/cdf62ea2-5b30-8b59-f51e-bafe849cdf6e/4896043185721.jpg/316x316cc.webp",
				lrc: "",
			},
			{
				name: "想念你想我",
				artist: "Eric周兴哲",
				url: "https://yuy.cn-nb1.rains3.com/%E6%83%B3%E5%BF%B5%E4%BD%A0%E6%83%B3%E6%88%91.flac",
				cover: "https://yuy.cn-nb1.rains3.com/109951170150945491.jpg",
				lrc: "",
			},
			{
				name: "白日断夜",
				artist: "黄景瑜",
				url: "https://yuy.cn-nb1.rains3.com/%E7%99%BD%E6%97%A5%E6%96%AD%E5%A4%9C.flac",
				cover: "https://yuy.cn-nb1.rains3.com/109951170300412484.jpg",
				lrc: "",
			},
			{
				name: "此刻",
				artist: "袁娅维TIA RAY",
				url: "https://yuy.cn-nb1.rains3.com/%E8%A2%81%E5%A8%85%E7%BB%B4TIA%20RAY%20-%20%E6%AD%A4%E5%88%BB.flac",
				cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3c/7b/87/3c7b877a-25d4-5a6c-6b50-7e9187251e10/4896043209014.jpg/300x300bb.webp",
				lrc: "",
			},
			{
				name: "不染",
				artist: "萨顶顶",
				url: "https://yuy.cn-nb1.rains3.com/%E8%90%A8%E9%A1%B6%E9%A1%B6%20-%20%E4%B8%8D%E6%9F%93.flac",
				cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f9/ec/aa/f9ecaab0-c103-86d4-9a38-76342524fd51/4718009706620.jpg/300x300bb.webp",
				lrc: "",
			},
			{
				name: "不染",
				artist: "毛不易",
				url: "https://yuy.cn-nb1.rains3.com/%E6%AF%9B%E4%B8%8D%E6%98%93%20-%20%E4%B8%8D%E6%9F%93.flac",
				cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f9/ec/aa/f9ecaab0-c103-86d4-9a38-76342524fd51/4718009706620.jpg/300x300bb.webp",
				lrc: "",
			},
			{
				name: "天地无霜",
				artist: "杨紫&邓伦",
				url: "https://yuy.cn-nb1.rains3.com/%E6%9D%A8%E7%B4%AB%20_%20%E9%82%93%E4%BC%A6%20-%20%E5%A4%A9%E5%9C%B0%E6%97%A0%E9%9C%9C%20%28%E5%90%88%E5%94%B1%E7%89%88%29.flac",
				cover: "https://p1.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130",
				lrc: "",
			},
			{
				name: "情霜",
				artist: "杨紫",
				url: "https://yuy.cn-nb1.rains3.com/%E6%9D%A8%E7%B4%AB%20-%20%E6%83%85%E9%9C%9C.flac",
				cover: "https://p1.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130",
				lrc: "",
			},
			{
				name: "亲爱的陌生人",
				artist: "郑沐晴",
				url: "https://yuy.cn-nb1.rains3.com/%E9%83%91%E6%B2%90%E6%99%B4%20-%20%E4%BA%B2%E7%88%B1%E7%9A%84%E9%99%8C%E7%94%9F%E4%BA%BA.flac",
				cover: "https://yuy.cn-nb1.rains3.com/109951170300412484.jpg",
				lrc: "",
			},
			{
				name: "左手指月",
				artist: "萨顶顶",
				url: "https://yuy.cn-nb1.rains3.com/%E8%90%A8%E9%A1%B6%E9%A1%B6%20-%20%E5%B7%A6%E6%89%8B%E6%8C%87%E6%9C%88.flac",
				cover: "https://p1.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130",
				lrc: "",
			},
			{
				name: "胜者",
				artist: "梵胜",
				url: "https://yuy.cn-nb1.rains3.com/%E6%A2%B5%E8%83%9C%20-%20%E8%83%9C%E8%80%85.flac",
				cover: "https://yuy.cn-nb1.rains3.com/OSK.jpg",
				lrc: "",
			},
		],
	},
};
