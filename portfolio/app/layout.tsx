import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Darren Mo - Software Developer',
	description:
		'Welcome to my portfolio! I am a student at the University of Pennsylvania, passionate about software development, machine learning, and social science. Explore my projects and skills.',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Darren Mo',
	],
	authors: [{ name: 'Darren Mo' }],
	creator: 'Darren Mo',
	openGraph: {
		title: 'Darren Mo - Software Developer Portfolio',
		description: 'I am a student at the University of Pennsylvania, passionate about software development, machine learning, and social science. Explore my projects and skills.',
		url: 'https://darren-portfolio-seven.vercel.app/',
		siteName: 'Darren Mo - Portfolio',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Darren Mo - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Darren Mo - Software Developer',
		description: 'I am a student at the University of Pennsylvania, passionate about software development, machine learning, and social science. Explore my projects and skills.',
		creator: '@yourusername',
		images: ['/og-image.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
