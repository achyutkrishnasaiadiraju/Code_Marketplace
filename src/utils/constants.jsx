import { FaRegIdCard } from 'react-icons/fa'
import { MdPeopleAlt, MdOutlinePeopleAlt } from 'react-icons/md'
import { GrArticle } from 'react-icons/gr'
import { FaCode } from 'react-icons/fa6'

export const navbarMenus = [
	{
		href: '/',
		label: 'Home',
	},
	{
		href: '/topics',
		label: 'Topics',
	},
	{
		href: '/profile',
		label: 'Profile',
	},
]

export const profileMenus = [
	{
		href: '',
		label: 'Profile',
		tag: 'profile',
		icon: <FaRegIdCard />,
	},
	{
		href: 'followers',
		label: 'Followers',
		tag: 'followers',
		icon: <MdPeopleAlt />,
	},
	{
		href: 'following',
		label: 'Following',
		tag: 'following',
		icon: <MdOutlinePeopleAlt />,
	},
	{
		href: 'following-topic',
		label: 'Following Topic',
		tag: 'following-topic',
		icon: <GrArticle />,
	},
	{
		href: 'subscribed-code',
		label: 'Subscribed Code',
		tag: 'subscribed-code',
		icon: <FaCode />,
	},
]
