// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🎶🌲ForestWare🌲🎶',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/mamonulabs' }],
			sidebar: [
				{
					label: 'About',
					slug: 'about',
				},
				{
					label: 'Plugins',
					items: [
						{ label: 'Overview', slug: 'plugins/overview' },
						{ label: 'ProbCreepyArp', slug: 'plugins/probcreepyarp' },
						{ label: 'ProbDropoutAudio', slug: 'plugins/probdropoutaudio' },
						{ label: 'ProbDropoutMidi', slug: 'plugins/probdropoutmidi' },
						{ label: 'ProbPitchMidi', slug: 'plugins/probpitchmidi' },
						{ label: 'ProbStutter', slug: 'plugins/probstutter' },
						{ label: 'StaticPlethorium', slug: 'plugins/staticplethorium' },
						{ label: 'SyncRoboVerb', slug: 'plugins/syncroboverb' },
					],
				},
				{
					label: 'Articles',
					autogenerate: { directory: 'articles' },
				},
				{
					label: 'InfoBits',
					autogenerate: { directory: 'infobits' },
				},
				{
					label: 'Blog',
					slug: 'blog',
				},
			],
		}),
	],
});
