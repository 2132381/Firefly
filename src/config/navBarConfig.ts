import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [];

	// 主页
	links.push(LinkPresets.Home);

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 归档
			LinkPresets.Archive,

			// 分类
			LinkPresets.Categories,

			// 标签
			LinkPresets.Tags,

			// 系列
			LinkPresets.Series,
		],
	});

	//社交及其子菜单
	links.push({
		name: "社交",
		url: "#",
		icon: "material-symbols:group",
		children: [
			// 友链
			LinkPresets.Friends,

			// 留言
			LinkPresets.Guestbook,
		],
	});

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		children: [
			// 动态
			LinkPresets.Dynamic,

			// 项目
			LinkPresets.Projects,

			// 相册
			LinkPresets.Gallery,

			// 打赏
			LinkPresets.Sponsor,

			// 哔哩哔哩追番
			LinkPresets.Bilibili,

		],
	});

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [

			// 关于页面
			LinkPresets.About,
		],
	});

	// 自定义导航栏链接
	links.push({
		name: "电视剧",
		url: "#",
		icon: "material-symbols:link",
		// 子菜单
		children: [
			{
				name: "早春晴朗",
				url: "https://v.youku.com/v_show/id_XNjU0NTk3OTUwMA==.html?spm=a2hkl.14919748_WEBHOME_HOME.drawer1.d_zj1_1&s=ffefaad54c434973b4d6&scm=20140719.rcmd.52803.show_ffefaad54c434973b4d6&alginfo=-1reqId-2d7380555.faf7.4ed5.89e8.4a41e8df8b2b_1788962242935-1sceneId-247047-1abId-2501295-1seqId-21a2KGtp0C16nd4CI&pv_scm=20140719.rcmd.52803.show_ffefaad54c434973b4d6&pv_spm=a2hkl.14919748_WEBHOME_HOME.drawer1.d_zj1_1",
				external: true,
				icon: "material-symbols:favorite",
			},
			{
				name: "冬至",
				url: "https://qy.net/9cIXgkj-cc?vfrm=pcw_album_auto",
				external: true,
				icon: "material-symbols:favorite",
			},
			{
				name: "香蜜沉沉烬如霜",
				url: "https://qy.net/f0IWJ5W-32?vfrm=pcw_album_auto",
				external: true,
				icon: "material-symbols:favorite",
			},
			{
				name: "女心理师",
				url: "https://v.youku.com/v_show/id_XNTIwMDg0Nzc5Mg==.html?spm=a2hkm.8166622.PhoneSokuProgram_1.dplaybutton&s=efbabead49894ce7ae07&pv_spm=a2hkm.8166622.PhoneSokuProgram_1.dplaybutton",
				external: true,
				icon: "material-symbols:favorite",
			},
		],
	});

	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://docs-firefly.cuteleaf.cn",
	// 	external: true,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Series: {
		name: "系列",
		url: "/series/",
		icon: "material-symbols:layers",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:link-2-rounded",
		pageKey: "friends",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	Dynamic: {
		name: "动态",
		url: "/dynamic/",
		icon: "material-symbols:forum-rounded",
		pageKey: "dynamic",
	},
	Projects: {
		name: "项目",
		url: "/projects/",
		icon: "material-symbols:rocket-launch",
		pageKey: "projects",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Booknav: {
		name: "书签导航",
		url: "/booknav/",
		icon: "material-symbols:bookmarks",
		pageKey: "booknav",
	},
	Bilibili: {
		name: "哔哩哔哩",
		url: "/bilibili/",
		icon: "fa7-brands:bilibili",
		pageKey: "bilibili",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	VNDB: {
		name: "VNDB",
		url: "/vndb/",
		icon: "material-symbols:chrome-reader-mode-rounded",
		pageKey: "vndb",
	},
	MAL: {
		name: "AnimeList",
		url: "/myanimelist/",
		icon: "material-symbols:menu-book",
		pageKey: "mal",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
